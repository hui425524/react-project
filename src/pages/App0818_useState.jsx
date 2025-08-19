import { useState } from "react"

const App0818 = () => {
    
    const[item,setItem]=useState('');

    // 建立下拉選單的項目=>給人看
    const opList=['HTML','React','CSS','JS'];
    // 建立下拉選單的內容=>
    const opValue=['html','react','css','js'];

    return (
        <div>
            <h2>補捉下拉選單</h2>


            <select name="item" value={item} onChange={(e)=>{

                setItem(e.target.value);
                console.log(e.target.value);}}>

                {/* 不給再次選 */}
                <option value="" disabled>請選擇</option>
                    
                {
                    opList.map((item,index)=>{
                    return<option key={item}value={opValue[index]}>{item}</option>
                    })
                }




                {/* <option value="">選擇</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JS</option>
                <option value="w">w</option> */}
            </select>

        </div>


    )


}
export default App0818