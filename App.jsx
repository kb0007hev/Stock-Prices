import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/comps/Navbar';
import Home from './src/comps/Home';
import About from './src/comps/About';
import PublicStocks from './src/comps/LocalStocks';
import LocalStocks from './src/comps/PublicStocks';


function App() {
  return (
    <BrowserRouter>

        <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/localStocks" element={<LocalStocks />} />
          <Route path="/publicStocks/:symbol" element={<PublicStocks />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
