import styled from '@emotion/styled';
import ToggleButton from 'components/common/buttons/ToggleButton';
import SunIcon from 'components/common/icons/SunIcon';

import MoonIcon from '../common/icons/MoonIcon';

const ThemeToggleButton = () => {
  return (
    <Wrapper>
      <SunIcon
        width={22}
        height={22}
        color={'#000'}
      />
      <ToggleButton />
      <MoonIcon
        width={20}
        height={20}
        color={'#000'}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default ThemeToggleButton;
