import { useState } from 'react'
import './PasswordGenerator.css'

const PasswordGenerator = () => {
 let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordLen]=useState(8)
  let [finalPassword,setPassword]=useState('')

  let createPassword=()=>{
    let finalPassword=''
    let charset=''
    if(uppercase || lowercase || number || symbol){
      if(uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      if(lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
      if(number) charset += '0123456789'
      if(symbol) charset += '!@#$%^&*()_+[]{}|;:,.<>?'
      
      let password = ''
      for(let i=0; i<passwordlen; i++){
        finalPassword += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      setPassword(finalPassword)
    }else{
      alert('Please select at least one character type.')
    }
  }

  let copyPassword = () => {
    navigator.clipboard.writeText(finalPassword)
  }
  

  return (
    <>
      <div className="app-container">
        <h2>Password Generator</h2>

        <div className="password-display">
          <input type="text" readOnly value={finalPassword}/><button onClick={copyPassword}>copy</button>
        </div>

        <div className="settings">
          <label>Password Length</label>
          <input type="number" value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
        </div>

         <div className="settings">
          <label>Include Uppercase Latters</label>
          <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className="settings">
          <label>Include Lowercase Letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
        </div>

        <div className="settings">
          <label>Include Numbers</label>
          <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className="settings">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
        </div>
        <button onClick={createPassword}>Generate Password</button>
      </div>
    </>
  )
}

export default PasswordGenerator