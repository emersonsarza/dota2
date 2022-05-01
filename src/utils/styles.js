import styled from 'styled-components';

export const createStyleWithClassName = (elementTag, className) =>
  styled[elementTag].attrs({ className });
