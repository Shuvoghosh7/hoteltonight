import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import EagleVideo from "../../assets/images/banner/watermarked_preview.mp4";
import styles from "@/styles/Banner.module.css";

import Link from "next/link";
import BannerForm from "./BannerForm";
const Banner = () => {
  return (
    <div>
     
      <section className={styles.video_container}>
        <video autoPlay muted loop className={styles.auto_video}>
          <source src={EagleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <h1>A Five Star Hotel And we like to keep it that way! </h1>
          <p>
            <Link href="/sss">See rooms</Link>
          </p>
        </div>
      </section>

      <section className={styles.banner_form}>
        <BannerForm/>
      </section>
    </div>
  );
};

export default Banner;
