import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const googleFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Kaushan+Script&display=swap');
`;

const palette = css`
  :root {
    --color-back: rgb(255, 255, 255);
    --color-text: rgb(0, 0, 0);
    --color-primary: rgb(46, 196, 182);
    --color-primary-light: rgb(203, 243, 240);
  }
`;

const base = css(
  googleFonts,
  palette,
  css`
    html {
      scroll-behavior: auto;
      font-size: 15px;

      ${bp(Breakpoint.M_MIN)} {
        font-size: 16px;
      }

      &:focus-within {
        scroll-behavior: auto;
      }
    }

    body {
      background-color: var(--color-bg);
      color: var(--color-text);
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1.15;
    }

    small {
      font-size: 0.8rem;
    }
  `
);

export default base;
