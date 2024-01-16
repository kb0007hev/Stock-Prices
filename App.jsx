import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './src/comps/Navbar';
import Home from './src/comps/Home';
import About from './src/comps/About';
import PublicStocks from './src/comps/PublicStocks';
import LocalStocks from './src/comps/LocalStocks';
// import Dashboard from './src/comps/Dashboard';



function App() {
  return (
    <BrowserRouter>

        <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/localStocks" element={<LocalStocks />} />
          <Route path="/stocks/:symbol" element={<PublicStocks />} />
          {/* <Route path="/dashBoard/:symbol" element={<Dashboard />} />  */}
        </Routes>

    </BrowserRouter>
  );
}

export default App;
