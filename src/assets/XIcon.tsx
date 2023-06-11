import styled from '@emotion/styled';

const XIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M14.6606 4.16077L15.8392 5.33928L11.1781 9.99993L15.8392 14.6608L14.6606 15.8393L9.99981 11.1783L5.33916 15.8393L4.16064 14.6608L8.82148 9.99993L4.16064 5.33928L5.33916 4.16077L9.99981 8.8216L14.6606 4.16077Z" />
    </svg>
  );
};

const Path = styled.path`
  fill: ${({ theme }) => theme.colors.MAIN_FONT};
`;

export default XIcon;
