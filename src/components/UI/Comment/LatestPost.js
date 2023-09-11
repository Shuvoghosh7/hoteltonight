import styles from "@/styles/LatestNews.module.css";
import blog1 from "../../../assets/images/LN/blog-post1.jpg";
import Image from "next/image";
import Link from "next/link";

const LatestPost = () => {
    return (
        <div className="flex justify-between items-center mb-8">
            <Image
                src={blog1}
                width={50}
                height={50}
                alt="Picture of the author"
                className={styles.Latest_Post_img}
            />

            <div className={styles.Latest_Post_title}>
                <p>
                <Link href="newsDetails/1">10 Tips for Holiday Travel</Link>
                </p>
            </div>

        </div>
    )
};

export default LatestPost;
