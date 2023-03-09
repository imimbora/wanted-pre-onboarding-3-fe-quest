import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  border-right: 1px solid #111;
  & > a {
    font-size: 20px;
    line-height: 3;
    color: #333;
    text-decoration: none;
    &.active {color: cornflowerblue;}
  }
`;

const Nav = () => {
  return (
    <StyleNav>
      <NavLink to="/a" activeclass="active">Page A</NavLink>
      <NavLink to="/b" activeclass="active">Page B</NavLink>
      <NavLink to="/c" activeclass="active">Page C</NavLink>
    </StyleNav>
  )
}

export default Nav;
