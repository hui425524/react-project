import React from "react";

//建立員工元件
//const也可用function
const Employee = ({ name, age,h,w,bmi}) => {

    return (

        <div className="emp">
            <h2>姓名:{name}</h2>
            <p>
                年齡:{age},
                身高:{h},
                體重:{w},
                BMI:{(w/Math.pow(h/100,2)).toFixed(2)}

            </p>

        </div>

    )
}

//建立物件資料
const employees = {
    emp1: {
        name: "11111",
        age: "21"
    },
    emp2: {
        name: "22222",
        age: "22"
    },
    emp3: {
        name: "33333",
        age: "23"
    }


}
//建立陣列物件
const arrEmployees = [
    {
        id: 1,
        name: "Alice",
        age: "21",
        h:"175",
        w:"65",
        bmi:"",

    },

    {
        id: 2,
        name: "ice",
        age: "22",
        h:"170",
        w:"60",
        bmi:"",
    },

    {
        id: 3,
        name: "lice",
        age: "23",
        h:"185",
        w:"85",
        bmi:"",
    }

]

const App = () => {

    return (


        <>
            <div>
                <h1>員工資料</h1>

                {/* 使用陣列物件 + map迴圈 */}

                {
                    arrEmployees.map((emp) => {
                        return (
                            <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w } bmi={emp.bmi}/>
                        )

                    })
                }






                {/* 使用物件資料 */}
                {/* <Employee name={employees.emp1.name} age={employees.emp1.age}></Employee>
        <Employee name={employees.emp2.name} age={employees.emp2.age}></Employee>
        <Employee name={employees.emp3.name} age={employees.emp3.age}></Employee> */}


                {/* 使用固定值 */}
                {/* <Employee name="員工1" age="21"></Employee>
        <Employee name="Alice" age="22"></Employee>
        <Employee name="員工3" age="23"></Employee> */}
                {/* 也可以這樣寫: <Employee/> */}


            </div>
        </>
    )

}

export default App;