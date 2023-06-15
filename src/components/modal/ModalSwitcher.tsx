import { PortfolioDetailedModal } from 'components/modal';
import { useModalStore, ModalType } from 'stores/useModalStore';

import MobileNavModal from './MobileNavModal';

const ModalSwitcher = () => {
  const { modalState } = useModalStore((state) => ({
    modalState: state.modalState,
  }));

  if (modalState.display) {
    if (modalState.type === ModalType.PORTFOLIO_DETAILED) return <PortfolioDetailedModal />;
    if (modalState.type === ModalType.MOBILE_MENU) return <MobileNavModal />;
  }
  return <></>;
};

export default ModalSwitcher;
