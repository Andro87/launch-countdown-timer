import { useEffect, useState } from "react";
import Time from "../components/Time";

const calculateTimeLeft = date => {
    const targetDay = date.getTime();
    const currentDay = new Date().getTime();
    const difference = targetDay - currentDay;
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
};

export default function Clock(props) {
    const { target } = props;
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(target));

    const getNextNumber = number => {
        const next = number - 1;
        return next < 0 ? next + 60 : next;
    };
    const getNextTime = time => {
        const times = time - 1;
        return times < 0 ? 0 : times;
    };

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft(target));
        }, 1000);
    }, [timeLeft]);

    return (
        <>
            <>
                <Time
                    label="DAYS"
                    timeLeft={timeLeft.days}
                    next={getNextTime(timeLeft.days)}
                />
                <Time
                    label="HOURS"
                    timeLeft={timeLeft.hours}
                    next={getNextTime(timeLeft.hours)}
                />
                <Time
                    label="MINUTES"
                    timeLeft={timeLeft.minutes}
                    next={getNextNumber(timeLeft.minutes)}
                />
                <Time
                    label="SECONDS"
                    timeLeft={timeLeft.seconds}
                    next={getNextNumber(timeLeft.seconds)}
                />
            </>
        </>
    );
}
