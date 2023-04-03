import styled from '@emotion/styled';

const SideNav = () => {
  return (
    <SideNavWrapper>
      <ContentWrapper>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ContentWrapper>
    </SideNavWrapper>
  );
};

const SideNavWrapper = styled.aside``;

const ContentWrapper = styled.ul`
  position: sticky;
  top: 50vh;
  height: fit-content;
  width: 100%;
`;

export default SideNav;
