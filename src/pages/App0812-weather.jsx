import axios from 'axios';
import '../css/app0811-1.css'
import { IoUmbrellaSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';

// <IoUmbrellaSharp />

const App = () => {
    //建立react變數，使用useState Hook ??????????
    
    // 存放各縣市資料
    // const [變數名稱, 更改變數名稱的方法] = useState(預設值);
    
    const [cities,setCities] = useState([]);


    //  useEffect渲染後只呼叫一次json
    //如果要取得渲染後的DOM元素(return內的內容)要寫在 useEffect裡
    useEffect(() => {

        
        // 非同步取資料的方法 async要搭配await(等待一下)
        (async () => {

            // 取得public裡的json檔案
            const jsondata = await axios.get('./src/json/F-C0032-001.json');
           
            // 取得src中的json資料
            // const data = await axios.get('./src/json/F-C0032-001.json')

            // 檢查是否連上json
            console.log(jsondata.data.cwaopendata.dataset);
            // console.log(jsondata);

            // 取得各縣市的氣象資訊（從json中解構出來）
            const { location } = jsondata.data.cwaopendata.dataset
            console.log(location);

            // 將各縣市資訊透過setCities方法，更新cities變數
            setCities(location);

        })();//這個小括號是呼叫，不寫的話會沒法跑
    }, []);




    // 


    // const weather = {

    //     weather1: {
    //         locationName: '台北市',
    //         date: '11日',
    //         startTime: '上午6:00 ',
    //         time2: '~ ',
    //         endTime: '下午6:00',
    //         img: 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/21.svg',
    //         desc: '晴午後短暫雷陣雨',
    //         機率: '80%'
    //     },
    //     weather2: {
    //         locationName: '台北市',
    //         date: '11日',
    //         startTime: '下午6:00 ',
    //         time2: '~ ',
    //         endTime: '上午6:00',
    //         img: 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg',
    //         desc: '多雲短暫陣雨',
    //         機率: '40%'
    //     },
    //     weather3: {
    //         locationName: '台北市',
    //         date: '12日',
    //         startTime: '上午6:00 ',
    //         time2: '~ ',
    //         endTime: '下午6:00',
    //         img: 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/22.svg',
    //         desc: '多雲午後短暫雷陣雨',
    //         機率: '40%'
    //     },
    // }





    // function App0811() {
    return (
        <>
            {/* <div className='container'>
                <div className="card">

                    <div className='Date'>{weather.weather1.date}</div>

                    <div className="card-body">
                        <h5 className="card-startTime">{weather.weather1.startTime}</h5>
                        <p className="card-endTime">{weather.weather1.endTime}</p>
                        <img src={weather.weather1.img} className="card-img" alt="..." />
                        <p className='card-desc'>{weather.weather1.desc}</p>
                    </div>

                    <a href={photo.photo1.btnURL} className="btn">{photo.photo1.btnName}</a>
                </div> */}

            <div className='container'>

                <h2>台北市</h2>
                <div className='date'>
                    <h2>11日</h2>
                </div>

                <div className='time'>
                    <p>上午6:00 <br /> ~ <br /></p>
                    <p>下午6:00</p>

                </div>

                <div className='publicPic'>

                    {/* 天氣圖:執行路徑要將圖片放在public資料夾中 */}
                    <img src="./weatherIcon/晴午後多雲短暫陣雨.svg" alt="" />
                </div>

                <div className='name'></div>
                <h2>晴午後短暫雷陣雨</h2>

                <div className='p'>
                    <IoUmbrellaSharp />80%
                </div>





            </div>

        </>
    )
}

export default App