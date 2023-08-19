
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

            <div className={styles.check_availability}>
                <div class={styles.row}>
                    <div>
                        <h2> CHECK <br/> <span>AVAILABILITY</span></h2>
                    </div>
                    <div >
                        <form>
                            <div class={styles.availability_form}>
                                <div class={styles.awe_calendar_wrapper}>
                                    <label>Room Type</label> <br />
                                    <select class={styles.awe_calendar} name="room">
                                        <option selected="selected" disabled="disabled">Select a room</option>
                                        <option value="Single">Single room</option>
                                        <option value="Double">Double Room</option>
                                        <option value="Deluxe">Deluxe room</option>
                                    </select>
                                </div>
                                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                                    <label>Check-in</label> <br />
                                    <input type="date" name="arrive" class={styles.awe_calendar} placeholder="Arrival Date" />

                                </div>
                                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                                    <label>Check-out</label> <br />
                                    <input type="date" name="departure" class={styles.awe_calendar} placeholder="Arrival Date" />
                                </div>
                                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                                    <label>Adults</label> <br />
                                    <input type="number" name="adults" class={styles.awe_member} placeholder="Adults" />
                                </div>
                                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                                    <label>Children</label> <br />
                                    <input type="number" name="children" class={styles.awe_member} placeholder="Children" />
                                </div>

                                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                                    <button type="submit" class={styles.book_btn}>Book Now</button>
                                </div>


                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Banner;
