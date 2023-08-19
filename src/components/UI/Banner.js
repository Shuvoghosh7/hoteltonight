
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from "@/styles/Banner.module.css";

import Link from 'next/link';
const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
               
                <SwiperSlide className={`${styles.slider1} ${styles.commonSlider}`}>
              
                    <p>
                        <span className='lg-mr-5 mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        A Five Star Hotel
                        <span className='lg-ml-5 ml-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </p>
                    <h6>And we like to keep it that way!</h6>
                    <div className={styles.see_roombtn}>
                        <button>
                            <Link href="/">
                                See rooms
                            </Link>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.slider2} ${styles.commonSlider}`}>
                <p>
                        <span className='lg-mr-5 mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        A Five Star Hotel
                        <span className='lg-ml-5 ml-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </p>
                    <h6>And we like to keep it that way!</h6>
                    <div className={styles.see_roombtn}>
                        <button>
                            <Link href="/">
                                See rooms
                            </Link>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={`${styles.slider3} ${styles.commonSlider}`}>
                <p>
                        <span className='lg-mr-5 mr-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        A Five Star Hotel
                        <span className='lg-ml-5 ml-2'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                    </p>
                    <h6>And we like to keep it that way!</h6>
                    <div className={styles.see_roombtn}>
                        <button>
                            <Link href="/">
                                See rooms
                            </Link>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Banner;
