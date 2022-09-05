$(function () {

    // 슬라이드 자동으로 이미지가 페이드인되면서 다음 슬라이드가 보인다.
    // setInterval(function(){
    //     $('.slide>li').eq(0)
    // }, 2000)



    // 슬라이드가 자동으로 넘어가면서 
    //   옆에 썸네일 글씨가 굵어지고 색깔이 바뀐다.
    //   또 옆에 썸네일 뒷배경에 태그 이미지가 생긴다.


    // 원하는 썸네일을 클릭했을때 그 슬라이드와 썸네일이 활성화된다.






    //slide------------------------------------
    $('.slide>li:gt(0)').hide()
    setInterval(function () {
        $('.slide>li:first').fadeOut(1500).next().fadeIn(1500)
        $('.slide>li:first').appendTo('.slide')
    }, 3000)


    //sum_box----------------------------------
    setInterval(function () {
        $('.sum_box>h5').removeClass('on').next().addClass('on')
    }, 3000)







    // -모바일로 변했을 때 
    // 썸네일이 사라지면서 하단에 pager 생기고
    // 순서에 맞게 활성화 되었으면 좋겠음



})