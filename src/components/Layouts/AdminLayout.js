import React from "react"
import Navmenu from "../share/Admin/Navmenu";
import Navbar from "../share/Admin/Navbar";


const RootLayout = ({children}) => {
    return (
        <div>
            <Navmenu/>
            <Navbar/>
            {children}
        </div>
    )
};

export default RootLayout;
