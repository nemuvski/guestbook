import { css } from '@emotion/react';
import { bp, Breakpoint } from './breakpoints.mixin';

const googleFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Kaushan+Script&display=swap');
`;

const palette = css`
  :root {
    --color-back: rgb(255, 255, 255);
    --color-text: rgb(0, 0, 0);
    --color-gray: rgb(230, 230, 230);
    --color-gray-dark: rgb(160, 160, 160);
    --color-error: rgb(255, 106, 95);
    --color-primary: rgb(46, 196, 182);
    --color-primary-light: rgb(203, 243, 240);
    --color-secondary: rgb(255, 159, 28);
    --color-secondary-light: rgb(255, 191, 105);
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

    input,
    button {
      appearance: none;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }
    }

    button {
      cursor: pointer;
      outline: none;
      border: 0;
    }
  `
);

export default base;
