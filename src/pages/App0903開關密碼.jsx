import React,{ useRef } from 'react'

function App() {
// 建立useRef變數
const inpuutRef=useRef(null);

// 建立關閉涵式
function closePW(){
    // 動態改變類型 password
    inpuutRef.current.type="password";
}


// 建立查看函示

function showPW(){
    // 動態改變 text
    inpuutRef.current.type="text";
}

  return (
    <div>
        <h1>開關密碼</h1>
        <input type="text" ref={inpuutRef}/>
        <button onClick={closePW}>關閉密碼</button>
        <button onClick={showPW}>查看密碼</button>




    </div>
  )
}

export default App