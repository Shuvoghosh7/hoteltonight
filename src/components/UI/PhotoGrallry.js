import React, { useEffect, useState } from "react"

import styles from "@/styles/PhotoGrally.module.css";
import Image from "next/image";

const PhotoGrally = () => {
  const [activeTab, setActiveTab] = useState('*');
  useEffect(() => {
    import('isotope-layout').then((Isotope) => {
      const iso = new Isotope.default('.main_iso', {
        itemSelector: '.item',
        layoutMode: 'fitRows',

      });

      const navItems = document.querySelectorAll('.iso_nav ul li');

      navItems.forEach((item) => {
        item.addEventListener('click', () => {
          // Remove active class from all items and add to the clicked item
          navItems.forEach((navItem) => {
            navItem.classList.remove('active');
          });
          item.classList.add('active');

          const selector = item.getAttribute('data-filter');
          iso.arrange({ filter: selector });
        });
      });
    });
  }, []);

  const handleTabClick = (filter) => {
    setActiveTab(filter);
  };

  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage)


  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className={`${styles.grallry_content} iso_nav`}>
        <ul>
          <li className={activeTab === '*' ? styles.active : ''}
            onClick={() => handleTabClick('*')}
            data-filter="*">
            websites
          </li>
          <li className={activeTab === '.personal' ? styles.active : ''}
            onClick={() => handleTabClick('.personal')} data-filter=".personal">personal</li>
          <li className={activeTab === '.video' ? styles.active : ''}
            onClick={() => handleTabClick('.video')} data-filter=".video">video</li>
          <li className={activeTab === '.image' ? styles.active : ''}
            onClick={() => handleTabClick('.image')} data-filter=".image">image</li>
          <li className={activeTab === '.post' ? styles.active : ''}
            onClick={() => handleTabClick('.post')} data-filter=".post">post</li>
        </ul>
      </div>
      <div className="mt-5">
        <div className="main_iso">
          <div class="item personal">
            <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/q0QPSqc/image1.jpg")}>
              <Image
                src="https://i.ibb.co/q0QPSqc/image1.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item personal">
          <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/LrdNgTC/image2.jpg")}>
              <Image
                src="https://i.ibb.co/LrdNgTC/image2.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item video ">
            <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/RCH5Jth/image3.jpg")}>
              <Image
                src="https://i.ibb.co/RCH5Jth/image3.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item  video ">
          <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/2893kMN/image4.jpg")}>
              <Image
                src="https://i.ibb.co/2893kMN/image4.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item image ">
          <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/d20gD1L/image5.jpg")}>
              <Image
                src="https://i.ibb.co/d20gD1L/image5.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item image  ">
            <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/5TY8vkP/image6.jpg")}>
              <Image
                src="https://i.ibb.co/5TY8vkP/image6.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item post ">
          <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/RS3d7pK/image8.jpg")}>
              <Image
                src="https://i.ibb.co/RS3d7pK/image8.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>
          <div class="item post">
          <div className={styles.gimage} onClick={() => setSelectedImage("https://i.ibb.co/1qGNDmH/image9.jpg")}>
              <Image
                src="https://i.ibb.co/1qGNDmH/image9.jpg"
                width={250}
                height={250}
                alt="Picture of the author"
                className={styles.gphoto}
              />
            </div>
          </div>







        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightbox}>
          <div className={styles.lightbox_content}>
            <span className={styles.close_button} onClick={()=>setSelectedImage(null)}>
              &times;
            </span>
            <Image
             src={selectedImage}
              width={850}
              height={550}
              alt="Picture of the author"
            />
           
          </div>
        </div>
      )}
    </div>

  )
};

export default PhotoGrally;
