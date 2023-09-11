import React from "react"
import Navbar from "../share/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        { children }
        <div>
            footer
        </div>
      
    </div>
  )
};

export default RootLayout;
