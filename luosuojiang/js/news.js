 
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


    //动态的动画效果和按需加载
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


        //按需加载
        for(let i=0;i<details_length;i++){
            
            if(deatils_box[i].offsetTop-document.documentElement.clientHeight<st){
                deatils_item[i].style.height = "160px";
            }
        }
    }

    var deatils_box = document.querySelectorAll(".news-details-item-box");
    var deatils_title = document.querySelectorAll(".news-details-title");
    var deatils_line = document.querySelectorAll(".news-details-line");
    var deatils_date = document.querySelectorAll(".news-details-date");
    var deatils_bottom = document.querySelectorAll(".news-details-bottom");
    var deatils_item = document.querySelectorAll(".news-details-item");


    var details_length = deatils_box.length

    for(let i=0;i<details_length;i++){
        
        deatils_box[i].onmouseover = function(){
            deatils_title[i].style["padding-left"] = "30px";
            deatils_date[i].style.paddingLeft = "30px";
            deatils_bottom[i].style.paddingLeft = "30px";
            deatils_line[i].style.width = "700px";
        }
        deatils_box[i].onmouseout = function(){

            deatils_title[i].style["padding-left"] = "0";
            deatils_date[i].style.paddingLeft = "0";
            deatils_bottom[i].style.paddingLeft = "0";
            deatils_line[i].style.width = "0";
        }
    }


    // 按需加载
    var st = document.documentElement.scrollTop;
    for(let i=0;i<details_length;i++){
        if(deatils_box[i].offsetTop-document.documentElement.clientHeight<st){
            deatils_item[i].style.height = "160px";
        }
    }
    
    

    //点击选项卡

    var news_tabs = document.querySelectorAll(".news-tabs-item");
    var news_details = document.querySelectorAll(".news-details");

    for(let i=0;i<news_tabs.length;i++){
        news_tabs[i].onclick = function(){
            console.log(i)
            for(var j=0;j<news_tabs.length;j++){
                news_details[j].style.display = "none";
                news_tabs[j].style.background = "#f9f9f9";
                news_tabs[j].style.color = "#aaa";
            }

            news_details[i].style.display = "block";
            news_tabs[i].style.background = "#003c84";
            news_tabs[i].style.color = "#fff";
        }
    }



 }
 