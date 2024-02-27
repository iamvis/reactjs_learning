import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
  
// const reactElement = {
//   type:'a', 
//   props:{
//       href:'https://www.linkedin.com/in/vishal-prajapati-6708961b7/',
//       target: '_blank'
//   },
//   children:'Click me to visit google'
// }


const anotherElement=(
  <a href="https://www.linkedin.com/in/vishal-prajapati-6708961b7/" target='_blank'>Connect with Me on Linkden </a>
)

const reactElement=React.createElement(
  'a',///tag//
  {href:'https://www.linkedin.com/in/vishal-prajapati-6708961b7/'
  ,  target:'_blank_'}, //object//
  'connnect with me linkden'
)
 
ReactDOM.createRoot(document.getElementById('root')).render(
 <App/>
       
)
