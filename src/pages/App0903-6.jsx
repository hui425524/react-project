import React from 'react'

function App() {
    const inputRef=useRef();
    function focusInput(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='#ccc'
    }
  return (
    <div>
        <h1>取得遊標</h1>
        <label htmlFor='input1'>帳號</label>
        <input type='text' id='input1' ref={inputRef}/>
        <button onClick={focusInput}>取得遊標</button>

    </div>
  )
}

export default App
