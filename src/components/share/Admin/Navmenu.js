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
        if (!isMenuOpen) {
            setIsMenuOpen(true);
        }
    };



    return (
        <div>
            <ul className={styles.menu}>

                <li title="home"><Link href="#" className={styles.home}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                    <AiOutlineMenu className={styles.menu_icon} />
                </Link></li>
                <hr></hr>

                <li title="search" ><Link href="#"  className={styles.search}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                    <FaTachometerAlt className={styles.menu_icon} />
                </Link>
                </li>
                <li title="search" ><Link href="/#"  className={styles.search}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                    <FaSuitcase className={styles.menu_icon} />
                </Link>
                </li>
                <li title="pencil"><Link href="#" className={styles.pencil}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                     <FaUserAlt className={styles.menu_icon} />
                </Link></li>
                <li title="about"><Link href="#" className={styles.about}
                    onClick={toggleMenu}
                    onMouseEnter={handleMenuButtonHover}>
                     <FaKey className={styles.menu_icon} />
                </Link></li>
                <li title="archive">
                    <Link href="#" className={styles.archive}
                        onClick={toggleMenu}
                        onMouseEnter={handleMenuButtonHover}>
                         <FaUserAlt className={styles.menu_icon} />
                    </Link></li>

            </ul>

            <ul className={`${styles.menubar} ${isMenuOpen ? `${styles.open}` : ''}`}>
                <li>
                    <Link href="/" className="menu-button" onClick={toggleMenu}>
                    Hoteltonight
                    </Link>
                </li>
                <hr></hr>
                <li><Link href="/" onClick={toggleMenu}>Dashboard</Link></li>
                <li><Link href="/tests" onClick={toggleMenu}>Booking</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Customers</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Rooms</Link></li>
                <li><Link href="#" onClick={toggleMenu}>Employees</Link></li>
            </ul>

        </div>
    )
};

export default Navmenu;
