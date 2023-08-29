import RootLayout from "@/components/Layouts/RootLayout";
import styles from "@/styles/Roomlist.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react"

const DuplexRoom = () => {
  return (
    <div className="mt-8">
      <div className={styles.favorit_room_container}>
        <div className={styles.room_thumb}>
          <Image
            src="https://i.ibb.co/q0QPSqc/image1.jpg"
            width={400}
            height={250}
            alt="Picture of the author"
            className={styles.gphoto}
          />

          <div className={`${styles.mask}`}>
            <div className={`${styles.main}`}>
              <h5>Double bedroom</h5>
              <div className={styles.price}>
                $ 99
                <br /> <span>a night</span>
              </div>
            </div>
            <div className={`${styles.content} ${styles.hoverMask}`}>
              <p>
                <span>A modern hotel room in Star Hotel</span> <br></br> Nunc
                tempor erat in magna pulvinar fermentum. Pellentesque
                scelerisque at leo nec vestibulum. malesuada metus.
              </p>
              <div className="flex justify-between items-center mx-5">
                <div>
                  <ul>
                    <li>
                      <span>1</span>
                      Incl. breakfast
                    </li>
                    <li>
                      <span>2</span>
                      Private balcony
                    </li>
                    <li>
                      <span>3</span>
                      Sea view
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <span>4</span>
                      Free Wi-Fi
                    </li>
                    <li>
                      <span>5</span>
                      Incl. breakfast
                    </li>
                    <li>
                      <span>6</span>
                      Bathroom
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-5">
                <Link href="/roomDetails/1" className={styles.btn_block}>
                  Read More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default DuplexRoom;

DuplexRoom.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};