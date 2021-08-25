import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const root = css`
  display: flex;
  align-items: flex-start;

  ${bp(Breakpoint.XS_MAX, false)} {
    flex-direction: column;
  }
`;

const field = css`
  position: relative;
  flex: 1 1 auto;
  margin-bottom: 1.5rem;

  ${bp(Breakpoint.XS_MAX, false)} {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const fieldBody = css`
  width: 100%;
  height: 3rem;
  padding: 0 0.75rem;
  background-color: var(--color-back);
  color: var(--color-text);
  border-width: 0.15rem;
  border-style: solid;
  border-color: var(--color-gray);
  border-radius: 0.2rem;
  // 16px固定とする
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const fieldBodyErrorMessage = css`
  position: absolute;
  left: 0;
  bottom: -1.25rem;
  color: var(--color-error);
  font-size: 0.8rem;
`;

const fieldBodyLength = css`
  position: absolute;
  right: 0;
  bottom: -1.25rem;
  color: var(--color-gray-dark);
  font-size: 0.8rem;
`;

const action = css`
  height: 3rem;
  background-color: var(--color-secondary-light);
  color: var(--color-back);
  border-radius: 0.2rem;

  ${bp(Breakpoint.XS_MAX, false)} {
    width: 100%;
  }
  ${bp(Breakpoint.S_MIN)} {
    flex: 0 0 3rem;
    margin-left: 0.5rem;

    &:not(:disabled):hover {
      background-color: var(--color-secondary);
    }
  }
`;

const postFormStyle = {
  root,
  field,
  fieldBody,
  fieldBodyErrorMessage,
  fieldBodyLength,
  action,
};

export default postFormStyle;
