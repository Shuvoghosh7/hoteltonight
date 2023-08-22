import styles from "@/styles/FavoriteRooms.module.css";

import Image from "next/image";
import Link from "next/link";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const FavoriteRooms = () => {
    return (
        <div>
            <div className={styles.froom_title}>
                {/* <h2>Guests Favorite Rooms</h2> */}
            </div>

            <div className={styles.favorit_room_container}>
                <div class={styles.room_thumb}>
                    <Image
                        src="https://i.ibb.co/q0QPSqc/image1.jpg"
                        width={400}
                        height={250}
                        alt="Picture of the author"
                        className={styles.gphoto}
                    />
                    <div class={`${styles.mask}`}>
                        <div class={`${styles.main}`}>
                            <h5>Double bedroom</h5>
                            <div class={styles.price}>$ 99<br /> <span>a night</span></div>
                        </div>
                        <div class={`${styles.content} ${styles.hoverMask}`}>
                            <p><span>A modern hotel room in Star Hotel</span> <br></br> Nunc tempor erat in magna pulvinar fermentum. Pellentesque scelerisque at leo nec vestibulum.
                                malesuada metus.</p>
                            <div className="flex justify-evenly items-center">
                                <div>
                                    <ul>
                                        <li><span> <FontAwesomeIcon icon={faCheckCircle} /> </span> Incl. breakfast</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>Free Wi-Fi</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <Link href="/" class={styles.btn_block}>Read More</Link>
                        </div>
                    </div>


                </div>
            </div>
          
        </div>
    )
};

export default FavoriteRooms;