import styles from "@/styles/Dashboard.module.css";
import { BiUserPlus } from 'react-icons/bi';
import { GiMushroomHouse } from 'react-icons/gi';


const Dashboard = () => {
    return (
        <div>
            <div className={styles.page_title}>
                <h1>Good Morning <span>Soeng Souy!</span></h1>
            </div>
            <div className={styles.cart_container}>
                <div className={styles.cart_item} id={styles.cart_item1}>
                    <div>
                        <h3>236</h3>
                        <h4>Total Booking</h4>
                    </div>
                    <div><BiUserPlus className={styles.cart_icon} /></div>
                </div>
                <div className={styles.cart_item} id={styles.cart_item2}>
                    <div>
                        <h3>180</h3>
                        <h4>Available Rooms</h4>
                    </div>
                    <div><GiMushroomHouse className={styles.cart_icon} /></div>
                </div>
                <div className={styles.cart_item} id={styles.cart_item3}>
                    <div>
                        <h3>18</h3>
                        <h4>Employees</h4>
                    </div>
                    <div><BiUserPlus className={styles.cart_icon} /></div>
                </div>
                <div className={styles.cart_item} id={styles.cart_item4}>
                    <div>
                        <h3>180</h3>
                        <h4>Total Rooms</h4>
                    </div>
                    <div><GiMushroomHouse className={styles.cart_icon} /></div>
                </div>
            </div>


            <div>
               
            </div>

        </div>
    )
};

export default Dashboard;
