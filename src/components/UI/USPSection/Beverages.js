import React, { useState } from "react"
import Popup from "./Popup";
import styles from "@/styles/USPSection.module.css";
import icon1 from "../../../assets/images/icon/1996055.png";
import Image from "next/image";
import Link from "next/link";

const Beverages = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLearnMoreClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const content = (
        <div>

            <div className={styles.icon_bg}>
                <Image
                    src={icon1}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className={styles.popup_img}
                />
            </div>
            <p>
                tempor erat in magna pulvinar fermentum. Pellentesque
                scelerisque at leo nec vestibulum. malesuada metus.
                scelerisque at leo nec vestibulum. malesuada metus.
            </p>
        </div>
    );
    return (
        <div className={styles.beverages}>
            <div className={styles.icon_bg}>
                <Image
                    src={icon1}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className={styles.ups_icon_img}
                />
            </div>
            <h2>Beverages included</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum.</p>
            <h4 className="mt-2" onClick={handleLearnMoreClick}>Read more</h4>

            {showPopup && <Popup content={content} onClose={handleClosePopup} />}
        </div>
    )
};

export default Beverages;
