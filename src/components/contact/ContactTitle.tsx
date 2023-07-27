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
  height: 9rem;
  width: fit-content;
  ${({ theme }) => theme.breakPoint.small} {
    height: 6.3rem;
  }
`;

const Span = styled.span`
  position: relative;
  top: -1rem;
  font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 12.8rem;
  line-height: 1;
  vertical-align: top;
  ${({ theme }) => theme.breakPoint.small} {
    font-size: 8.96rem;
  }
`;

const CircleIcon = styled.div`
  position: absolute;
  right: -3rem;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.colors.HIGHLIGHT};
  border-radius: 50%;
  animation: blink 1s infinite;

  ${({ theme }) => theme.breakPoint.small} {
    right: -2rem;
    width: 1.05rem;
    height: 1.05rem;
  }

  @keyframes blink {
    0% {
      background-color: transparent;
    }
    100% {
      background-color: ${({ theme }) => theme.colors.HIGHLIGHT};
    }
  }
`;

export default ContactTitle;
