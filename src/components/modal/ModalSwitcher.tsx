import { PortfolioDetailedModal } from 'components/modal';
import { useModalStore, ModalType } from 'stores/useModalStore';

const ModalSwitcher = () => {
  const { modalState } = useModalStore((state) => ({
    modalState: state.modalState,
  }));

  if (modalState.display) {
    if (modalState.type === ModalType.PORTFOLIO_DETAILED)
      return (
        <>
          <PortfolioDetailedModal />
        </>
      );
  }
  return <></>;
};

export default ModalSwitcher;
