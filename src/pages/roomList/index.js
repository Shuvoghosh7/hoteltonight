import React, { useState } from "react"
import styles from "@/styles/Roomlist.module.css";
import SingleRoom from "@/components/UI/RoomList/SingleRoom";
import DoubleRoom from "@/components/UI/RoomList/DoubleRoom";
import DuplexRoom from "@/components/UI/RoomList/DuplexRoom";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
const RoomList = () => {
    const [activeTab, setActiveTab] = useState('singleRoom');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (

        <>
            <Head>
                <title>Room List</title>
                <meta
                    name="description"
                    content="This is Hotel Booking System made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mt-40">

                <ul className={`${styles.nav} ${styles.nav_tabs}`}>
                    <li onClick={() => handleTabClick('singleRoom')} className={activeTab === 'singleRoom' ? styles.active : ''}> Single Room</li>
                    <li onClick={() => handleTabClick('doubleRoom')} className={activeTab === 'doubleRoom' ? styles.active : ''}> DoubleRoom</li>
                    <li onClick={() => handleTabClick('duplexRoom')} className={activeTab === 'duplexRoom' ? styles.active : ''}> Duplex Room</li>
                </ul>
                <div className={styles.tab_content}>
                    {
                        activeTab === "singleRoom" &&
                        <div className="lg:mx-20 mx-6">
                            <SingleRoom />
                        </div>
                    }
                </div>
                <div>
                    {
                        activeTab === "doubleRoom" &&
                        <div className="lg:mx-20 mx-6">
                            <DoubleRoom />
                        </div>
                    }
                </div>
                <div>
                    {
                        activeTab === "duplexRoom" &&
                        <div className="lg:mx-20 mx-6">
                            <DuplexRoom />
                        </div>
                    }
                </div>
            </div>

        </>

    )
};

export default RoomList;

RoomList.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
