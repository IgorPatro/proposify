import React from "react";

import { Modal } from "@/components/base/modal";

interface CreateOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateOfferModal = ({
  isOpen,
  onClose,
}: CreateOfferModalProps) => {
  return (
    <Modal onClose={onClose} header="Create offer" isOpen={isOpen}>
      CreateOfferModal
    </Modal>
  );
};
