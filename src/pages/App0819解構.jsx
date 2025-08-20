
// 物件的成員是 屬性與方法




// 原本是這樣寫:
function MyCom(props) {
    props.c();
    return (
        <>
            <div>hi我是標準寫法</div>
            {/* 標準寫法 */}
            <div>{props.a}</div>
            <div>{props.b}</div>
            {/* {props.c()}; */}
        </>

    )
}



{/* 簡化寫法 */ }
//物件解構=>裡面放物件的成員
function MyCom2({ a, b, c }) {
    c();
    return (

        <>
            <div>hi!簡化的寫法</div>

            <div>{a}</div>
            <div>{b}</div>
            {/* {c()} */}

        </>

    )

}




{/* 簡化寫法 */ }
//物件解構=>裡面放物件的成員
function MyCom3({ a, b = "預設值", c }) {
    //    c();
    return (

        <>
            <div>這邊是預設值</div>

            <div>{a}</div>
            <div>{b}</div>
            {c()}

        </>

    )

}

// 父元件
const App0819 = () => {

    return (
        <>
            {/* 呼叫元件  */}
            <MyCom a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <MyCom2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
            <MyCom3 a="我是屬性a" b="王曉明" c={() => { console.log("789") }} />
        </>

    )
}
export default App0819