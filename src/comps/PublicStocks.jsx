import React from 'react';
import stockData from './stockData';
import { Link, useParams } from 'react-router-dom';

const PublicStocks = () => {
  const { symbol } = useParams();
 
  const stock = stockData.find((item) => item.symbol === symbol);
  console.log(stock, symbol) 
  if (!stock) {
    return <div>Stock not found</div>;
  }

  // const otherStocks = stockData
  // .filter((item) => item.symbol !== symbol)
  // .map((item) => (
  //   <div key={item.symbol}>
  //     <Link to={`/publicStocks/${item.symbol}`}>{item.name}</Link>
  //   </div>
  // ));

  return (
    <Link to={`/publicStocks/${item.symbol}`}>{item.name}
 
      <h1>{stock.name}</h1>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: {stock.lastPrice}</p>

      {/* <h2>Other Stocks</h2>
      <div>
        {otherStocks}
      </div> */}

    </Link>
  );
};
export default PublicStocks;