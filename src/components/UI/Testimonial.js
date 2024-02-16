import styles from "@/styles/Testimonial.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import himage from "../../assets/images/TS/img-1.jpg";
import Image from "next/image";

const Testimonial = () => {
    return (
        <div className={styles.Testimonial_container}>
            <div className={styles.slider_container}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}

                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={styles.testimonial_content}>
                            <div className={styles.img}>
                                <Image
                                    src={himage}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className={styles.gphoto}
                                />
                            </div>

                            <div className={styles.text}>
                                <p><span className={styles.quation}>“</span> This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off Seelentag From Los Angeles, California... <span className={styles.quation}>„</span> </p>
                                <h3>Seelentag</h3>
                                <h5>From Los Angeles, California</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial_content}>
                            <div className={styles.img}>
                                <Image
                                    src={himage}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className={styles.gphoto}
                                />
                            </div>

                            <div className={styles.text}>
                                <p><span className={styles.quation}>“</span> This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off Seelentag From Los Angeles, California... <span className={styles.quation}>„</span> </p>
                                <h3>Seelentag</h3>
                                <h5>From Los Angeles, California</h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.testimonial_content}>
                            <div className={styles.img}>
                                <Image
                                    src={himage}
                                    width={100}
                                    height={100}
                                    alt="Picture of the author"
                                    className={styles.gphoto}
                                />
                            </div>

                            <div className={styles.text}>
                                <p><span className={styles.quation}>“</span> This is the only place to stay in Catalina! I have stayed in the cheaper hotels and they were fine, but this is just the icing on the cake! After spending the day bike riding and hiking to come back and enjoy a glass of wine while looking out your ocean view window and then to top it all off Seelentag From Los Angeles, California... <span className={styles.quation}>„</span> </p>
                                <h3>Seelentag</h3>
                                <h5>From Los Angeles, California</h5>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
};

export default Testimonial;
