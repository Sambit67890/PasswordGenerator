import React from 'react'
import { useState } from 'react'
import './Counter.css';
const Counter = () => {
    const Increament=(()=>{
        setCount(count+1);
    })
    const Decreament=(()=>{
        setCount(count-1);
    })
    const [count, setCount] = useState(0);
  return (
    <>
    <div className='box'>
        <div className='counter'>Count:{count}</div>
        <div className='btn'>
            <button onClick={Increament}>+</button>
            <button onClick={Decreament}>-</button>
        </div>
    </div>
    </>
  )
}

export default Counter