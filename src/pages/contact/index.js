import React from "react"
import styles from "@/styles/contact.module.css";
import Head from "next/head";
import Image from "next/image";
import himage from "../../assets/images/contact/contact-us-hero-illustration.svg";
import RootLayout from "@/components/Layouts/RootLayout";
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
    
                                    <textarea name="message" className={styles.form_control_textarea} placeholder="Please Enter Your Massage"/>
                                </div>

                                <div className={`${styles.form_group} mt-5`}>
                                    <button className={styles.form_control_btn}>Submit</button>
                                </div>
                            </form>
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
  