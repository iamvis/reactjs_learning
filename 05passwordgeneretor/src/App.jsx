import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const[length, setlength]=useState(8)
  const[numberallowed, setnumberallowed]=useState(false);
  const[chareallowed, setchareallowed]=useState(false);
  const[Password, setpassword]=useState("")


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str= str+"0123456789"
    }
    if(chareallowed){
      str=str+"!#$%&'()*+,]-./:;<=>?@[^_`{|}~"
    } 

    for (let i = 0; i <=length; i++) {
      let char= Math.floor(Math.random() *str.length +1)
      //Math.random() *str.length--->it gives values between ( 0, str.length)
      pass =pass + str.charAt(char)
      
    }
    setpassword(pass)
  },[length, numberallowed, chareallowed, setpassword])
  
    // user hook
    const  passwordref=useRef(null)

    const copyPasswordToClipboard= useCallback(()=>{
      passwordref.current?.select()
     
     
      window.navigator.clipboard.writeText(Password)
    }, [Password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, numberallowed, chareallowed,passwordGenerator])
  
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-black bg-yellow-600 ">
    <h1 className=" text-center">Password Generator</h1>
    <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
      <input
      type="text"
      value={Password}
      className="   outline-none w-full py-2 px-7"
      placeholder="Password"
      readOnly
      ref={passwordref}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className="bg-orange-300  px-4 py-2 font-bold">copy</button>
    
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className="cursor-pointer"
      onChange={(e)=>setlength(e.target.value)} 
      />
         <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1" >
          <input 
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberallowed"
          onChange={(e)=>{
            setnumberallowed((prev)=>!prev)
          }}
           />

           <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1" >
          <input 
          type="checkbox"
          defaultChecked={chareallowed}
          id="chareallowed"
          onChange={(e)=>{
            setchareallowed((prev)=>!prev)
          }}
           />

           <label htmlFor="characterInput" >Characters</label>
      </div>
     
    </div>
    </div>
    </>
  )
}

export default App
