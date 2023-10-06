import React from "react"
import styles from "@/styles/Footer.module.css";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import Link from "next/link";
import himage from "../../assets/images/logo.png";
import Image from "next/image";

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
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>

            </div>


        </div>
    )
};

export default Footer;
