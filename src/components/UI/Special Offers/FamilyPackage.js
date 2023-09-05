import React, { useState } from "react"

import styles from "@/styles/SpecialOffers.module.css";
import Image from "next/image";

import himage from "../../../assets/images/spoffer/offer2.jpg";
import CommonForm from "../CommonForm";
import Popup from "../Popup/Popup";

const FamilyPackage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleLearnMoreClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const content = (
        <div className={styles.common_form}>
            <CommonForm/>
        </div>
    );
    return (
        <div className="honeymoon_package">
            <div className={styles.offer_item} onClick={handleLearnMoreClick}>
                <figure className={`${styles.gradient_overlay_hover} ${styles.link_icon}`}>
                    <Image
                        src={himage}
                        width={480}
                        height={550}
                        alt="Picture of the author"
                        className={styles.img_fluid}
                    />
                    <div className={styles.overlay}></div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.overlayButton}>Book Now</button>
                    </div>
                </figure>
                <div className={styles.ribbon}>
                    <span>HOT OFFER</span>
                </div>
                <div className={styles.offer_price}>
                    5 nights for €1,875
                </div>
                <h3 className={styles.offer_title}>
                    <a href="offer.html">All-Inclusive Honeymoon Package</a>
                </h3>
            </div>

            {showPopup && <Popup content={content} onClose={handleClosePopup} />}

        </div>
    )
};

export default FamilyPackage;
