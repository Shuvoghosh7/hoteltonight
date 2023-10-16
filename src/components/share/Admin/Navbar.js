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

                    <div onClick={toggleMenu}>
                        <Image
                            src={blog1}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                            className={styles.img_fluid}
                        />
                    </div>
                </div>

                {/* dropdown menu */}

                <div className={styles.nav_drop_container}>
                    <div className={`${styles.nav_drop_content} ${isOpen ? styles.nav_content_active : ''}`}>
                        <div className="navbar-end">
                            <div className="flex justify-between items-center px-2 pt-2">
                                <Image
                                    src={blog1}
                                    width={40}
                                    height={40}
                                    alt="Picture of the author"
                                    className={styles.img_fluid}
                                />
                                <div>
                                    <h4>Shuvo Gosh</h4>
                                    <small>Admin</small>
                                </div>
                            </div>
                            <hr className="mt-3"></hr>
                            <p className={styles.nav_profile_link}><Link href="#" className="px-2">My Profile</Link></p>
                            <p className={styles.nav_profile_link}><Link href="#" className="px-2">Logout</Link></p>
                            
                            
                        </div>
                    </div>
                </div>
                {/* dropdown menu end*/}


            </div>
        </div>
    )
};

export default Navbar;
