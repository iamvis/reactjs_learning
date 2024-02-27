import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let shankar ={
    username:"Popat",
    age: 99,
    weight:1009
  }
  let newarr =[2,3,4,5,56,6,6,6]

  return (
    <>
      <h1 className='bg-yellow-200 text-black p-3 rounded-xl mb-5' >Tailwind Test</h1>
      <Card  username="Modi ji" btnText="Click Me"
      />
      <br />
      <Card  username="Arijit Singh"  btnText="visit me"
      />
      <br />
      <Card username="yo yo honeysigh" />
     
    
    </>
  )
}

export default App
