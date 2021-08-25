import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const root = css`
  position: fixed;
  z-index: 10;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: var(--color-primary);
  border-bottom: 0.25rem solid var(--color-primary-light);
  transition: opacity ease-in-out 0.3s;
`;

const title = css`
  color: var(--color-back);
  font-family: 'Kaushan Script', cursive;
  font-size: 2.25rem;
  letter-spacing: 0.05rem;

  ${bp(Breakpoint.XS_MAX, false)} {
    text-align: center;
  }
`;

const headerStyle = {
  root,
  title,
};

export default headerStyle;
