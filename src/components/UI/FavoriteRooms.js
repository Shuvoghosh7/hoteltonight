import styles from "@/styles/FavoriteRooms.module.css";
import { AiFillCheckCircle } from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import single from '../../assets/images/rooms/singles.jpg'
import Doubl from '../../assets/images/rooms/dobule.jpg'
import duplex from '../../assets/images/rooms/dobule.jpg'
const FavoriteRooms = () => {
  return (
    <div>
      <div className={styles.favorite_title}>
        <h2>Guests Favorite Rooms</h2>

      </div>

      <div className={styles.favorit_room_container}>
        {/* room 1 */}
        <div className={styles.room_thumb}>
          <Image
            src={single}
            width={400}
            height={250}
            alt="Picture of the author"
            className={styles.gphoto}
          />
          <div className={`${styles.mask}`}>
            <div className={`${styles.main}`}>
              <h5>Single bedroom</h5>
              <div className={styles.price}>
                $ 99
                <br /> <span>a night</span>
              </div>
            </div>
            <div className={`${styles.content} ${styles.hoverMask}`}>
              <div>
                <p>
                  <span>A modern hotel room </span> <br></br> Nunc
                  tempor erat in magna pulvinar fermentum. Pellentesque
                  scelerisque at leo nec vestibulum. malesuada metus.
                </p>

                <div className="flex justify-between items-center mx-5">
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Private balcony
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Sea view
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Free Wi-Fi
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
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
        {/* room 2 */}
        <div className={styles.room_thumb}>
          <Image
            src={Doubl}
            width={400}
            height={250}
            alt="Picture of the author"
            className={styles.gphoto}
          />
          <div className={`${styles.mask}`}>
            <div className={`${styles.main}`}>
              <h5>Double bedroom</h5>
              <div className={styles.price}>
                $ 199
                <br /> <span>a night</span>
              </div>
            </div>
            <div className={`${styles.content} ${styles.hoverMask}`}>
              <div>
                <p>
                  <span>A modern hotel room </span> <br></br> Nunc
                  tempor erat in magna pulvinar fermentum. Pellentesque
                  scelerisque at leo nec vestibulum. malesuada metus.
                </p>

                <div className="flex justify-between items-center mx-5">
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Private balcony
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Sea view
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Free Wi-Fi
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
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
         {/* room 3 */}
         <div className={styles.room_thumb}>
          <Image
            src={duplex}
            width={400}
            height={250}
            alt="Picture of the author"
            className={styles.gphoto}
          />
          <div className={`${styles.mask}`}>
            <div className={`${styles.main}`}>
              <h5>Duplex  bedroom</h5>
              <div className={styles.price}>
                $ 299
                <br /> <span>a night</span>
              </div>
            </div>
            <div className={`${styles.content} ${styles.hoverMask}`}>
              <div>
                <p>
                  <span>A modern hotel room </span> <br></br> Nunc
                  tempor erat in magna pulvinar fermentum. Pellentesque
                  scelerisque at leo nec vestibulum. malesuada metus.
                </p>

                <div className="flex justify-between items-center mx-5">
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /> </span>
                        Private balcony
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Sea view
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Free Wi-Fi
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
                        Incl. breakfast
                      </li>
                      <li className="flex">
                        <span><AiFillCheckCircle /></span>
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
    </div>
  );
};

export default FavoriteRooms;
