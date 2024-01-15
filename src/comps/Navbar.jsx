import React from "react";
import { Link } from "react-router-dom"


const Navbar = () => {

  return (
    <div className="nav">
      <div>  <Link to="/">      iStocks </Link> </div>
      <div>  <Link to="/about">   About </Link>  </div>
      <div>  <Link to="/stocks">  Stock </Link>  </div>
      
   </div>
  );
}

export default Navbar;