import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const root = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.75rem;
`;

const button = css`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-secondary-light);
  color: var(--color-back);
  border-radius: 0.2rem;

  ${bp(Breakpoint.S_MIN)} {
    &:not(:disabled):hover {
      background-color: var(--color-secondary);
    }
  }
`;

const postListPaginationStyle = {
  root,
  button,
};

export default postListPaginationStyle;
