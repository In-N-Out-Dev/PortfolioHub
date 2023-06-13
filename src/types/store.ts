export interface ModalStore {
  modalState: {
    type: string;
    display: boolean;
  };
  setIsModalOn: (type: string, display: boolean) => void;
}
