import { ModalStore } from 'types/store';
import { create } from 'zustand';

export const ModalType = {
  PORTFOLIO_DETAILED: 'portfolioDetailed',
  MOBILE_MENU: 'mobileMenu',
};

export const useModalStore = create<ModalStore>((set) => ({
  modalState: {
    type: '',
    display: false,
  },
  setIsModalOn: (type, status) =>
    set(({ modalState }) => ({ modalState: { ...modalState, type: type, display: status } })),
  setComponent: (component) =>
    set(({ modalState }) => ({ modalState: { ...modalState, component } })),
}));
