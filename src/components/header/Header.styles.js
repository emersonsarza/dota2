import { createStyleWithClassName } from '../../utils/styles';
import DarkLogo from '../../assets/img/dota2_logo_horiz.png';
import LightLogo from '../../assets/img/dota2_logo_horiz_light.png';
import { THEME } from '../../contants/theme';

export const Container = createStyleWithClassName(
  'nav',
  'flex justify-between items-center'
)`
  height: 72px;
`;

export const Logo = createStyleWithClassName('div', 'my-4')`
  height: 40px;
  aspect-ratio: 386 / 76;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('${({ theme }) =>
    theme.name === THEME.DARK ? DarkLogo : LightLogo}');
`;
