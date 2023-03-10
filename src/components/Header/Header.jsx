import React from "react";
import { ReactDOM } from "react";
import './Header.css';
import book from "./Image/book.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


 const Header = () => {
  useEffect(() => {
    Aos.init();
  }, [])
    return(
        <div className="header">
            <div data-aos='fade-right' aso-data-duration='2000'>
            <div>
            <h2 className="headerFi">Discover The <strong> Best Book</strong> Of All Day</h2>
            <p className="headerSe">Some book leave us free while some book make us free.</p>
          </div>
          <div className='btns'>
            <button className="exploreBtn">Explore</button>
            <button className="shopBtn">Shop Now</button>
          </div>
            </div>
         <div className="headerImg" aso-data-duration='2000' data-aos='fade-left'> 
            <img src={book} />
         </div>
        </div>
    )
};

export default Header;