import { createPortal } from "react-dom";

import * as Styled from "./ModalWrapper.styles";

type ModalPortalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
};

export const ModalWrapper: React.FC<ModalPortalProps> = ({
  isOpen,
  children,
  handleCloseModal,
}) => {
  const modalRoot = document.getElementById("modal");

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>): void =>
    e.stopPropagation();

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <Styled.Overlay onClick={handleCloseModal}>
      <Styled.Container onClick={stopPropagation}>{children}</Styled.Container>
    </Styled.Overlay>,
    modalRoot,
  );
};
