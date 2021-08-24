import React from 'react';
import HeaderStyle from '../styles/header.style';
import InnerContainer from './InnerContainer';

const Header = () => {
  return (
    <header css={HeaderStyle.root}>
      <InnerContainer>
        <h1 css={HeaderStyle.title}>Guestbook</h1>
      </InnerContainer>
    </header>
  );
};

export default Header;
