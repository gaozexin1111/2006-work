 
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
 