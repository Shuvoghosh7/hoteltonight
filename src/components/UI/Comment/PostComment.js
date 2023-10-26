import React from "react"
import styles from "@/styles/LatestNews.module.css";

const PostComment = () => {
    return (
        <div>
            <div className={styles.section_title}>
                <h4>Write your comment</h4>
                
            </div>
            <form>
                <div className="lg:flex ">
                    <input type="text" className={styles.form_control} placeholder="Name*" />
                    <input type="email" className={`${styles.form_control} lg:ml-12`} placeholder="Email*" />
                </div>
                <div>
                    <textarea className={styles.form_control_textarea} placeholder="Write Your Comment"></textarea>
                </div>

                <div>
                    <input type="submit" value="POST YOUR COMMENT" className={styles.form_submit_btn}/>
                </div>
            </form>
        </div>
    )
};

export default PostComment;
