import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';
import Login from './Login';
import styled from 'styled-components';

export const MENU = [
  { path: `/a`, login: false, layout: true },
  { path: `/b`, login: false, layout: true },
  { path: `/c`, login: false, layout: true },
  { path: `/login`, login: true, layout: false },
];

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 120px auto;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/a" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
