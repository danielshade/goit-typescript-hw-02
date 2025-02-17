import { useEffect, ReactNode } from "react";
import { Image } from "../../types/Image.types";
import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: Image | null;
  children?: ReactNode;
  onNavigate?: (direction: "next" | "prev") => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  image,
  onNavigate,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate?.("prev");
      } else if (e.key === "ArrowRight") {
        onNavigate?.("next");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose, onNavigate]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      ariaHideApp={false}
    >
      {image && (
        <div className={s.content}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={s.image}
          />
          <p className={s.description}>
            {image.description || "No description available"}
          </p>
          <p className={s.author}>
            Author: {image.user ? image.user.name : "Unknown"}
          </p>
        </div>
      )}
      <button onClick={onClose} className={s.closeBtn}>
        ✕
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;