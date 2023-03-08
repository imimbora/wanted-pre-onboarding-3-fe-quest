import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleNav = styled.nav``;

const Nav = () => {
  return (
    <StyleNav>
      <Link to="/a">Page A</Link>
      <Link to="/b">Page B</Link>
      <Link to="/c">Page C</Link>
    </StyleNav>
  )
}

export default Nav;
