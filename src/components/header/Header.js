import React from 'react';
import { useTheme } from '../../utils/ThemeProvider';
import { ReactComponent as SVGDark } from '../../assets/icons/theme/dark.svg';
import { ReactComponent as SVGLight } from '../../assets/icons/theme/light.svg';

import { Container, Logo } from './Header.styles';
import { THEME } from '../../contants/theme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Logo />
      <span
        className='cursor-pointer opacity-80 hover:opacity-100'
        onClick={toggleTheme}
      >
        {theme === THEME.DARK ? <SVGDark /> : <SVGLight />}
      </span>
    </Container>
  );
};

export default Header;
