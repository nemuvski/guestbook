import React from 'react';
import HeaderStyle from '../styles/header.style';
import InnerContainer from './InnerContainer';
import { useScroll } from '../hooks/useScroll';

const Header = () => {
  const isMoved = useScroll(60);

  return (
    <header
      css={HeaderStyle.root}
      style={{
        opacity: isMoved ? 0.8 : 1,
      }}
    >
      <InnerContainer>
        <h1 css={HeaderStyle.title}>Guestbook</h1>
      </InnerContainer>
    </header>
  );
};

export default Header;
