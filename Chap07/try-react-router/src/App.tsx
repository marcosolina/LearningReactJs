import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenA/>}/>
      <Route path="/b" element={<ScreenB/>}/>
    </Routes>
  );
}

export default App;
