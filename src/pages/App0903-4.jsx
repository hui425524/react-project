import React,{useRef} from 'react'

function App() {
    // 建立useRef變數
    const input1Ref =useRef(null);
    const input2Ref =useRef(null);
    const input3Ref =useRef(null);

    // function inputFocus(no){
    //     input1Ref.current.style.backgroundColor='';
    //     input2Ref.current.style.backgroundColor='';
    //     input3Ref.current.style.backgroundColor='';

    //     if(no===1){
    //          input1Ref.current.style.backgroundColor='yellow';
    //     }else if(no===2){
    //         input2Ref.current.style.backgroundColor='yellow';
    //     }else if(no===3){
    //          input3Ref.current.style.backgroundColor='yellow';
    //     }
    // }
    function inputFocus(){
        input1Ref.current.style.backgroundColor='yellow';
        input2Ref.current.style.backgroundColor='';
        input3Ref.current.style.backgroundColor='';
    }

    function inputFocus2(){
        input1Ref.current.style.backgroundColor='';
        input2Ref.current.style.backgroundColor='yellow';
        input3Ref.current.style.backgroundColor='';
    }

    function inputFocus3(){
        input1Ref.current.style.backgroundColor='';
        input2Ref.current.style.backgroundColor='';
        input3Ref.current.style.backgroundColor='yellow';
    }


    

   

  return (
    <div>
        <h1>文字方塊指定時變色</h1>
        文字方塊1<input type='text' ref={input1Ref} onFocus={inputFocus}/> <br />

        文字方塊2<input type='text' ref={input2Ref} onFocus={inputFocus2}/> <br />

        文字方塊3<input type='text' ref={input3Ref} onFocus={inputFocus3}/> 

    </div>
  )
}

export default App