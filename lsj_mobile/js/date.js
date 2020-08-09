$(function(){

    //点击之后，导航页面显示
    $(".banner").click(function(){
        $(".banner-page").css("width","7.5rem");
    })

    $(".false-box").click(function(){
        $(".banner-page").css("width","0");
        $(".date-page").css("width","0");
        $(".special-page").css("width","0");
    })

    $(".date-item").click(function(){
        $(".date-page").css("width","7.5rem");
    })
    $(".special-item").click(function(){
        $(".special-page").css("width","7.5rem");
    })
    $(".return").click(function(){
        $(".date-page").css("width","0");
        $(".special-page").css("width","0");
    })
    
})