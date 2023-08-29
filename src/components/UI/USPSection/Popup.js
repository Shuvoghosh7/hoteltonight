import styles from "@/styles/USPSection.module.css";
const Popup  = ({ content, onClose }) => {
  return (
    <div className={styles.popup_overlay}>
      <div className={styles.popup_container}>
        <button className={styles.close_button} onClick={onClose}>
           Close
        </button>
        {content}
      </div>
    </div>
  )
};

export default Popup ;
