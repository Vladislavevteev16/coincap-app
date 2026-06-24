import { ModalPortal } from "@/shared/api/ui/modal-portal";

type AddToPortfolioModel = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export const AddToPortfolioModel: React.FC<AddToPortfolioModel> = ({
  isOpen,
  handleCloseModal,
}) => {
  return (
    <ModalPortal handleCloseModal={handleCloseModal} isOpen={isOpen}>
      <div style={{ width: 900, height: 500, backgroundColor: "red" }}></div>
    </ModalPortal>
  );
};
