import { createStyleWithClassName } from '../../utils/styles';

export const Name = createStyleWithClassName(
  'p',
  'flex items-center text-l absolute bottom-0 left-0 right-0 font-bold p-2'
)`
  opacity: 0;
  color: #ffffff;
  background:  linear-gradient(0deg, rgba(11,12,16,1) 0%, transparent 100%);
`;

export const Container = createStyleWithClassName(
  'li',
  'hover:z-10 hover:scale-150 hover:duration-300'
)`
  filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.8));

  &:hover ${Name} {
    opacity: 1;
  }
`;

export const Image = createStyleWithClassName(
  'img',
  'aspect-video w-full transition cursor-pointer'
)`
`;
