import React from "react"
import styles from "@/styles/Footer.module.css";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import Link from "next/link";
import himage from "../../assets/images/logo.png";
import himage2 from "../../assets/images/Logo/logo-footer.png";
import Image from "next/image";
import { MdLocationPin } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_heeader}>
                <div className={styles.footer_logo}>
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
                <div className={styles.social_content}>
                    <Link href="#" className={styles.social_link}> <FaFacebookF className={styles.footer_social_icon} /> </Link>
                    <Link href="#" className={styles.social_link}> <AiOutlineTwitter className={styles.footer_social_icon} /> </Link>
                    <Link href="#" className={styles.social_link}> <AiFillInstagram className={styles.footer_social_icon} /> </Link>
                    <Link href="#" className={styles.social_link}> <AiFillYoutube className={styles.footer_social_icon} /> </Link>

                </div>

            </div>


            <div className={styles.footer_body_container}>
                {/* Address  */}
                <div className="flex justify-between items-center">
                    <div>
                        <Image
                            src={himage2}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                            className={styles.gphoto}
                        />
                    </div>
                    <div className={styles.icon_container}>
                        <p className="flex items-center"><span className={styles.footer_icon}> <MdLocationPin /></span> <span className="ml-3">225 Beach Street, Australian</span></p>
                        <p className="flex items-center"><span className={styles.footer_icon}> <BsTelephoneFill /></span> <span className="ml-3"> 1-548-854-8898</span></p>
                        <p className="flex items-center"><span className={styles.footer_icon}> <MdEmail /></span> <span className="ml-3">hello@thelotushotel.com</span></p>
                    </div>
                </div>

                {/* USEFUL LINKS */}

                <div className={styles.usefule_link_container}>
                    <div>
                        <h4>USEFUL LINKS</h4>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/roomList">Rooms List</Link>
                            </li>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>

                {/* SERVICES */}
                <div className={styles.usefule_link_container}>
                    <div>
                        <h4>SERVICES</h4>
                        <ul>
                            <li>Incl. breakfast</li>
                            <li>Private balcony</li>
                            <li>Sea view</li>
                            <li>Free Wi-Fi</li>
                            
                        </ul>
                    </div>
                </div>

            </div>

            <div className={styles.copy_rigth_container}>
                <p>© 2023 Lotus Hotel All rights reserved.</p>
            </div>


        </div>
    )
};

export default Footer;
