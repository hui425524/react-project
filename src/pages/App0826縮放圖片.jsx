import React, { useEffect } from 'react'
import $ from 'jquery'
import '../css/app0826.css'



const App = () => {
  useEffect(() => {
    // 先顯示構建再監聽(使用useEffect)


    // 當滑鼠碰到圖片，放大圖片
    $('.zoom').on('mouseover', function () {
      $(this).addClass('imgScale');

      // 
    })
    // 當滑鼠離開圖片，還原圖片
    $('.zoom').on('mouseout', function () {
      $('.zoom').removeClass('imgScale');
    })

  },[])
  // 如果使用空陣列 部會因為結構更改而改變，會在需要時監聽



  return (
    <div>
      <h1>UseEffect</h1>
      <h2>圖片縮放</h2>

      <a href="#" className='zoom'>

        <img src="./images/1.png" alt="" />
      </a>


    </div>
  )
}

export default App