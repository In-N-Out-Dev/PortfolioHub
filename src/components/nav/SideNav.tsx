import styled from '@emotion/styled';

const SideNav = () => {
  return (
    <SideNavWrapper>
      <ContentWrapper>
        <div>menu</div>
        <div>menu</div>
        <div>menu</div>
        <div>menu</div>
      </ContentWrapper>
    </SideNavWrapper>
  );
};

const SideNavWrapper = styled.aside`
  background-color: lightblue;
`;

const ContentWrapper = styled.div`
  position: sticky;
  top: 50vh;
  height: fit-content;
  border: 1px solid #000;
`;

export default SideNav;
