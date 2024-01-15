import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/comps/Navbar';
import Home from './src/comps/Home';
import About from './src/comps/About';
import Dashboard from './src/comps/Dashboard';
import Stock from './src/comps/stockData';

function App() {
  return (
    <BrowserRouter>

        <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Dashboard />} />
          <Route path="/stocks/:symbol" element={<Stock />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
