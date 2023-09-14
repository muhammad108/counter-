import React from "react"
import {useState} from "react"


function App(){

      let [counter,setCounter]=useState(10)

      function addValue (){
        setCounter(counter+1)
      }
      
      function removeValue (){
        setCounter(counter-1)
      }
    return(

        <>
        <h1>my counter</h1>
        <h4>counter value:{counter}</h4>
        <button onClick={addValue}>add value</button>
        <button onClick={removeValue}>remove value</button>
        </>
    )
}
export default App





