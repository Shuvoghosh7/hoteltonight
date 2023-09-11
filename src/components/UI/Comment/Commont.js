import React from "react"
import styles from "@/styles/LatestNews.module.css";
import blog1 from "../../../assets/images/LN/blog-post1.jpg";
import Image from "next/image";
const Comment = () => {
    return (
        <div className={styles.post_view_container}>


            <div className={styles.comment_avatar}>
                <Image
                    src={blog1}
                    width={150}
                    height={100}
                    alt="Picture of the author"
                    className={styles.comment_author_img}
                />

            </div>

            <div className={styles.comment_info_container}>
                <h1>JANE DOE</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
            </div>

        </div>
    )
};

export default Comment;
