import React from "react"
import styles from "@/styles/roomDetailPage.module.css";

const CommonForm = () => {
    return (
        <div>
            <form>
                <div className={styles.form_group}>
                    <label >E-mail</label>
                    <input name="email" type="text" className={`${styles.form_control} ${styles.form_control_2}`} placeholder="Please enter your E-mail" />
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

                <button type="submit"className={`${styles.btn_primary} ${styles.form_control_2} mt-5`}>Book Now</button>


            </form>

        </div>
    )
};

export default CommonForm;
