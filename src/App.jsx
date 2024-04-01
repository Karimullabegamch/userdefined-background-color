import React from 'react'
import { useState } from 'react'
export default function App() {
  const [color, setColor]=useState('#ffffff')
  const change=event=>
  {
    const clr=event.target.value
  setColor(clr)
 
  }
  return (
    <div  style={{backgroundColor:color}}>
    <div id='inp' >

     <input type="color" onChange={change} name='val'/>
     
     </div>
     <p style={{backgroundColor:'white'}}>color:is{color}</p>
    </div>
  )
}
