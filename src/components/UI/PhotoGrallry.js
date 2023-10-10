import React, { useEffect, useState } from "react"

import styles from "@/styles/PhotoGrally.module.css";
import Image from "next/image";
import All from "./Gallery/All";

const PhotoGrally = () => {
    const [activeTab, setActiveTab] = useState('All');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div className="mt-8">
            <div className={styles.section_title}>
                <h2>GALLERY</h2>
            </div>

            <ul className={`${styles.nav} ${styles.nav_tabs} `}>
                <li onClick={() => handleTabClick('All')} className={activeTab === 'All' ? styles.active : ''}> All</li>
                <li onClick={() => handleTabClick('HOTEL_GROUND')} className={activeTab === 'HOTEL_GROUND' ? styles.active : ''}>HOTEL & GROUND</li>
                <li onClick={() => handleTabClick('ROOM')} className={activeTab === 'ROOM' ? styles.active : ''}>ROOM/SUITE </li>
                <li onClick={() => handleTabClick('BATHROOM')} className={activeTab === 'BATHROOM' ? styles.active : ''}>BATHROOM </li>
                <li onClick={() => handleTabClick('DINING')} className={activeTab === 'DINING' ? styles.active : ''}>DINING </li>
            </ul>
            <div className={styles.tab_content}>
                {
                    activeTab === "All" &&
                    <div>
                        <All />
                    </div>
                }
            </div>
            <div className={styles.tab_content}>
                {
                    activeTab === "HOTEL_GROUND" &&
                    <div className="mx-20">
                        HOTEL_GROUND
                    </div>
                }
            </div>
            <div>
                {
                    activeTab === "ROOM" &&
                    <div className="mx-20">
                        ROOM
                    </div>
                }
            </div>
            <div>
                {
                    activeTab === "BATHROOM" &&
                    <div className="mx-20">
                        BATHROOM
                    </div>
                }
            </div>
            <div>
                {
                    activeTab === "DINING" &&
                    <div className="mx-20">
                        DINING
                    </div>
                }
            </div>


        </div>

    )
};

export default PhotoGrally;
