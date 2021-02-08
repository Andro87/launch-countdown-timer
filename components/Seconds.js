import styles from "./Box.module.scss";

export default function Seconds(props) {
    const { timeLeft, date } = props;

    return (
        <div className={styles.box_wrap}>
            <div className={styles.box}>
                <p className={styles.number}>{timeLeft.seconds}</p>
            </div>

            <p className={styles.date}>{date}</p>
        </div>
    );
}
