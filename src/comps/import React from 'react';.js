import React from 'react';
import { Link } from 'react-router-dom';
import stockData from './stockData';

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">iStocks</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/localStocks">Local Stocks</Link>
      </div>
      <div>
        {stockData.map((stock) => (
          <Link key={stock.symbol} to={`/publicStocks/${stock.symbol}`}>
        
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;


