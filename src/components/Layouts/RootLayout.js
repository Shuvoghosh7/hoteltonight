import React from "react"
import Navbar from "../share/Navbar";
import Footer from "../share/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        { children }
        <div>
            <Footer/>
        </div>
      
    </div>
  )
};

export default RootLayout;
