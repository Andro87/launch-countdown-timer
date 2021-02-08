import styles from "./Box.module.scss";

export default function Hours(props) {
    const { timeLeft, date } = props;

    return (
        <div className={styles.box_wrap}>
            <div className={styles.box}>
                <p className={styles.number}>{timeLeft.hours}</p>
            </div>

            <p className={styles.date}>{date}</p>
        </div>
    );
}
