import React from 'react'
import './StopWatch.css'
import { useState, useEffect } from 'react'
const StopWatch = () => {
    const [time,setTime]=useState(0)
    const [running,setRunning]=useState(false)
    useEffect(()=>{
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
  return (
   <div className='stopwatch'>
        <h1>Stop Watch</h1>
        <div className='stopwatch-display'>
            <span>{("0"+Math.floor(time/60000)%60).slice(-2)}</span>
            <span>{("0"+Math.floor(time/1000)%60).slice(-2)}</span>
            <span>{("0"+Math.floor(time/10)%100).slice(-2)}</span>
        </div>
        <div className='buttons'>
            {!running}
            <button onClick={()=>{setRunning(true)}}>Start</button>
            <button onClick={()=>{setRunning(false)}} className='btn1'>Stop</button>
            <button onClick={()=>{setTime(0)}}>Reset</button>
        </div>
   </div>
  )
}
export default StopWatch