 
window.onload = function(){

    //头部下拉菜单开始
    var middleThrees = document.querySelectorAll(".header-middle-three")
    var headerNavs = document.querySelectorAll(".header-nav")

    for(let i=0;i<middleThrees.length;i++){
        middleThrees[i].onmouseover = function(){
            headerNavs[i].style.height = "auto";
        }
        middleThrees[i].onmouseout = function(){
            headerNavs[i].style.height = "0";         
        }
        headerNavs[i].onmouseout = function(){
            headerNavs[i].style.height = "0";    
        }
    }

    //头部下拉菜单结束


    //嘉宾动画效果
    var Guests_itemBoxs = document.querySelectorAll(".Guests-item-box");
    var Guests_items = document.querySelectorAll(".Guests-item");
    var Guests_itemLines = document.querySelectorAll(".Guests-item-line");
    var Guests_itemDecs = document.querySelectorAll(".Guests-item-dec");
    console.log(Guests_items)
    for(let i=0;i<Guests_items.length;i++){
        Guests_items[i].onmouseover = function(){
            for(var j=0;j<Guests_items.length;j++){
                Guests_itemBoxs[j].style.top = 0;
                Guests_items[j].style.boxShadow = "none";
                Guests_itemLines[j].style.width = "0px";
                Guests_itemDecs[j].style.paddingLeft = "270px"
            }
            Guests_itemBoxs[i].style.top = "-5px";
            Guests_items[i].style.boxShadow = "0 0 20px #cccccc";
            Guests_itemLines[i].style.width = "50px";
            Guests_itemDecs[i].style.paddingLeft = "320px"
        }
        Guests_items[i].onmouseout = function(){
            Guests_itemBoxs[i].style.top = 0;
            Guests_items[i].style.boxShadow = "none";
            Guests_itemLines[i].style.width = "0px";
            Guests_itemDecs[i].style.paddingLeft = "270px";
        }
        
    }



    //嘉宾动画效果结束




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

 }
 