// map需要有一個key值，key值要放在子元件
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import React from 'react'

// 接收=>使用解構
const Todo = ({ todo, delTodo ,toOk}) => {
    return (
        // 使用字串值+三元運算子，控制是否套用 "isOK"這個css樣式
        // 用{}是因為 這是JS的語法
        <div className={`todo ${todo.isOk ? "isOk":""}`}>
            {/* <p>停車費</p> */}
            <p onClick={()=>{toOk(todo.id)}}>{todo.content}</p>

            <div>
                <MdEdit
                    style={{ cursor: "pointer", marginRight: "5px" }} 
                    // onClick={()=>{}}
                />
                < MdDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => { delTodo (todo.id) }}
                />
            </div>


        </div>
    )
}

export default Todo