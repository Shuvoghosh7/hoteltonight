import React, { useState } from "react"
import styles from "@/styles/PhotoGrally.module.css";
import bar from "../../../assets/images/services/bar.jpg";
import CONF_ROOMS from "../../../assets/images/services/CONF. ROOMS.png";
import gym from "../../../assets/images/services/gym.jpg";
import SWIMPOOLS from "../../../assets/images/services/SWIM. POOLS.png";
import playground from "../../../assets/images/services/playground.jpg";
import Image from "next/image";

const DINING = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImage = (imageSrc) => {
        setSelectedImage(imageSrc);
    };
    return (
        <div className={styles.all_image_container}>
            <div className={styles.gimage} onClick={() => openImage(CONF_ROOMS)}>
                <Image
                    src={CONF_ROOMS}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className={styles.slider_image}

                />
            </div>



            <div className={styles.gimage} onClick={() => openImage(bar)}>
                <Image
                    src={bar}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className={styles.slider_image}

                />
            </div>
            <div className={styles.gimage} onClick={() => openImage(SWIMPOOLS)}>
                <Image
                    src={SWIMPOOLS}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className={styles.slider_image}

                />
            </div>
            <div className={styles.gimage} onClick={() => openImage(gym)}>
                <Image
                    src={gym}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className={styles.slider_image}

                />
            </div>
            <div className={styles.gimage} onClick={() => openImage(playground)}>
                <Image
                    src={playground}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                    className={styles.slider_image}

                />
            </div>



            {selectedImage && (
                <div className={styles.lightbox}>
                    <div className={styles.lightbox_content}>
                        <span className={styles.close_button} onClick={() => setSelectedImage(null)}>
                            &times;
                        </span>
                        <Image
                            src={selectedImage}
                            width={850}
                            height={550}
                            alt="Picture of the author"
                        />

                    </div>
                </div>
            )}

        </div>
    )
};

export default DINING;
