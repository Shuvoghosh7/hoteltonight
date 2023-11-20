import React, { useState } from "react"
import styles from "@/styles/Navmenu.module.css";
import { AiOutlineMenu } from 'react-icons/ai';
import { FaSuitcase } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../../assets/images/Logo/Logo/menu-icon-24.png";
const Navmenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleMenuButtonHover = () => {
        // if (!isMenuOpen) {
        //     setIsMenuOpen(true);
        // }
    };



    return (
        <div>
            <ul className={styles.menu}>

                <li title="home" className={styles.home}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                    <AiOutlineMenu className={styles.menu_icon} />
               </li>
               

               

            </ul>

            <ul className={`${styles.menubar} ${isMenuOpen ? `${styles.open}` : ''}`}>
                <li>
                    <Link href="/admin/dashboard" className="menu-button" onClick={toggleMenu}>
                    Hoteltonight
                    </Link>
                </li>
            
                <li><Link href="/admin/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
                <li><Link href="/admin/createRoom" onClick={toggleMenu}>Create Room</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Customers</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Reservation</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Create Blog</Link></li>
            </ul>

        </div>
    )
};

export default Navmenu;
