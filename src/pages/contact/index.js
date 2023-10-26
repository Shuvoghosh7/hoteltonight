import React from "react"
import styles from "@/styles/contact.module.css";
import Head from "next/head";
import Image from "next/image";
import himage from "../../assets/images/contact/contact-us-hero-illustration.svg";
import RootLayout from "@/components/Layouts/RootLayout";
import QC from "../../assets/images/contact/Our-Quick-Communication.png";
import call from "../../assets/images/contact/Call.png";
import Skype from "../../assets/images/contact/Skype-.png";
import mail from "../../assets/images/contact/mail.png";
import whatsapp from "../../assets/images/contact/whatsapp.png";
const contact = () => {
    return (
        <div className="mt-40 mt-12 lg:mx-32 mx-5">
            <Head>
                <title>contact</title>
                <meta
                    name="description"
                    content="This is Hotel Booking System made by next-js"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.contact_container}>
                <div className={styles.contact_contain_text}>
                    <p> <strong>GET IN TOUCH</strong> WITH US</p>
                    <h1>WE’RE LOOKING FORWARD TO HEARING FROM YOU!</h1>

                    <Image
                        src={himage}
                        width={400}
                        height={250}
                        alt="Picture of the author"
                        className={styles.gphoto}
                    />
                </div>
                <div>
                    <div className={styles.forms}>
                        <div className={styles.reservation_vertical}>

                            <form >
                                <div className={styles.form_group}>
                                    <input name="text" type="text" className={styles.form_control} placeholder="Please Enter Your Name" />
                                </div>
                                <div className={`${styles.form_group} mt-5`}>
                                    <input name="email" type="email" className={styles.form_control} placeholder="Please Enter Your Email" />
                                </div>
                                <div className={`${styles.form_group} mt-5`}>
                                    <input name="number" type="text" className={styles.form_control} placeholder="Please Enter Your Number" />
                                </div>
                                <div className={`${styles.form_group} mt-5`}>

                                    <textarea name="message" className={styles.form_control_textarea} placeholder="Please Enter Your Massage" />
                                </div>

                                <div className={`${styles.form_group} mt-5`}>
                                    <button className={styles.form_control_btn}>Submit</button>
                                </div>
                            </form>
                        </div>


                    </div>

                </div>
            </div>

            {/* Quick Communication */}
            <div className={styles.quick_communication}>
                <div className={styles.quick_communication_content}>
                    <Image
                        src={QC}
                        width={52}
                        height={45}
                        alt="Picture of the author"
                        className={styles.post_img}
                    />
                    <div className="ml-5">
                        <h3>Our Quick Communication</h3>
                        <h4><strong>24/7 support</strong> team is an always available helping hand, day or night!</h4>
                    </div>
                </div>


                <div className={styles.communication_way}>
                    <div className={styles.call}>
                        <Image
                            src={call}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className={styles.post_img}
                        />
                        <div className={styles.blurb_texts}>
                            <a href="tel:+13156364807">
                                <h5>Tap/Click to Call</h5>
                                <p>+1 315 636 4807</p>
                            </a>
                        </div>

                    </div>
                    <div className={styles.call}>
                        <Image
                            src={Skype}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className={styles.post_img}
                        />
                        <div className={styles.blurb_texts}>
                            <a href="skype:offshore.clipping?call">
                                <h5>Tap/Click to Call</h5>
                                <p>HoteleTONight</p>
                            </a>
                        </div>

                    </div>
                    <div className={styles.call}>
                        <Image
                            src={mail}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className={styles.post_img}
                        />
                        <div className={styles.blurb_texts}>
                            <a href="mailto:contact@hotatonight.com">
                                <h5>Tap/Click to Email</h5>
                                <p>contact@hotatonight.com</p>
                            </a>
                        </div>

                    </div>
                    <div className={styles.call}>
                        <Image
                            src={whatsapp}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className={styles.post_img}
                        />
                        <div className={styles.blurb_texts}>
                            <a href="https://wa.me/+13156364807">
                                <h5>Tap/Click to Call</h5>
                                <p>+8801772385111</p>
                            </a>
                        </div>

                    </div>
                </div>

            </div>

            {/* Our Office Location */}
            <div className={styles.office_location}>
                <h3>Our Office Location</h3>

                <div className={styles.office_location_container}>
                    {/* location-1 */}
                    <div className={styles.office_location_contain}>
                        <h4>United States</h4>
                        <p>(Client Support)</p>
                        <p>40-49 71st St, Woodside <br /> NewYork, NY 11377</p>
                        <div className={styles.Client_Support}>
                            <Image
                                src={call}
                                width={40}
                                height={40}
                                alt="Picture of the author"

                            />
                            <a href="tel:+13156364807" className="ml-2">
                                <p>+8801772385111</p>
                            </a>

                        </div>
                    </div>
                    {/* location-2 */}
                    <div className={styles.office_location_contain}>
                        <h4>Bangladesh</h4>
                        <p>(Client Support)</p>
                        <p>Head Office (Main production team)
                            House No. 1/5, Block-D, Lalmatia, Dhaka-1207</p>
                        <div className={styles.Client_Support}>
                            <Image
                                src={call}
                                width={40}
                                height={40}
                                alt="Picture of the author"

                            />
                            <a href="tel:+13156364807" className="ml-2">
                                <p>+8801772385111</p>
                            </a>

                        </div>
                    </div>
                    {/* location-3 */}
                    <div className={styles.office_location_contain}>
                        <h4>India</h4>
                        <p>(Client Support)</p>
                        <p>(Partial Production team )
                            214/A,Sonarpur, kolkata 700150,West Bengal,24 pgs(south) India
                        </p>
                        <div className={styles.Client_Support}>
                            <Image
                                src={call}
                                width={40}
                                height={40}
                                alt="Picture of the author"

                            />
                            <a href="tel:+13156364807" className="ml-2 text-xm">
                                <p>+8801772385111</p>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default contact;

contact.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
