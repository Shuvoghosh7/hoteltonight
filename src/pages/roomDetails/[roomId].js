import React, { useState } from "react"
import styles from "@/styles/roomDetailPage.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/roomDetails/restaurant-01.jpg"
import Head from "next/head";
import { AiFillCheckCircle } from "react-icons/ai";
const roomDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div>
            <Head>
                <title>Room Details</title>
                <meta
                    name="description"
                    content="This is Hotel Booking System made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* room Detail Page header  */}
            <section id={styles.parallax_pagetitle} className="mt-28">
                <div className={styles.room_details_container}>
                    <div className={styles.breadcrumb}>
                        <ol>
                            <li><Link href="/">Home</Link><span className="ml-3">/</span></li>
                            <li className="ml-3"><Link href="room-list.html">Room list</Link><span className="ml-3">/</span></li>
                            <li className={`${styles.actives} ml-3`}>Room detail</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* room Detail Page room slider  */}
            <section className={styles.form_container}>
                <div className={styles.room_slider}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Keyboard, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                src="https://i.ibb.co/q0QPSqc/image1.jpg"
                                width={400}
                                height={250}
                                alt="Picture of the author"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://i.ibb.co/q0QPSqc/image1.jpg"
                                width={400}
                                height={250}
                                alt="Picture of the author"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="https://i.ibb.co/q0QPSqc/image1.jpg"
                                width={400}
                                height={250}
                                alt="Picture of the author"
                                className="w-full"
                            />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className={styles.forms}>
                    <div className={styles.reservation_vertical}>
                        <h2><span>Reservation</span></h2>
                        <div className={styles.price}>
                            <h4>Double Room  € 99,-<span> a night</span></h4>
                        </div>
                        <form >
                            <div className={styles.form_group}>
                                <label >E-mail</label>
                                <input name="email" type="text" className={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div className={`${styles.form_group} mt-3`}>
                                <label  >Room Type</label>
                                <select className={styles.form_control} name="room">
                                    <option disabled="disabled">
                                        Select a room
                                    </option>
                                    <option value="Single">Single room</option>
                                    <option value="Double">Double Room</option>
                                    <option value="Deluxe">Deluxe room</option>
                                </select>
                            </div>

                            <div className={`${styles.form_group} mt-3`}>
                                <label >Check-in</label>
                                <input name="email" type="date" className={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div className={`${styles.form_group} mt-3`}>
                                <label>Check-out</label>
                                <input name="email" type="date" className={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div className={`${styles.form_group} mt-3`}>
                                <label >Room Number</label>
                                <input name="email" type="number" className={styles.form_control} placeholder="Please enter room number" />
                            </div>
                            <div className={`${styles.form_group} mt-5`}>
                                <button className={styles.form_control_btn}>Submit</button>
                                
                            </div>




                        </form>
                    </div>


                </div>
            </section>

            {/* room Detail Page facality */}
            <section className={styles.room_facality_container}>

                <div className={styles.room_facality}>
                    <h2 className={styles.room_facality_heading}><span>Room Details</span></h2>

                    <div className={styles.facality_list}>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        <p className="flex items-center">      
                            <AiFillCheckCircle />
                            <span> Incl. breakfast</span>
                        </p>
                        
                    </div>


                </div>

                <div>
                    <h2 className={styles.room_facality_heading}><span>Overview</span></h2>
                    <ul className={`${styles.nav} ${styles.nav_tabs}`}>
                        <li onClick={() => handleTabClick('overview')} className={activeTab === 'overview' ? styles.active : ''}> Overview</li>
                        <li onClick={() => handleTabClick('facilities')} className={activeTab === 'facilities' ? styles.active : ''}> Facilities</li>
                        <li onClick={() => handleTabClick('extra')} className={activeTab === 'extra' ? styles.active : ''}> Extra</li>
                    </ul>
                    <div>
                        {
                            activeTab === "overview" &&
                            <div>
                                <div>
                                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eleifend augue, quis rhoncus purus fermentum. In hendrerit risus arcu, in eleifend metus dapibus varius. Nulla dolor sapien, laoreet vel tincidunt non, egestas non justo. Phasellus et mattis lectus, et gravida urna.</p>
                                    <p>
                                        <Image
                                            src={img1}
                                            width={230}
                                            height={160}
                                            alt="Picture of the author"
                                            className={styles.pull_right}
                                        />
                                        Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
                                        Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
                                        Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
                                        sapien, laoreet vel tincidunt non, egestas non justo.
                                    </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            activeTab === "facilities" &&
                            <p>Phasellus sodales justo felis, a vestibulum risus mattis vitae.
                                Aliquam vitae varius elit, non facilisis massa.
                                Vestibulum luctus diam mollis gravida bibendum.
                                Aliquam mattis velit dolor, sit amet semper erat auctor vel.
                                Integer auctor in dui ac vehicula. Integer fermentum nunc ut arcu feugiat,
                                nec placerat nunc tincidunt.
                                Pellentesque in massa eu augue placerat cursus sed quis magna.
                            </p>
                        }
                    </div>
                    <div>
                        {
                            activeTab === "extra" &&
                            <p>
                                Aa vestibulum risus mattis vitae. Aliquam vitae varius elit, non facilisis massa. Vestibulum luctus diam mollis gravida bibendum. Aliquam mattis velit dolor, sit amet semper erat auctor vel. Integer auctor in dui ac vehicula. Integer fermentum nunc ut arcu feugiat, nec placerat nunc tincidunt. Pellentesque in massa eu augue placerat cursus sed quis magna.
                            </p>
                        }
                    </div>


                </div>

            </section>





        </div>
    )
};

export default roomDetailPage;

roomDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

