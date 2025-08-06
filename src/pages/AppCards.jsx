import Card from '../components/Card'
import '../css/app0806-1.css'



//建立元件
//const也可用function
// const card = ({ imgURL, title, desc, btnName, btnURL }) => {

//     return (

//         <div className="card">
//             <h2></h2>
//             <p>
//                 圖片連結:{imgURL},
//                 標題:{title},
//                 描述:{desc},
//                 按鈕名稱:{btnName},
//                 連結:{btnURL}

//             </p>

//         </div>

//     )
// }

//建立陣列物件
const arrCard = [
    {
        id: 1,
        imgURL: "https://images.unsplash.com/photo-1754235436293-8a5fee29d435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: '賞櫻',
        desc: "來場櫻花之旅",
        btnName: "download",
        btnURL: "httpsimages.unsplash.com/photo-1754235436293-8a5fee29d435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    },

    {
        id: 2,
        imgURL: 'https://images.unsplash.com/photo-1744381511285-9e06ee6f16ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
        title: '晨海',
        desc: "放鬆一下 也不為過",
        btnName: 'download',
        btnURL: 'https://images.unsplash.com/photo-1744381511285-9e06ee6f16ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',

    },

    {
        id: 3,
        imgURL: 'https://images.unsplash.com/photo-1754214881633-d2b72b61c47b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
        title: '夕陽海邊',
        desc: "偶爾慢下腳步 看看",
        btnName: 'download',
        btnURL: 'https://images.unsplash.com/photo-1754214881633-d2b72b61c47b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'


    },
    {
        id: 4,
        imgURL: "https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: '隨便',
        desc: "123",
        btnName: 'download',
        btnURL: "https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    }


]



const App = () => {
    // const photo = {
    //     photo1: {

    //         imgURL: 'https://images.unsplash.com/photo-1754235436293-8a5fee29d435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '賞櫻',
    //         desc: "來場櫻花之旅",
    //         btnName: 'download',
    //         btnURL: 'https://images.unsplash.com/photo-1754235436293-8a5fee29d435?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    //     },
    //     photo2: {

    //         imgURL: 'https://images.unsplash.com/photo-1744381511285-9e06ee6f16ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D',
    //         title: '晨海',
    //         desc: "放鬆一下 也不為過",
    //         btnName: 'download',
    //         btnURL: 'https://images.unsplash.com/photo-1744381511285-9e06ee6f16ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D'

    //     },
    //     photo3: {

    //         imgURL: 'https://images.unsplash.com/photo-1754214881633-d2b72b61c47b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
    //         title: '夕陽海邊',
    //         desc: "偶爾慢下腳步 看看",
    //         btnName: 'download',
    //         btnURL: 'https://images.unsplash.com/photo-1754214881633-d2b72b61c47b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'

    //     }

    // }


    return (
        <>
            <div className='container'>

                {
                    arrCard.map((card) => {
                        return (

                            
                            <Card
                                key={card.id}
                                imgURL={card.imgURL}
                                title={card.title}
                                desc={card.desc}
                                btnName={card.btnName}
                                btnURL={card.btnURL}>

                            </Card>
                            
                            
                        )

                    })
                }




                {/* <Card
                    imgURL={photo.photo1.imgURL}
                    title={photo.photo1.title}
                    desc={photo.photo1.desc}
                    btnName={photo.photo1.btnName}
                    btnURL={photo.photo1.btnURL}>

                </Card>

                <Card
                    imgURL={photo.photo2.imgURL}
                    title={photo.photo2.title}
                    desc={photo.photo2.desc}
                    btnName={photo.photo2.btnName}
                    btnURL={photo.photo2.btnURL}>

                </Card>
                <Card
                    imgURL={photo.photo3.imgURL}
                    title={photo.photo3.title}
                    desc={photo.photo3.desc}
                    btnName={photo.photo3.btnName}
                    btnURL={photo.photo3.btnURL}>

                </Card> */}

            </div>
        </>

    )
}

export default App