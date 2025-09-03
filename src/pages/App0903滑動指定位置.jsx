import React,{useRef} from 'react'
// 在React中使用動元素，使用useRef
function App() {
    // 建立userRef變數
    const greenRef = useRef(null);
    const yellowRef = useRef(null);

    function gotoChange() {
        window.scrollTo({
            top: greenRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    function gotoYellow() {
        window.scrollTo({
            top: yellowRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div>

            <h1>useRef</h1>
            <div ref={yellowRef} style={{ backgroundColor: 'yellow', height: '1000px' }}>
                <button onClick={gotoChange}>green</button>
            </div>

            <div ref={greenRef} style={{ backgroundColor: 'green', height: '1000px' }}>
                <button onClick={gotoYellow}>yellow</button>
            </div>

        </div>
    )
}

export default App