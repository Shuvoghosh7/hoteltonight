import React from "react"
import styles from "@/styles/Spa.module.css";
import Image from "next/image";
import spa1 from "../../assets/images/spa/spa.png";
import spa2 from "../../assets/images/spa/spa1.jpg";
import spa3 from "../../assets/images/spa/spa2.jpg";
import spa4 from "../../assets/images/spa/spa3.jpg";
import spa5 from "../../assets/images/spa/spa4.jpg";
const spaDetails = () => {
  return (
    <div>
      <div className={styles.spa_container_details}>
        <h4>WELCOME TO HIMARA SPA</h4>
      </div>
      <div className=" lg:mx-32 mx-5 mt-16">
        <div className={styles.spa_details_content}>
          <Image
            src={spa1}
            width={230}
            height={160}
            alt="Picture of the author"
            className={styles.pull_right}
          />
          <p> Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.</p>
        </div>

        <div className={styles.spa_services}>
          <Image
            src={spa2}
            width={230}
            height={160}
            alt="Picture of the author"
            className={styles.pull_right}
          />
           <Image
            src={spa3}
            width={230}
            height={160}
            alt="Picture of the author"
            className={styles.pull_right}
          />
           <Image
            src={spa4}
            width={230}
            height={160}
            alt="Picture of the author"
            className={styles.pull_right}
          />
           <Image
            src={spa5}
            width={230}
            height={160}
            alt="Picture of the author"
            className={styles.pull_right}
          />
        </div>

        <div className={styles.spa_details_content2}>
          <p>Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.
            Nam vitae suscipit magna. Nam et felis nulla. Ut nec magna tortor. Nulla dolor
            sapien, laoreet vel tincidunt non, egestas non justo.
            Donec pretium sem non tincidunt iaculis. Nunc at pharetra eros, a varius leo.
            Mauris id hendrerit justo. Mauris egestas magna vitae nisi ultricies semper.</p>
        </div>
        

      </div>
    </div>

  )
};

export default spaDetails;
