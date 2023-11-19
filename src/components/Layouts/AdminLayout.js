import React, { useEffect, useState } from "react"
import Navmenu from "../share/Admin/Navmenu";
import Navbar from "../share/Admin/Navbar";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/router";


const RootLayout = ({children}) => {
    const userLoggedIn = isLoggedIn();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {

      if (!userLoggedIn) {
        router.push("/admin/login");
      }else{
        setIsLoading(true);
      }
      
    }, [router, isLoading]);
  
    if (!isLoading) {
      return <p>Loading......</p>;
    }
    return (
        <div>
            <Navmenu/>
            <Navbar/>
            {children}
        </div>
    )
};

export default RootLayout;
