import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import HoverInteractionButton from 'components/common/HoverInteractionButton';
import SectionCard from 'components/common/SectionCard';
import ViewModeButton from 'components/common/ViewModeButton';
import { motion } from 'framer-motion';
import { contentVariants, titleVariants } from 'styles/interaction';
import { ListHeaderProps } from 'types/props';

interface Props extends PropsWithChildren, ListHeaderProps {
  title: string;
}

const ListCard = ({ title, children, ViewModeState, setViewModeState }: Props) => {
  return (
    <SectionCard id={title}>
      <TitleWrapper>
        <TextWrapper
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Title>{title}</Title>
          <TitleDescription>대표적인 블로그 포스팅</TitleDescription>
        </TextWrapper>
        <ViewModeButton
          ViewModeState={ViewModeState}
          setViewModeState={setViewModeState}
        />
      </TitleWrapper>
      <ArticleWrapper
        variants={contentVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {children}
      </ArticleWrapper>
      <ButtonPositioner>
        <HoverInteractionButton />
      </ButtonPositioner>
    </SectionCard>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;

  ${({ theme }) => theme.breakPoint.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 4.8rem;
  line-height: 4.8rem;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const TitleDescription = styled.p`
  font-size: 1.3rem;
  line-height: 3.2rem;
  color: #858585;
`;

const ArticleWrapper = styled(motion.article)`
  margin: 6rem 0;
`;

const ButtonPositioner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default ListCard;
