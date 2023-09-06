import React, { useState } from "react"
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import himage from "../../assets/images/logo.png";
import Image from "next/image";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src={himage}
                        width={100}
                        height={50}
                        alt="Picture of the author"
                        className={styles.gphoto}
                    />
                </Link>
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                Menu
            </button>
            <div className={`${styles['nav-menu']} ${menuOpen ? styles.active : ''}`}>
                <ul>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/roomList">
                            Rooms List
                        </Link>
                    </li>

                    <li>
                        <Link href="/about">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            Gallery
                        </Link>
                    </li>
                    <li className={styles.nav_book_btn}>
                        <Link href="/about">
                            BOOK ONLINE
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
