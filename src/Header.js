import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 120px;
  padding: 0 60px;
  font-weight: bold;
  font-size: 36px;
  font-style: italic;
  border-bottom: 1px solid #111;
`;

const Header = () => {
  return (
    <StyledHeader className='header'>Wanted Pre-onboarding course</StyledHeader>
  )
}

export default Header;
