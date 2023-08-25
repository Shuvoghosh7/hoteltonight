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

const roomDetailPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <div>
            {/* room Detail Page header  */}
            <section id={styles.parallax_pagetitle}>
                <div className={styles.room_details_container}>
                    <div className={styles.breadcrumb}>
                        <ol>
                            <li><Link href="/">Home</Link><span className="ml-3">/</span></li>
                            <li className="ml-3"><Link href="room-list.html">Room list</Link><span className="ml-3">/</span></li>
                            <li className={`${styles.active} ml-3`}>Room detail</li>
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
                        <div class={styles.price}>
                            <h4>Double Room  € 99,-<span> a night</span></h4>
                        </div>
                        <form >
                            <div class={styles.form_group}>
                                <label for="email" >E-mail</label>
                                <input name="email" type="text" class={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div class={`${styles.form_group} mt-3`}>
                                <label for="email" >Room Type</label>
                                <select class={styles.form_control} name="room">
                                    <option selected="selected" disabled="disabled">
                                        Select a room
                                    </option>
                                    <option value="Single">Single room</option>
                                    <option value="Double">Double Room</option>
                                    <option value="Deluxe">Deluxe room</option>
                                </select>
                            </div>

                            <div class={`${styles.form_group} mt-3`}>
                                <label for="email" >Check-in</label>
                                <input name="email" type="date" class={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div class={`${styles.form_group} mt-3`}>
                                <label for="email" >Check-out</label>
                                <input name="email" type="date" class={styles.form_control} placeholder="Please enter your E-mail" />
                            </div>
                            <div class={`${styles.form_group} mt-3`}>
                                <label for="email">Room Number</label>
                                <input name="email" type="number" class={styles.form_control} placeholder="Please enter room number" />
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
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                        <p><span className="m-3"><FontAwesomeIcon icon={faCheckCircle} /></span>Incl. breakfast</p>
                    </div>


                </div>

                <div>
                    <h2 className={styles.room_facality_heading}><span>Overview</span></h2>



                    <ul className={`${styles.nav} ${styles.nav_tabs}`}>
                        <li onClick={() => handleTabClick('overview')}> Overview</li>
                        <li onClick={() => handleTabClick('facilities')}> Facilities</li>
                        <li onClick={() => handleTabClick('extra')}> Extra</li>
                    </ul>

                    <div>
                        {
                            activeTab === "overview" && <p>lorem1</p>
                        }
                    </div>
                    <div>
                        {
                            activeTab === "facilities" && <p>facilities</p>
                        }
                    </div>
                    <div>
                        {
                            activeTab === "extra" && <p>extra</p>
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

