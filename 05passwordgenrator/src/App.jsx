import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // UseRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let chars = "oiuytrewaghjklpoiuytwazxcvbnmktbnmoiuytreazxcvbnkuytreazxcvbn"

    if (numberAllowed) chars += "12367890"
    if (symbolAllowed) chars += "~!@#$%^&*()))_+"

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length)
      pass += chars.charAt(idx)
    }

    setPassword(pass)
  }, [length, numberAllowed, symbolAllowed,setPassword])

const copypasswordtoclipboard = useCallback(() =>{
  
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);

},[password])

 useEffect(()=>{
   passwordGenerator()
 },[passwordGenerator, length, numberAllowed, symbolAllowed])

  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-amber-600 bg-gray-600'>
      <h1 className="text-white text-center text-3xl mb-3">Password Generator</h1>
      <div className="flex shadow rounded-2xl overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Your Encrypted Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copypasswordtoclipboard} className="outline-none bg-amber-500 text-white py-1 px-3">Copy</button>
      </div>

      <div className="flex text-sm justify-between"> 
        <div className="flex items-center gap-x-1">
          <input type="range" min="8" max="50" value={length} className='cursor-pointer outline-none' onChange={(e)=> setLength(e.target.value)}/>
          <label>Length : {length}</label>
        </div>
         <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={numberAllowed} className='cursor-pointer outline-none' onChange={()=> setNumberAllowed(!numberAllowed)}/>
          <label>NumberAllowed</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={symbolAllowed} className='cursor-pointer outline-none' onChange={()=> setSymbolAllowed(!symbolAllowed)}/>
          <label>SymbolAllowed</label>
        </div>
      </div>
    </div>
  )
}

export default App