import { createContext,useContext,useState } from "react";

export default function App() {
    // 建立一個空共用區 整個檔案都可以用
    const UserContext = createContext({});

    // 建立變數

    // 建立按鈕控制變數
    // 值&方法 預設值給false
    const [signIn, setsignIn] = useState(false);

    // 使用者變數
    const [user, setUser] = useState("demo");


    

    // 建立登入元件
    const LoginForm=()=>{
      const{user,setUser,setsignIn}=useContext(UserContext);
        return(
          <>
          
          <label htmlFor="user">使用者名稱</label>
          <input 
            type="text" 
            placeholder='請輸入帳號' 
            value={user} 
            onChange={e=>setUser(e.target.value)}
            />

            <button type="button" onClick={()=>{setsignIn(ture)}}>登入</button>


           </>    
        )

    }

      // 登入後的介面
      // 歡迎區 元件
      const Hi=()=>{
        // 從共用區UserContext取得user
        const {user}=useContext(UserContext);
        return(
          <div>
            Hi,{user}
          </div>
        )
      }

      return(
        <>
        <h1>useContext</h1>
        <hr style={{marginBottom:"50px"}}/>
        
        <UserContext.Provider value={{ user,setUser,setsignIn}}>

        {setsignIn? <Hi/> : <LoginForm/>}

        </UserContext.Provider>
        
        </>
      )








    // // 建立按鈕
    // const Btn = () => {
    //     // 建立變數useState 登入/登出
    //     // 為了讓整個地方都可使用到 所以改為使用useContext 
    //     // 取出公用區signIn變數與setsignIn方法
    //     const [signIn, setsignIn] = useContext(Context);
    //     return (
    //         // 辨識現在的按鈕 切換
    //         <button onClick={() => { setsignIn(!signIn) }}>
    //             {/* 登出 */}
    //             {signIn ? "登出" : "登入"}
    //         </button>
    //     )
    // }
    

    // return (
    //     <div>
    //         <h1>useContext</h1>
    //         <hr />
    //         {/* 放共用區的變數 */}
    //         <Context.Provider value={[user,setUser, signIn, setsignIn]}>
    //             <Nav />


    //             {/* <h2>signed Out</h2> */}

    //             <h2>
    //                 {signIn ? "signIn" : "sign Out"}

    //             </h2>
    //         </Context.Provider>

    //     </div>
    // )

}

