import { createStyleWithClassName } from '../../utils/styles';

export const Title = createStyleWithClassName(
  'h1',
  'text-3xl md:text-5xl font-bold text-center tracking-wider uppercase mt-8'
)`
`;

export const Description = createStyleWithClassName(
  'p',
  'text-sm md:text-2xl text-center mt-5'
)``;

export const Filter = createStyleWithClassName(
  'div',
  'mt-12 grid p-4 items-center text-center md:text-left font-bold tracking-wider uppercase drop-shadow-2xl grid-cols-1 md:grid-cols-3'
)`
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, ${({ theme }) =>
    theme.font}, transparent);
  border-radius: 3px;
  min-height: 72px;
  width: 100%;
  background: linear-gradient(
    90deg, 
    ${({ theme }) => theme.filterBg[0]} 0%, 
    ${({ theme }) => theme.filterBg[1]} 30%, 
    ${({ theme }) => theme.filterBg[2]} 100%
  );
`;

export const HeroListContainer = createStyleWithClassName(
  'ul',
  'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 py-4 gap-5'
)`
  animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  animation: bounce 1s ease-in-out;
  @keyframes bounce {
    0% {
      opacity: 0.2;
      transform: translateY(15%);
    }
    50% {
      opacity: 0.2;
      transform: translateY(15%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const EmptyState = createStyleWithClassName(
  'p',
  'flex items-center text-3xl md:text-3xl font-bold justify-center tracking-wider uppercase mt-8'
)`
  min-height: 150px;
`;
