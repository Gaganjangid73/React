import { useState } from 'react'
import './index.css'
import './App.css'


function App() {

 const [count, setcount] = useState(0);

  const addvalue = () =>{
    setcount(count + 1);
  }

  const decreasevalue =() =>{
     setcount(count - 1);
  }

  return (
    <>
      <h1>  Chai Aur React !</h1>
      <h2> Counter  :  {count} </h2>


      <button onClick={addvalue}> Increase Value</button>
      <br/>
      <button onClick={decreasevalue}> Decrease Value</button>
    </>
  )
}

export default App
