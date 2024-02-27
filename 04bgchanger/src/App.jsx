import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[color, setColor]=useState("grey")

  return (
    
     <div className=" w-full h-screen duration-300" style={{backgroundColor:color}}>
      <h1 className="  text-6xl bg-red-300">BG-colorchanger</h1>
        <div className="fixed  flex flex-wrap bottom-12 inset-x-0 px-2 justify-center ">
          <div className="flex flex-wrap justify-center  gap-4 px-3 py-2 rounded-3xl shadow-2xl ">
               <button onClick={()=>setColor("red")}
               className=" rounded-md outline-none  px-5 py-5 border-2 "
               style={{backgroundColor:"red"}}
               >Red</button>
               <button onClick={()=>setColor("yellow")}
               className=" rounded-md outline-none  px-5 py-5 border-2"
               style={{backgroundColor:"yellow"}}
               >Yellow</button>
               <button onClick={()=>setColor("green")}
               className=" rounded-md outline-none h-full  px-5 py-5 border-2"
               style={{backgroundColor:"green"}}
               >green</button>
               <button  onClick={()=>setColor("olive")}
                className=" rounded-md outline-none  px-5 py-5 border-2"
                style={{backgroundColor:"olive"}}
                >olive</button>
               <button  onClick={()=>setColor("orange")}
               className=" rounded-md outline-none  px-5 py-5 border-2"
               style={{backgroundColor:"orange"}}
               >orange</button>
               <button onClick={()=>setColor("white")}
               className=" rounded-md outline-none  px-5 py-5 border-2 border-black"
               style={{backgroundColor:"white"}}
               >white</button>
               <button onClick={()=>setColor("black")}
               className=" rounded-md outline-none c px-5 py-5 border-2"
               style={{backgroundColor:"black", color:"white"}}
               >black</button>
               <button onClick={()=>setColor("pink")}
               className=" rounded-md outline-none  px-5 py-5 border-2"
               style={{backgroundColor:"pink"}}
               >pink</button>
               <button onClick={()=>setColor("lavender")}
               className=" rounded-md outline-none  px-5 py-5 border-2 "
               style={{backgroundColor:"lavender"}}
               >lavender</button>
               <button onClick={()=>setColor("blue")}
               className=" rounded-md outline-none  px-5 py-5 border-2"
               style={{backgroundColor:"blue"}}
               >blue</button>
          </div>
        </div>
     </div>

    
  )
}

export default App
