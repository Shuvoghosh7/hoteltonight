import styles from "@/styles/Navbar2.module.css";
import { FaSearch } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import blog1 from "../../../assets/images/Logo/Logo/logo.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.nav_container}>
            <div>
                <div className={styles.nav_content}>
                    <form>
                        <input type="text" className={styles.form_control} placeholder="Search here" />
                        <button className={styles.search_btn} type="submit"><FaSearch className={styles.search_btn_icon} /></button>
                    </form>


                    <div><IoIosNotifications className={styles.notification_icon} /></div>

                    <div className={styles.login_btn}>
                        {/* <Image
                            src={blog1}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            className={styles.img_fluid}
                        /> */}
                         <button type="submit">LOGIN</button>
                    </div>
                </div>

                {/* dropdown menu */}
                {/* 
                <div className={styles.nav_drop_container}>
                    <div className={`${styles.nav_drop_content} ${isOpen ? styles.nav_content_active : ''}`}>
                        <div className={styles.navbar_end}>
                            <form>
                                <label for="fname">Email</label> <br></br>
                                <input type="text" id="fname" name="fname"/>
                                <label for="fname">Password</label> <br></br>
                                <input type="password" id="fname" name="fname"/>
                                <button type="submit">LOGIN</button>
                            </form>
                            


                        </div>
                    </div>
                </div> */}
                {/* dropdown menu end*/}


            </div>
        </div>
    )
};

export default Navbar;
