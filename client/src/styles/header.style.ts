import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const root = css`
  position: fixed;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.5rem;
  background-color: var(--color-primary);
  border-bottom: 0.25rem solid var(--color-primary-light);
`;

const title = css`
  color: var(--color-back);
  font-family: 'Kaushan Script', cursive;
  font-size: 2.25rem;
  letter-spacing: 0.05rem;
  text-align: center;

  ${bp(Breakpoint.S_MIN)} {
    text-align: left;
  }
`;

const headerStyle = {
  root,
  title,
};

export default headerStyle;
