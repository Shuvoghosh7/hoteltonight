import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import EagleVideo from "../../assets/images/banner/watermarked_preview.mp4";
import styles from "@/styles/Banner.module.css";

import Link from "next/link";
const Banner = () => {
  return (
    <div>
     
      <section class={styles.video_container}>
        <video autoPlay muted loop className={styles.auto_video}>
          <source src={EagleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class={styles.overlay}>
          <h1>A Five Star Hotel And we like to keep it that way! </h1>
          <p>
            <Link href="/sss">See rooms</Link>
          </p>
        </div>
      </section>

      <div className={styles.check_availability}>
        <div class={styles.row}>
          <div>
            <h2>
              {" "}
              CHECK <br /> <span>AVAILABILITY</span>
            </h2>
          </div>
          <div>
            <form>
              <div class={styles.availability_form}>
                <div class={styles.awe_calendar_wrapper}>
                  <label>Room Type</label> <br />
                  <select class={styles.awe_calendar} name="room">
                    <option selected="selected" disabled="disabled">
                      Select a room
                    </option>
                    <option value="Single">Single room</option>
                    <option value="Double">Double Room</option>
                    <option value="Deluxe">Deluxe room</option>
                  </select>
                </div>
                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                  <label>Check-in</label> <br />
                  <input
                    type="date"
                    name="arrive"
                    class={styles.awe_calendar}
                    placeholder="Arrival Date"
                  />
                </div>
                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                  <label>Check-out</label> <br />
                  <input
                    type="date"
                    name="departure"
                    class={styles.awe_calendar}
                    placeholder="Arrival Date"
                  />
                </div>
                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                  <label>Adults</label> <br />
                  <input
                    type="number"
                    name="adults"
                    class={styles.awe_member}
                    placeholder="Adults"
                  />
                </div>
                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                  <label>Children</label> <br />
                  <input
                    type="number"
                    name="children"
                    class={styles.awe_member}
                    placeholder="Children"
                  />
                </div>

                <div className={`${styles.awe_calendar_wrapper} ml-3`}>
                  <button type="submit" class={styles.book_btn}>
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
