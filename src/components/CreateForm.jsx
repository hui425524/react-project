import React, { useState } from 'react'
import Todowrapper from './todowrapper'

const CreateForm = ({todos,setTodos }) => {

  const [content, setContent] = useState('')

  // 建立一個函式處理新增的todo資料

function addDate(){
    let myinput=document.getElementById("myinput");
    myinput.focus();

    if(content.length===0){
      alert("請重新輸入");
    }else{

      setTodos([...todos,{content:content, id:Math.random(),isOk:false}])
      setContent("")
    }        

}

  return (
    <>
      <form className='create-form'>
      <input
        id='myinput'
        type="text"
        placeholder='請輸入代辦事項'
        value={content}//在react裡面是變數
        // .trim() 去除資料前後的空白
        onChange={(e) => { setContent(e.target.value.trim()) }}

      />
      {/* addDate是一個方法為什麼後面沒加()呢? 因為加了()，一開啟網頁就會立即執行 */}
      <button type='button' onClick={addDate}>加入</button>
      
</form>





    </>
  )
}

export default CreateForm


// 第二種
// const CreateForm = ({ OnAdd }) => {

//   const [content, setContent] = useState('')



//   return (
//     <>
//       <form className='create-form'>
//       <input
//         id='myinput'
//         type="text"
//         placeholder='請輸入代辦事項'
//         value={content}//在react裡面是變數
//         onChange={(e) => { setContent(e.target.value.trim()) }}

//       />
//       <button type='button' onClick={() => {

//         // 新增內容到陣列
//         OnAdd(content)
//         // 幫使用者清空文字框的內容；更動文字是由 setContent 這個方法
//         setContent("")
//         // # 將內容取出來
//         let myinput=document.getElementById("#myinput");
//         myinput.focus();
        


//       }}>加入</button>
//       </form>
