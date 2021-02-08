import { useEffect, useState } from "react";
import styles from "./Time.module.scss";

export default function Time(props) {
    const { timeLeft, label, next } = props;
    const [flip, setFlip] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        console.log("it changes!!!!");
        if (!load) {
            setLoad(true);
            return;
        }
        setFlip(false);
        setTimeout(() => {
            setFlip(true);
        }, 100);
    }, [timeLeft]);

    return (
        <div className={styles.box_timer}>
            <div className={styles.timer}>
                <div className={styles.circle_left}></div>
                <div className={styles.circle_right}></div>

                <div className={`${styles.half}  ${styles.border_top}`}>
                    <span>{next}</span>
                </div>

                <div className={`${styles.half}  ${styles.bottom} `}>
                    <span>{timeLeft}</span>
                </div>

                <div className={styles.flipper_wrap}>
                    <div
                        className={`${styles.half} ${
                            flip ? styles.flipped : null
                        }`}
                    >
                        <span>{timeLeft}</span>
                    </div>

                    <div
                        className={`${styles.half}  ${styles.back} ${
                            styles.border_bottom
                        }
                          ${flip ? styles.flipped : null} `}
                    >
                        <span>{next}</span>
                    </div>
                </div>
            </div>

            <div className={styles.date}>
                <p>{label}</p>
            </div>
        </div>
    );
}
