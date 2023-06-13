import { ModalStore } from 'types/store';
import { create } from 'zustand';

export const ModalType = {
  PORTFOLIO_DETAILED: 'portfolioDetailed',
};

export const useModalStore = create<ModalStore>((set) => ({
  modalState: {
    type: '',
    display: false,
  },
  setIsModalOn: (type, status) => set({ modalState: { type: type, display: status } }),
}));
