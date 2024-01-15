import React from 'react';
import stockData from './stockData';
import { useParams } from 'react-router-dom';

const Stock = () => {
const { symbol } = useParams();

const stock = stockData.find((stock) => stock.symbol === symbol);

if (!stock) {
  return <div>stock not found</div>; 
}

return (
  <div>
    <h1>{stock.name}</h1>
    <p>Symbol: {stock.symbol}</p>
    <p>Last Price: {stock.lastPrice}</p>
    <p>Change: {stock.change}</p>
    <p>High: {stock.high}</p>
    <p>Low: {stock.low}</p>
    <p>Open: {stock.open}</p>
  </div>
);
}
 
export default Stock;