import React from "react";
import styles from "@/styles/BannerForm.module.css";
export default function BannerForm() {
  return (
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
  );
}
