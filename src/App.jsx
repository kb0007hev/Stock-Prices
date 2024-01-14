import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks/:symbol" element={<Stock />} />
          <Route path="/stocks" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>


  )
}

export default App
