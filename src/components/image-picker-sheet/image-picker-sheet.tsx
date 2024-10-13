import React from "react";

import { UploadButton } from "@/utils/uploadthing";
import { HiCheckCircle } from "react-icons/hi";

import { api } from "@/utils/api";
import { Image } from "../base/image";
import { toast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

interface ImagePickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImageUrl: (url: string) => void;
}

export const ImagePickerSheet = ({
  isOpen,
  onClose,
  onSelectImageUrl,
}: ImagePickerSheetProps) => {
  const {
    data: companyAssets,
    isLoading,
    refetch,
  } = api.asset.getCompanyAssets.useQuery();

  const handleSelectImageUrl = (url: string) => {
    onSelectImageUrl(url);
    onClose();
  };

  const renderCompanyAssets = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!companyAssets) {
      return <p>No assets found</p>;
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        {companyAssets.map((asset) => (
          <div
            key={asset.id}
            className="relative"
            onClick={() => handleSelectImageUrl(asset.url)}
          >
            <Image
              wrapperClassName="w-full aspect-video rounded-lg overflow-hidden"
              fill
              src={asset.url}
              alt="asset"
            />
            <div className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center opacity-0 hover:opacity-100">
              <HiCheckCircle className="h-14 w-14 text-white/80" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Wybierz swoje zdjęcie</SheetTitle>
          <SheetDescription>
            Jezeli nie znalazłeś swojego zdjęcia, możesz je przesłać ponizej
          </SheetDescription>
          <UploadButton
            content={{
              button: "Prześlij zdjęcie",
              allowedContent: "Dostępne formaty: jpg, png, gif",
            }}
            appearance={{
              button: "bg-gray-800 hover:bg-gray-700 text-sm px-4",
              container: "pt-4 pb-8",
            }}
            endpoint="editor"
            onClientUploadComplete={(res) => {
              refetch();
              toast({
                title: "Plik przesłany",
                description: "Mozesz go teraz wybrać w panelu",
              });
            }}
            onUploadError={(error: Error) => {
              toast({
                title: "Nie udało się przesłać pliku",
                description: error.message,
                variant: "destructive",
              });
            }}
          />
        </SheetHeader>
        {renderCompanyAssets()}
      </SheetContent>
    </Sheet>
  );
};
