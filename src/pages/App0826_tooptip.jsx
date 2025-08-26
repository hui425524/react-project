import React, { useEffect } from 'react'
import '../css/app0826_tip.css'
import $ from 'jquery'

// 除了public裡以外的資料夾都要import進來
// import img1 from '../images/1.jpg'


function App() {






    useEffect(() => {
    //     $('a:has(.ttpShow)').on('mouseover', function (e) {

    //         $('body').append('<div id="ttpFace">' + $(this).children('.ttpShow').html() + '</div>');
    //         $('#ttpFace').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast'
    //         }).on("mousemove", function (e) {
    //             $("#ttpFace").css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast'
    //         }).on("mouseout", function () {
    //                 $('#ttpFace').remove(); //移除ttpFace

    //             });
        //淡入
        // +座標(10)讓滑鼠不會蓋住ttpShow




        // 讓jquery可以操作DOM


         $(function(){
            // has檢查是否有某個子元素(屬性或名稱)
            // mouseover滑鼠移入
            $('a:has(.ttpShow)').mouseover(function(e){
                // 若有找到.ttpShow => 在body區塊新增一個div id="ttpFace"
                // 取得a標籤裡的ttpShow內容，放到ttpFace
                $('body').append('<div id="ttpFace">'+ $(this).children('.ttpShow').html()+'</div>');
                $('#ttpFace').css({
                    // +座標(10)讓滑鼠不會蓋住ttpShow
                    top: e.pageY + 'px',
                    left: e.pageX + 10
                }).fadeIn('fast') ;//淡入

            }).mousemove(function(e){
                $('#ttpFace').css({
                    top: e.pageY + 'px',
                    left: e.pageX + 10
                });
            })

             }).mouseout(function(){
                // mouseout滑鼠移出
                $('#ttpFace').remove(); //移除ttpFace

        })

        },[]);

    // });

    return (

        <div className="wrap">
            <p>Lorem ipsum dolor sit amet,
                <a href="#"> consectetur <span className="ttpShow"> consectetur內容說明。。。</span></a>
                adipisicing elit. Beatae minus veritatis aut
                ut tempore ea sequi magni ad veniam, non, eum
                voluptatum illum qui quos laborum ducimus, atque a
                obcaecati possimus. Error reprehenderit velit facere voluptates culpa
                labore alias autem, tempora quaerat officia deleniti debitis optio consectetur non quas incidunt illo quo
                mollitia dolores neque voluptatibus! Est reiciendis provident porro, deserunt mollitia molestiae molestias
                necessitatibus doloremque numquam aspernatur fuga perspiciatis magnam aut, error quia accusantium quo qui
                exercitationem, voluptates fugiat. Blanditiis provident vel eos aperiam porro velit aut itaque laudantium
                nesciunt ratione, labore nemo qui earum voluptatibus tempora dolorum, at ipsam enim ea suscipit nulla omnis
                fugit voluptatem. Accusamus iure suscipit facilis odio earum voluptatum soluta officia cupiditate,
                dignissimos fugiat perferendis dolorem sunt quas quam tempore voluptas dolorum nulla! Aliquid nihil
                obcaecati omnis ipsam nulla dolore itaque at voluptatem atque nam, neque mollitia voluptates veritatis
                aliquam soluta quibusdam cumque illo inventore libero, impedit blanditiis quisquam! Possimus enim soluta hic
                voluptatibus eaque, est quos deleniti quidem obcaecati, explicabo doloribus voluptas totam nihil cupiditate
                perspiciatis amet autem quas maxime labore. Aut error earum, possimus ducimus asperiores nesciunt sunt
                veritatis quidem nemo numquam soluta porro alias fugiat eligendi eos, est odit hic maiores! Iure eos sed ea
                similique commodi, enim quam. Obcaecati, repellendus nam illum nemo id enim numquam voluptatibus similique
                ullam asperiores ex voluptate magnam,
                <a href="#">aspernatur<span className="ttpShow">aspernatur內容說明。。。。</span></a> doloremque quia sed, quo unde fugiat neque qui temporibus!
                Modi in molestias alias error illum velit veniam, assumenda corrupti qui iste, nesciunt saepe fugiat
                voluptate doloribus expedita recusandae dolore sit autem ab, quo quasi quis! Voluptates et provident
                laboriosam? Illum omnis quasi tempore, aliquid cumque distinctio soluta! Consequuntur laboriosam recusandae
                nemo est repellat totam corporis laudantium ipsam provident exercitationem eaque sit eum, modi dignissimos
                maiores vel aperiam atque fuga iure vitae maxime! Dicta aliquam modi quidem?</p>




        </div>
    )
}

export default App