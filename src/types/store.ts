export interface ModalStore {
  modalState: {
    type: string;
    display: boolean;
    component?: React.ReactNode;
  };
  setIsModalOn: (type: string, display: boolean) => void;
  setComponent: (component: React.ReactNode) => void;
}
