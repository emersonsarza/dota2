import { createStyleWithClassName } from './utils/styles';

export const Background = createStyleWithClassName('div', '')`
  height: 100vh;
  overflow-y: overlay;
  background-size: cover; 
  background-attachment: fixed;
  color: ${({ theme }) => theme.font};

  background: conic-gradient(
      from 31deg at 80% 65%, 
      ${({ theme }) => theme.background[3]} 121deg, 
      ${({ theme }) => theme.background[2]} 0% 50%, 
      ${({ theme }) => theme.background[1]} 0% calc(180deg + 121deg), 
      ${({ theme }) => theme.background[2]} 0%
    );
`;

export const Container = createStyleWithClassName(
  'div',
  'container mx-auto px-8'
)`
  max-width: 1000px;
`;
