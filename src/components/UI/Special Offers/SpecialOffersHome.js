import React from "react"
import HoneymoonPackage from "./HoneymoonPackage";
import styles from "@/styles/SpecialOffers.module.css";
import FamilyPackage from "./FamilyPackage";
const SpecialOffers = () => {
  return (
    <div>
      <div className={styles.froom_title}>
        <h2>SPECIAL OFFERS</h2>
      </div>
      <div className={styles.specialOffers}>
        <HoneymoonPackage />
        <FamilyPackage />
      </div>
    </div>

  )
};

export default SpecialOffers;
