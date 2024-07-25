import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ hoursMinSecs }) => {
    const { hours = 0, minutes = 0, seconds = 0 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            reset();
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        </div>
    );
};

export default CountdownTimer;
