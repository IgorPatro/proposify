import React, { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { toast } from "@/hooks/use-toast";
import { api } from "@/utils/api";
import { UploadButton } from "@/utils/uploadthing";


import { Image } from "../base/image";
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
  const [isUploading, setIsUploading] = useState(false);

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
            className="relative"
            key={asset.id}
            onClick={() => handleSelectImageUrl(asset.url)}
          >
            <Image
              fill
              alt="asset"
              src={asset.url}
              wrapperClassName="w-full aspect-video rounded-lg overflow-hidden"
            />
            <div className="absolute left-0 top-0 flex size-full cursor-pointer items-center justify-center opacity-0 hover:opacity-100">
              <HiCheckCircle className="size-14 text-white/80" />
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
            appearance={{
              button: twMerge(
                "px-4 text-sm hover:bg-gray-700",
                isUploading
                  ? "cursor-not-allowed bg-gray-700 opacity-50"
                  : "cursor-pointer bg-gray-800",
              ),
              container: "pt-4 pb-8",
            }}
            content={{
              allowedContent: "Dostępne formaty: jpg, png, gif",
              button: isUploading ? "Przesyłanie..." : "Prześlij zdjęcie",
            }}
            disabled={isUploading}
            endpoint="editor"
            onClientUploadComplete={() => {
              setIsUploading(false);
              refetch();
              toast({
                description: "Mozesz go teraz wybrać w panelu",
                title: "Plik przesłany",
              });
            }}
            onUploadBegin={() => setIsUploading(true)}
            onUploadError={(error: Error) => {
              setIsUploading(false);
              toast({
                description: error.message,
                title: "Nie udało się przesłać pliku",
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
