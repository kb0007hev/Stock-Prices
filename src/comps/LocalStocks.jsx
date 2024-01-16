import React from 'react';
import stockData from './stockData'
import { Link } from 'react-router-dom'; 

const LocalStocks = () => {

    const stocks = stockData.map((data) => {
        return (
            <Link key={data.symbol} to={`/localStocks/${data.symbol}`}>
                <li>{data.name}</li>
                <li>{data.symbol}</li>
                <li>{data.high}</li>
                <li>{data.low}</li>
                <br /> 
            </Link>
        );
    })
    
    return ( 
        <ul>
            {stocks}
        </ul>
     );
}
 
export default LocalStocks;











