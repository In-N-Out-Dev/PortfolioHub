import { create } from 'zustand';

// zustand example
export interface ModalProps {
  isModalOn: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalStore = create<ModalProps>((set) => ({
  isModalOn: false,
  openModal: () => set({ isModalOn: true }),
  closeModal: () => set({ isModalOn: false }),
}));
