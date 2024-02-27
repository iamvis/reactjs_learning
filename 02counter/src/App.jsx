import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //here we use hooks for changing ui for every where related to vaiable 
  //all state change automatically
      let [Counter,  SetCounter]= useState(7)  
      //ye bhi let Counter =7 jesa her kam
      //kar ra but isme saari state me changes ho jayega react  ke dwara 

  
  
  
      // let Counter=7
      const Addvalue = ()=>{
        console.log("clicked on add",Counter);
        if(Counter<20){
          //Counter=Counter+1;
          SetCounter(prevCounter=>prevCounter+1)
          SetCounter(prevCounter=>prevCounter+1)
          SetCounter(prevCounter=>prevCounter+1)
          SetCounter(prevCounter=>prevCounter+1)
          //use state iskom bunch me bhejta haai isliye jab aupdate hoga +4 direct hoga ek clik me
        }
        
      }

      const Removevalue = ()=>{
        console.log("clicked on remove",Counter);
        if(Counter ==0){
          console.log("Invalide Value: ",Counter)
        }
        else{
          Counter=Counter-1;
          SetCounter(Counter)
        }
       
        
      }


 
  return (
    <>
  <h1>Chai aur Shankar Dada</h1>
  <h2>Chai Ke Cut ki Value:   {Counter}</h2>
     <button 
     onClick={Addvalue}
     >Chai Badao</button>

     <br />

     <button 
     onClick={Removevalue} 
     >Chai Ghatao</button>
    </>
  )
}

export default App
