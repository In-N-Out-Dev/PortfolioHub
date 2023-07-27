import styled from '@emotion/styled';
import ViewModeButton from 'components/common/ViewModeButton';
import { motion } from 'framer-motion';
import { titleVariants } from 'styles/interaction';
import { ListHeaderProps } from 'types/props';

const PortfolioHeader = ({ ViewModeState, setViewModeState }: ListHeaderProps) => {
  return (
    <TitleWrapper>
      <Title
        variants={titleVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        PORTFOLIO
      </Title>
      <ViewModeButton
        ViewModeState={ViewModeState}
        setViewModeState={setViewModeState}
      />
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(motion.h3)`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default PortfolioHeader;
