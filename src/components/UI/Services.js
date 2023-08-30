import React, { useRef, useState } from 'react';
import styles from "@/styles/Services.module.css";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import bar from "../../assets/images/services/bar.jpg";
import CONF_ROOMS from "../../assets/images/services/CONF. ROOMS.png";
import gym from "../../assets/images/services/gym.jpg";
import SWIMPOOLS from "../../assets/images/services/SWIM. POOLS.png";
import playground from "../../assets/images/services/playground.jpg";

const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div>
            <div className={styles.froom_title}>
                <h2>SERVICES</h2>
            </div>
            <div className={styles.services_container}>
                <div className={styles.slider_container}>
                    <Swiper

                        loop={true}
                        // centeredSlides={true}
                        autoplay={{
                            delay: 1300,
                            disableOnInteraction: false,
                        }}

                        speed={1800}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                src={gym}
                                width={400}
                                height={200}
                                alt="Picture of the author"
                                className={styles.slider_image}

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={bar}
                                width={400}
                                height={200}
                                alt="Picture of the author"
                                className={styles.slider_image}

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={SWIMPOOLS}
                                width={400}
                                height={200}
                                alt="Picture of the author"
                                className={styles.slider_image}

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={CONF_ROOMS}
                                width={400}
                                height={200}
                                alt="Picture of the author"
                                className={styles.slider_image}

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={playground}
                                width={400}
                                height={200}
                                alt="Picture of the author"
                                className={styles.slider_image}

                            />
                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className={styles.counter_main}>
                    <div className={styles.counter_item_container}>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={80} className={styles.CountUp} />}
                            <h3>Rooms</h3>
                        </div>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={3} className={styles.CountUp} />}
                            <h3>RESTAURANTS</h3>
                        </div>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={75} className={styles.CountUp} />}
                            <h3>STAFFS</h3>
                        </div>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={3} className={styles.CountUp} />}
                            <h3>SWIM. POOLS</h3>
                        </div>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={2} className={styles.CountUp} />}
                            <h3>CONF. ROOMS</h3>
                        </div>
                        <div className={styles.counter_item} ref={ref}>
                            {inView && <CountUp start={0} end={2} className={styles.CountUp} />}
                            <h3>PLAYGROUNDS</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Services;
