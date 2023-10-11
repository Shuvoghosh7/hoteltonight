import Beverages from "./Beverages";
import styles from "@/styles/USPSection.module.css";
import StayFirstPayAfter from "./StayFirstPayAfter";
import Restaurant from "./Restaurant";
import Spa from "./Spa";
const UpsHome = () => {
    return (
        <div>
             <div className={styles.ups_title}>
                <h2>OUR SERVICES INCLUDED</h2>
            </div>
            <div className={styles.ups_container}>
                <Beverages />
                <StayFirstPayAfter/>
                <Restaurant/>
                <Spa/>
            </div>

        </div>
    )
};

export default UpsHome;
