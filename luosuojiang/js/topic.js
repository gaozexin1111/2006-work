 
window.onload = function(){

    //头部下拉菜单开始
    var middleThrees = document.querySelectorAll(".header-middle-three")
    var headerNavs = document.querySelectorAll(".header-nav")

    var topWheelBox = document.querySelector(".topic-wheel-top")

    for(let i=0;i<middleThrees.length;i++){
        middleThrees[i].onmouseover = function(){
            headerNavs[i].style.height = "auto";
            topWheelBox.style.zIndex = "-1"
        }
        middleThrees[i].onmouseout = function(){
            headerNavs[i].style.height = "0";
            topWheelBox.style.zIndex = "1"         
        }
        headerNavs[i].onmouseout = function(){
            headerNavs[i].style.height = "0";    
            topWheelBox.style.zIndex = "1"
        }
    }

    //头部下拉菜单结束






    //活动导航栏
    var sport = document.querySelector(".sport");
    window.onscroll = function(){
        var st = document.documentElement.scrollTop;
        if(st>=67){
            sport.style.top = 0
        }else{
            sport.style.top = "-150px";
        }

        if(st>=500){
            go.style.display = "block";
        }else{
            go.style.display = "none";
        }
    }


    var sport_li = document.querySelectorAll(".sport-li")
    var sportNavs = document.querySelectorAll(".sport-nav")

    for(let i=0;i<sport_li.length;i++){
        sport_li[i].onmouseover = function(){
            sportNavs[i].style.display = "block";
        }
        sport_li[i].onmouseout = function(){
            sportNavs[i].style.display = "none";
        }
        sportNavs[i].onmouseout = function(){
            sportNavs[i].style.display = "none";
        }
    }

    //返回顶部
    var go = document.querySelector(".go");
    go.onclick = function(){
        animate(document.documentElement,{
            scrollTop:0
        },500)
    }

    // 主题顶部轮播图
    var topWheel = document.querySelectorAll(".topic-wheel-top-item");
    var topWheel_num = 0;
    function topWheel_move(){
        for(var i=0;i<topWheel.length;i++){
            topWheel[i].style.display = "none";
        }
        topWheel[topWheel_num%topWheel.length].style.display = "block";
        topWheel_num++;
    }

    setInterval(topWheel_move,3000);
    //改变嘉宾的背景
    var guestsItems = document.querySelectorAll(".guests-item");
    var guestsItems_title = document.querySelectorAll(".guests-item-title")
    var guestsItems_middle = document.querySelectorAll(".guests-item-middle")
    var guestsItems_bottom = document.querySelectorAll(".guests-item-bottom")

    for(let guests_i=0;guests_i<guestsItems.length;guests_i++){
        guestsItems[guests_i].onmouseover = function(){
            guestsItems[guests_i].style.top = "-10px";
            guestsItems[guests_i].style.background = "#fff";
            guestsItems_title[guests_i].style.color = "#494949";
            guestsItems_middle[guests_i].style.color = "#494949";
            guestsItems_bottom[guests_i].style.color = "#B2B2B2";
        }
        guestsItems[guests_i].onmouseout = function(){
            guestsItems[guests_i].style.top = "0";
            guestsItems[guests_i].style.background = "none";
            guestsItems_title[guests_i].style.color = "#fff";
            guestsItems_middle[guests_i].style.color = "#bababa";
            guestsItems_bottom[guests_i].style.color = "#ededed";
        }
        
    }

 }
 