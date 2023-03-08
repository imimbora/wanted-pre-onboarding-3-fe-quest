import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/c" element={<PageC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
