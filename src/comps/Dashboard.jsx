import React from "react";
import stockData from './stockData'; // Assuming stockData is accessible here
import { Link, useParams } from "react-router-dom";


const Dashboard = () => {
    const {symbol} = useParams(); 

   const stock = stockData.map((item) => item.symbol === symbol)
   
   if(!stock)
   return <div>Stock Not Found</div>


        return (
            <Link>
            <p>{stock.symbol}</p>
            </Link>
        );
  }


export default Dashboard;