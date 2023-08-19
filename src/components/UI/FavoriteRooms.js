import styles from "@/styles/FavoriteRooms.module.css";
import Image from "next/image";

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
                            <p><span>A modern hotel room in Star Hotel</span> Nunc tempor erat in magna pulvinar fermentum. Pellentesque scelerisque at leo nec vestibulum.
                                malesuada metus.</p>
                            <div class="row">
                                <div class="col-xs-6">
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check-circle"></i> Incl. breakfast</li>
                                        <li><i class="fa fa-check-circle"></i> Private balcony</li>
                                        <li><i class="fa fa-check-circle"></i> Sea view</li>
                                    </ul>
                                </div>
                                <div class="col-xs-6">
                                    <ul class="list-unstyled">
                                        <li><i class="fa fa-check-circle"></i> Free Wi-Fi</li>
                                        <li><i class="fa fa-check-circle"></i> Incl. breakfast</li>
                                        <li><i class="fa fa-check-circle"></i> Bathroom</li>
                                    </ul>
                                </div>
                            </div>
                            <a href="room-detail.html" class="btn btn-primary btn-block">Read More</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default FavoriteRooms;
