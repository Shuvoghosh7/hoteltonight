import React from "react"
import styles from "@/styles/LatestNews.module.css";
import blog1 from "../../assets/images/LN/blog-post1.jpg";
import Image from "next/image";
import Comment from "@/components/UI/Comment/Commont";
import PostComment from "@/components/UI/Comment/PostComment";
import LatestPost from "@/components/UI/Comment/LatestPost";
import RootLayout from "@/components/Layouts/RootLayout";

const NewsDetails = () => {
    return (
        <div>
            <section className={styles.bg_image_container}>
                <Image
                    src={blog1}
                    width={450}
                    height={550}
                    alt="Picture of the author"
                    className={styles.bg_news}
                />
                <div className={styles.overlay}>
                    <h4 className={styles.news_title}>
                        10 Tips for Holiday Travel
                    </h4>
                    <div className="mt-12">
                        <Image
                            src={blog1}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className={styles.author_img}
                        />
                        <h5 className="mt-3">JANE</h5>
                        <h5 className="mt-1">
                            <span>ON</span>  August 13, 2017</h5>
                    </div>

                </div>
            </section>

            <div className={styles.blog_content}>
                <div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <Image
                        src={blog1}
                        width={450}
                        height={450}
                        alt="Picture of the author"
                        className={styles.post_img}
                    />
                </div>

                <div>
                    <div className={styles.latest_blog}>
                        <h1>LATEST POSTS</h1>
                        <div>
                            <LatestPost/>
                            <LatestPost/>
                            <LatestPost/>
                            <LatestPost/>
                        </div>
                    </div>
                </div>
            </div>

            {/* comment section  */}
            <div className={styles.comment_container}>
                <div className={styles.section_title}>
                    <h4>COMMENTS</h4>
                    <p class="section-subtitle">Leave your comment</p>
                </div>
                {/* show comment  */}
                <div className="my-12">
                    <Comment/>
                </div> 

                {/* post comment  */}
                <div>
                    <PostComment/>
                </div>

            </div>
        </div>
    )
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
  