import styled from '@emotion/styled';

const ContactTitle = () => {
  return (
    <Title>
      <Span>Contact</Span>
      <CircleIcon />
    </Title>
  );
};

const Title = styled.h2`
  position: relative;
  color: ${({ theme }) => theme.colors.MAIN_FONT};
`;

const Span = styled.span`
  position: relative;
  top: -1rem;
  font-family: 'Bebas Neue', cursive;
  font-size: 12.8rem;
  line-height: 1;
  vertical-align: top;
`;

const CircleIcon = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.HIGHTLIGHT};
  border-radius: 50%;
`;

export default ContactTitle;
