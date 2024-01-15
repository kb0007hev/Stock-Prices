import React from 'react';
import stockData from './stockData'

const LocalStocks = () => {

    const stocks = stockData.map((data) => {
        
        return (
            <Link key="data.symbol" to={`/stocks/${data.symbol}`}>
                <li>{data.name}</li>
                <li>{data.symbol}</li>
                <li>{data.high}</li>
                <li>{data.low}</li>
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











