import React from 'react';
import InnerContainerStyle from '../styles/inner-container.style';

const InnerContainer: React.FC = ({ children }) => <div css={InnerContainerStyle.root}>{children}</div>;

export default InnerContainer;
