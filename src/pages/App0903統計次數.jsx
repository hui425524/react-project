import React, { useEffect, useState ,useRef} from 'react'

function App() {
    const [inputValue,setInputValue]=useState('');
    const count =useRef(0);
    useEffect(()=>{
        count.current = count.current+1;
        
    })
  return (
    <div>
        <h1>useRef異動次數</h1><hr />

        <input type="text" 
            value={inputValue}
            ocChange={(e)=>setInputValue(e.target.value)}
        
        
        />
        <h2>文字方塊異動次數:{count.current}</h2>
    </div>
  )
}

export default App