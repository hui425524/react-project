import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './todo'


const Todowrapper = () => {

    // 因為有N個todo所以要用陣列存取
    // const[todos,setTodos]=useState(["停車費","兌獎發票"])
    // 若增減索引值會變動，為了避免異動資料時，所造成混亂=>修改為 陣列物件
    // 而key值用亂數所產生

    
    const [todos, setTodos] = useState([

        { content: "停車費", id: Math.random(),isOk:false },
        { content: "兌獎發票", id: Math.random(),isOk:false},



    ]);

    // 建立刪除TODO，傳入被刪除的ID(todo.id)
// filter陣列篩選
    const delTodo=(id)=>{
        setTodos(todos.filter((todo)=>{

            // 使用filter方法 保留不是被刪除的ID
            return todo.id !== id


        }))
    }


// 建立切換isOK的函示(true<=>false)
    // 1.檢查被點擊的項目 是否跟陣列中的ID一樣
    // 2
    // yes :取出todo，將isOk的屬性反向(NOT)
    // no:todo(不變)
    const toOk=(id)=>{

        setTodos(todos.map((todo)=>{

            return todo.id===id
            ?{...todo , isOk: !todo.isOk}/* 抓出todo裡面的isOk欄位， */
            : todo
        }))
    }

    

    return (
        <>

            <div className='wrapper'>

                <h1>代辦事項</h1>
                {/* 第一種 */}
                {/* 直接將資料傳給下一層 */}
                <CreateForm todos={todos} setTodos={setTodos}/>

                {/* 第二種 */}
                {/* <CreateForm OnAdd={(NewContent)=>{
                    // ...是其餘運算子
                    // ...todos 會將原有的內容保留住

                    //再加上新的內容 NewContent
                    setTodos([...todos,{content:NewContent, id:Math.random(),isOk:false}])
                }}/> */}



               
                {
                    todos.map((todo) => {

                        return <Todo todo={todo} key={todo.id}  delTodo={delTodo} toOk={toOk}/>
                    })
                }

            </div>
        </>

    )
}
export default Todowrapper