import React from "react"
import styles from "@/styles/Spa.module.css";
import Link from "next/link";
const SpaService = () => {
    return (
        <div className={styles.spa_container}>
            <div className=" lg:mx-32 mx-5">
                <div className={styles.section_title}>
                    <h4>HIMARA. SPA SERVICES</h4>
                </div>

                <div className={styles.section_sub_title}>
                    <p>Relax and enjoy our spa therapy</p>
                    <div className={styles.spa_details_link}>
                        <Link href="spa/spaDetails">More About Our SPA</Link>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default SpaService;
