import { useEffect } from "react";

const useModal = (
  open: boolean,
  onClose: () => void,
  modalRef: React.RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    // const handleOutsideClick = (event: MouseEvent) => {
    //   if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //     onClose();
    //   }
    // };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.querySelector("body")?.classList.add("overflowHidden");
      // document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      // document.removeEventListener("mousedown", handleOutsideClick);
      document.querySelector("body")?.classList.remove("overflowHidden");
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [open, onClose, modalRef]);
};

export default useModal;
