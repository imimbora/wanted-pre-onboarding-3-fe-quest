import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  border-bottom: 1px solid #111;
  .logo {
    font-weight: bold;
    font-size: 36px;
    font-style: italic;
    color: #111;
    text-decoration: none;
  }
  .login {
    font-size: 20px;
    color: #333;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" className="logo">Wanted Pre-onboarding course</Link>
      <Link to="/login" className="login">Login</Link>
    </StyledHeader>
  )
}

export default Header;
