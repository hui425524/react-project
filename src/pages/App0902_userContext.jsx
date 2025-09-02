import React, { useContext, useState } from 'react'


const App = () => {
    // 建立一個空的共用區(可以跨元件使用)
    const Context = React.createContext();
    // 建立按鈕控制變數
    const [signedIn, setSignedIn] = useState(false)
    // 建立使用者變數



    // 建立一個Nav元件
    const Nav = () => {
        return (
            <div className="nav">
                {/* 按鈕 */}
                <Btn />
            </div>
        )
    }


    // 建立按鈕

    // 建立變數useState 登入/登出
    // 為了讓整個地方都可使用到 所以改為使用useContext 

    const Btn = () => {
        // 取出共用區的signedIn變數與setSignedIn方法
        const [signedIn, setSignedIn] = useContext(Context);
        return (
            // 辨識現在的按鈕 切換
            <button onClick={() => setSignedIn(!signedIn)}>
                {/* 登出 */}
                {signedIn ? '登出' : '登入'}
            </button>
        )
    }




    return (
        <div>
            <h1>useContext-跨元件使用變數與函式</h1>
            <hr />
            <Context.Provider value={[signedIn, setSignedIn]}>
                <Nav />
                {/* <h2>Singed Out</h2> */}

                帳號:<input type="text" />


                <h2>
                    {signedIn ? "Signed In" : "Singed Out"}
                </h2>
            </Context.Provider>
        </div>
    )
}


export default App


