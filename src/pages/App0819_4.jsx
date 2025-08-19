// rfc

import React, { useState } from 'react'

function App0819_4() {
    const [now, setNow] = useState(2);
// 純陣列
    const arrPhoto2 = [

        // photo是物件
        // 物件裡面的成員名稱要一樣
        
            "./images/1.png",     
            "./images/2.png",
            "./images/3.png",
        
    ]


    // 物件寫法
    const arrPhoto = [

        // photo是物件
        // 物件裡面的成員名稱要一樣
        {
            imgName: "./images/1.png"
        },
        {
            imgName: "./images/2.png"
        },
        {
            imgName: "./images/3.png"
        },
    ]
    return (
        <div>
            <h1>小圖換大圖</h1>
            <div>
                {/* <img src="../images/1.png" alt="" width={120} height={80} style={{cursor:'pointer'}}/>
            <img src="../images/2.png" alt="" width={120} height={80} style={{cursor:'pointer'}}/>
            <img src="../images/3.png" alt="" width={120} height={80} style={{cursor:'pointer'}}/> */}

                {
                    arrPhoto.map((photo, index) => {
                        return (

                            <img
                                key={index}
                                // photo是一個物件 所以需要呼叫裡面的物件
                                src={photo.imgName}
                                // src={photo}
                                alt='' width={120}
                                height={80}
                                style={{ cursor: 'pointer' }}
                                onMouseOver={() => {
                                    setNow(index)
                                }}
                                // 離開縮圖 回到預設圖
                                onMouseOut={()=>{

                                    setNow(2)
                                }}
                            />

                        )


                    })
                }
            </div>

            {/* <div><img src="./images/1.png" alt="" width={400} height={200} /></div> */}

            <img src={arrPhoto[now].imgName} alt="" width={400} height={200} />
            {/* <img src={arrPhoto[now]} alt="" width={400} height={200} /> */}

        </div>
    )
}

export default App0819_4