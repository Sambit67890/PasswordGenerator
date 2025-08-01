import React, { useEffect, useState, useRef } from 'react'
import './CountDown.css';

const CountDown = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const intervalId = useRef(null);

    const handleInput = (e) => {
        setTime(parseInt(e.target.value*60));
    }

    const formatTime = () => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
    const handleStart = () => {
        setIsActive(true);
        setIsPause(false);
    }

    const handlePause = () => {
        setIsPause(!isPause);
    }

    const handleReset = () => {
        clearInterval(intervalId.current);
        setIsActive(false);
        setIsPause(false);
        setTime(0);
    }

    useEffect(() => {
        if (isActive && !isPause && time > 0) {
            intervalId.current = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0 && intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
            setIsActive(false);
            alert("Time's up!");
        }
        return () => {clearInterval(intervalId.current)}
    }, [isActive, isPause, time]);

  return (
    <div className='countdown-container'>
        <h1>CountDown Timer</h1>
        <div className="countdown-display">
            <input type="number" placeholder="Enter in minutes" onChange={handleInput}/>
            <div>{formatTime()}</div>
        </div>
        <div className="countdown">
            <button onClick={handleStart} disabled={isActive && !isPause}>Start</button>
            <button onClick={handlePause} disabled={!isActive}>{isPause? 'Resume':'Pause'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default CountDown