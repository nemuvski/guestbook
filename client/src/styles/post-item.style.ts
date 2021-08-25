import { css } from '@emotion/react';

const root = css`
  position: relative;
  overflow: hidden;
  margin-top: 2.75rem;
  padding: 2.5rem 1.5rem 1rem;
  word-break: break-all;
  border-radius: 0.2rem;
  box-shadow: 0 3px 10px -6px var(--color-gray-dark);
`;

const body = css`
  margin: 0;
  line-height: 1.8;
`;

const createdAt = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 10.8rem;
  padding: 0.4rem 0.6rem;
  color: var(--color-back);
  background-color: var(--color-primary);
  font-size: 0.8rem;
  border-bottom-right-radius: 0.2rem;
`;

const createdAtValue = css`
  margin-left: 0.3rem;
`;

const postItemStyle = {
  root,
  body,
  createdAt,
  createdAtValue,
};

export default postItemStyle;
