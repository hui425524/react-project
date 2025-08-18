import { useState } from "react"

// 元件

function Mycom() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        // 在react呼叫自訂涵式 只需打名稱
        <button id="btn1" onClick= {handleClick}>點擊次數:{count}</button>
    )
}

// //建立元件第二個方法
// const Mycom=()=>{

//     return()

// } 

const App0818 = () => {

    // const[count,setCount]=useState(0);


    return (
        <>
            {/* <button id="btn1" onClick={() => {

                setCount(count+1);
                console.log(count);

            }}>點擊次數:{count}</button> */}

           < Mycom/>



        </>
    )



}
export default App0818
