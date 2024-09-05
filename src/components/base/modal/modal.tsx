import { AnimatePresence, motion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { HiOutlineX } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { withPortal } from "@/hoc/with-portal";
import useModal from "@/hooks/use-modal";

import { defaultModalAnimation, defaultModalBackdropAnimation } from "./utils";

interface ModalProps {
  children: ReactNode;
  className?: string;
  header: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const PageModal = ({
  children,
  className,
  header,
  isOpen,
  onClose,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModal(
    isOpen,
    () => {
      onClose?.();
    },
    modalRef,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            {...defaultModalAnimation}
            className="max-h-4/5 max-w-4/5 fixed z-50 flex h-[500px] w-[500px] bg-white"
            ref={modalRef}
          >
            <h1 className="text-2xl font-semibold tracking-normal text-gray-900">
              {header}
            </h1>
            <button
              className={twMerge("")}
              disabled={!onClose}
              onClick={onClose}
            >
              <HiOutlineX className="h-4 w-4 text-gray-900" />
            </button>
            {children}
          </motion.div>
          <motion.div
            {...defaultModalBackdropAnimation}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/45"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const Modal = withPortal(PageModal);
