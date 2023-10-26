import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import EagleVideo from "../../assets/images/banner/watermarked_preview.mp4";
import styles from "@/styles/Banner.module.css";

import Link from "next/link";

const Banner = () => {
  return (
    <div>
     
      <section className={styles.video_container}>
        <video autoPlay muted loop className={styles.auto_video}>
          <source src={EagleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>    
          <h1>Check-in to relaxation <br/> check-out with satisfaction</h1>
          <p className={styles.submit_btn}>
            <Link href="/roomList">See rooms</Link>
          </p>
        </div>
      </section>

    
    </div>
  );
};

export default Banner;
