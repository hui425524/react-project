import './css/app0805-1.css'


function App() {
    //一般變數
    const name= "汽水";
    //屬性名稱變數
    const myClass="myClass";

    function myClick(){

        alert("喵喵怪");


    }

    return (
        <>
        
            <div>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, nihil!</p>
            </div>

             <form action="">
                <label htmlFor="uid">帳號</label>
                <input type="text"  id="uid"/>
             </form>
             <button type="button" onClick={()=>{
                    alert("Hi")
             }}>我是按鈕</button>

             <p id="result"></p>

             <div>
                <p style={{fontSize:"24px"}}myClass={myClass}>姓名:{name}</p>
                <button type="button" onClick={myClick}>按鈕一</button>
                <button type="button" onClick={()=>{
                    alert("要不要去呢")
                }}>按鈕2</button>
             </div>

        </>

    )

}
export default App;

/* 要觸發事件要用箭頭涵式 */