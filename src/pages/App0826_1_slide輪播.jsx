import React, { useEffect, useState } from 'react'
import '../css/app0826_slide.css'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

export default function App() {

  const [nowIndex, setNowIndex] = useState(0);
  // 建立輪播圖片陣列物件
  const slides = [
    { url: './images/1.jpg' },
    { url: './images/1.png' },
    { url: './images/2.png' },
    { url: './images/3.png' },
  ]

  // 當nowIndex會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫一次nextSlide函式
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    // 每3秒移除autoplay，這樣才能取得最新的索引編號
    return () => clearInterval(autoplay);
  }, [nowIndex]);



  // 這邊是為了切換圖片位置

  // 下一張
  const nextSlide = () => {
    // 取得總長度，先看是不是最後一張，如果是，就回到第一張；反之往下走+1
    setNowIndex((preSlide) => (preSlide === slides.length - 1 ? 0 : preSlide + 1))
    // nowIndex === slides.length - 1 ? 0 : nowIndex + 1
  }
  // 上一張
  const preSlide = () => {
    setNowIndex((preSlide) => (preSlide === 0 ? slides.length - 1 : preSlide - 1))
    // 取得目前位置，先看是不是第一張，如果是，就回到最後一張；反之往前走-1
    // nowIndex === 0 ? slides.length - 1 : nowIndex - 1
  }






// 按鈕一般在圖片上
// 建立左右icon元件
const Arrow = ({ direction, onClick }) => {
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      [direction]: "20px",
      color: "#0e0d0dff",
      // backgroundColor: "#ccc",

      cursor: "pointer",
    }}>

      {direction === "left" ? (
        <MdArrowBackIosNew size={50} onClick={onClick} />
      ) : (<MdArrowForwardIos size={50} onClick={onClick} />)
      }

    </div>

  )
}



return (
  <>
  
   {/* 滿版最外層 */}
  <div className='wrap' style={{

    maxWidth: "100vw",
    height: "100vh",
    margin: " auto",
  }}>
    {/* 滿版背景輪播區 */}

    <div style={{

      backgroundImage: `url(${slides[nowIndex].url})`,
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      margin: "auto"
    }} >

      {/* 文字區 */}

      <h2 style={{ color: "red" }}>{slides[nowIndex].title}</h2>

      {/* 左邊 */}
      <Arrow direction="left" onClick={preSlide} />

      <Arrow direction="right" onClick={nextSlide} />

    </div>



  </div>
  </>
)
}


// export default App