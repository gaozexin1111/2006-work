 
window.onload = function(){

    //头部下拉菜单开始
    var middleThrees = document.querySelectorAll(".header-middle-three")
    var headerNavs = document.querySelectorAll(".header-nav")

    for(let i=0;i<middleThrees.length;i++){
        middleThrees[i].onmouseover = function(){
            headerNavs[i].style.height = "auto";
            wheelBox.style["z-index"] = -1;

        }
        middleThrees[i].onmouseout = function(){
            headerNavs[i].style.height = "0";
            wheelBox.style["z-index"] = 0;
        }
        headerNavs[i].onmouseout = function(){
            headerNavs[i].style.height = "0";
            wheelBox.setAttribute("z-index",0);
        }
    }

    //头部下拉菜单结束



    // 轮播图开始
    
    var wheelItems = document.querySelectorAll(".wheel-item");
    var wheel_btnsLeft = document.querySelector(".btns-left");
    var wheel_btnsRight = document.querySelector(".btns-right")

    var wheelBox = document.querySelector(".wheel-box");
    var wheel_length = wheelItems.length;
    var wheel_num = 0;
    //轮播图实现
    function wheel_run(){
        wheel_num++;
        for(var i=0;i<wheel_length;i++){
            wheelItems[i].style.display = "none";
        }
        wheelItems[Math.abs(wheel_num%wheel_length)].style.display = "block"
    }

    var wheel_t = setInterval(wheel_run, 2000);


    //鼠标触摸暂停
    wheelBox.onmouseover = function(){
        clearInterval(wheel_t);
        wheel_btnsLeft.style.opacity = 0.7;
        wheel_btnsRight.style.opacity = 0.7;

    }

    wheelBox.onmouseout = function(){
        wheel_t = setInterval(wheel_run,2000);
        wheel_btnsLeft.style.opacity = 0;
        wheel_btnsRight.style.opacity = 0;
    }

    //按钮控制
    wheel_btnsLeft.onclick = function(){
        wheel_num--;
        for(var i=0;i<wheel_length;i++){
            wheelItems[i].style.display = "none";
        }
        wheelItems[Math.abs(wheel_num%wheel_length)].style.display = "block"
    }

    wheel_btnsRight.onclick = function(){
        wheel_num++;
        for(var i=0;i<wheel_length;i++){
            wheelItems[i].style.display = "none";
        }
        wheelItems[Math.abs(wheel_num%wheel_length)].style.display = "block"
    }
    // 轮播图结束

    //背景改变开始
           
    // $(".dynamic-left").mouseenter(function(){
    //     $(".dynamic-left-mask").css({"background":"#11228a","height":this.offsetHeight})
    // });
    

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
 