import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import App from './components/App';
import { store } from './stores/store';
import GlobalStyle from './styles/global.style';

// CSSリセット
import 'modern-css-reset';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
