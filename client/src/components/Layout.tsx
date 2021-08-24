import React from 'react';
import LayoutStyle from '../styles/layout.style';
import Header from './Header';
import InnerContainer from './InnerContainer';

const Layout: React.FC = ({ children }) => {
  return (
    <div css={LayoutStyle.root}>
      <Header />
      <main css={LayoutStyle.main}>
        <InnerContainer>{children}</InnerContainer>
      </main>
      <footer css={LayoutStyle.footer}>
        <small>&copy; 2021 Guestbook</small>
      </footer>
    </div>
  );
};

export default Layout;
