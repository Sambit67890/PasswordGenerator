import React, { useState } from 'react'
import './DigitalClock.css';
const DigitalClock = () => {
    let time=new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
  return (
    <div>
        <h1>{currentTime}</h1>
    </div>
  )
}
export default DigitalClock