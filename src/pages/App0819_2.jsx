function SecCom({c}) {/* props */
    return <>
        <h1>Hi 我是第二元件</h1>
        <p>接收到的是:{c}!</p>
        

    </>
}
// 在主程式呼叫它 得到b 再把b的值指定給c
function FirCom2({b}) {
    return (
        <>
            <h2>接收來自主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, impedit.</p>
            <SecCom  c={b}/>
            我是:{b}

        </>
    )
}


function FirCom({ a, children }) {
    return (
        <>
            <h2>接收來自主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, impedit.</p>
            {children}
            我是:{a}

        </>
    )
}

const App0819 = () => {


    return (
        <div>
            <h1>元件之間 傳遞元件</h1>
            <FirCom a="屬性a君">
                <SecCom  a="屬性a君"/>
            </FirCom>


        {/* 直接在主程式各自呼叫 */}
            <hr />
            <FirCom2 b="嗨"/>

        </div>

    )
}
export default App0819