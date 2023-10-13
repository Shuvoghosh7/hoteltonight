import styles from "@/styles/LatestNews.module.css";
import Image from "next/image";
import blog1 from "../../../assets/images/LN/blog-post1.jpg";
import blog2 from "../../../assets/images/LN/blog-post2.jpg";
import blog3 from "../../../assets/images/LN/blog-post3.jpg";
import Link from "next/link";
const LatestNews = () => {
    return (
        <div>
            <div className={styles.latest_title}>
                <h2>LATEST NEWS</h2>
            </div>

            <div className={styles.letest_news_container}>
                <div className={styles.letest_news_content}>
                    <Image
                        src={blog1}
                        width={450}
                        height={550}
                        alt="Picture of the author"
                        className={styles.img_fluid}
                    />
                    <div className={styles.news_info}>
                        <h4 className={styles.news_title}>
                            <Link href="newsDetails/1">10 Tips for Holiday Travel</Link>
                        </h4>
                        <p>An examination of how the current political and economical climate is affecting the mental healthcare industry...</p>
                        <div className={styles.post_meta}>
                            <div className={styles.author_name_img}>
                                <Image
                                    src={blog1}
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                    className={styles.author_img}
                                />
                                <span className={styles.author_name}>JANE</span>
                            </div>

                            <div className={styles.publication_date_comment}>
                                <h4 className={styles.date}>
                                    August 13, 2017</h4>
                                <h4 className={styles.comments}>
                                    1 Comment
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.letest_news_content}>
                    <Image
                        src={blog1}
                        width={450}
                        height={550}
                        alt="Picture of the author"
                        className={styles.img_fluid}
                    />
                    <div className={styles.news_info}>
                        <h4 className={styles.news_title}>
                            <Link href="newsDetails/1">10 Tips for Holiday Travel</Link>
                        </h4>
                        <p>An examination of how the current political and economical climate is affecting the mental healthcare industry...</p>
                        <div className={styles.post_meta}>
                            <div className={styles.author_name_img}>
                                <Image
                                    src={blog1}
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                    className={styles.author_img}
                                />
                                <span className={styles.author_name}>JANE</span>
                            </div>

                            <div className={styles.publication_date_comment}>
                                <h4 className={styles.date}>
                                    August 13, 2017</h4>
                                <h4 className={styles.comments}>
                                    1 Comment
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
};

export default LatestNews;
