import React from "react";

import { Dialog } from "../base/dialog";
import { ImageUploader } from "../base/image-uploader";

interface ImagePickerDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePickerDialog = ({
  isOpen,
  onClose,
}: ImagePickerDialogProps) => {
  return (
    <Dialog header="Wybierz swoje zdjęcie" isOpen={isOpen} onClose={onClose}>
      <ImageUploader onUpload={(formData) => console.log(formData)} />
    </Dialog>
  );
};
