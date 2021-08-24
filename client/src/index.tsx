import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import App from './components/App';
import GlobalStyle from './styles/global.style';

// CSSリセット
import 'modern-css-reset';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
