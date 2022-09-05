$(function () {


    // top_pop 슬라이드 기능 ----------------------------------
    $('.top_pop button').click(function(){
        $('.top_pop').hide()
    })





    // main_visual 슬라이드 기능 ----------------------------------
    let reset = 0
    let idx = $('.slide li').length - 1
    // console.log(idx) 4
    
    let intv = setInterval(nextAni, 3000)
    
    function nextAni() {
        reset++
        if (reset > idx) {
            reset = 0
        }
        $('.slide li').removeClass('on')
        $('.slide li').eq(reset).addClass('on')
        
        $('.sum_box h5').removeClass('on')
        $('.sum_box h5').eq(reset).addClass('on')
        
        $('.dot_con span').removeClass('on')
        $('.dot_con span').eq(reset).addClass('on')
        
    }
    
    $('.sum_box>h5, .dot_con>span').click(function () {
        clearInterval(intv)
        let num = $(this).index()
        clickAni(num)
        intv = setInterval(nextAni, 3000)
    })
    
    function clickAni(cNum) {
        $('.slide>li').removeClass('on')
        $('.slide>li').eq(cNum).addClass('on')
        
        $('.sum_box h5').removeClass('on')
        $('.sum_box h5').eq(cNum).addClass('on')
        
        $('.dot_con span').removeClass('on')
        $('.dot_con span').eq(cNum).addClass('on')
    }
    

    



    // top_pop 슬라이드 기능 ----------------------------------




})