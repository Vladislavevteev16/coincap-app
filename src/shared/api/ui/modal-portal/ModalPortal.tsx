import { createPortal } from "react-dom";

import s from "./ModalPortal.module.css";

type ModalPortalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
};

export const ModalPortal: React.FC<ModalPortalProps> = ({
  isOpen,
  children,
  handleCloseModal,
}) => {
  const modalRoot = document.getElementById("modal");

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void =>
    e.stopPropagation();

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={s.modalOverlay} onClick={handleCloseModal}>
      <div className={s.modalContainer} onClick={stopPropagation}>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};
