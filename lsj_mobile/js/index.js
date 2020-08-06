$(function(){
    // 轮播图动画开始
    var wheel_num = 100;
    var wheel_box = document.querySelector(".wheel-box")
    var wheel_items = document.querySelectorAll(".wheel-item");
    var wheel_length = wheel_items.length;
    var clientW = document.documentElement.clientWidth;
    //自动播放
    function wheel_move(){
        wheel_num++;
        for(var i=0;i<wheel_length;i++){
            wheel_num++;
            for(var j=0;j<wheel_length;j++){
                wheel_items[j].style.display = "none";
            }
            wheel_items[wheel_num%wheel_length].style.display = "block";
        }
    }
    
    var sheel_t = setInterval(wheel_move,5000)

    //手指触摸
    $(".wheel-btns-left").click(function() {
        wheel_num-=2;
        wheel_move();
    });
    $(".wheel-btns-right").click(wheel_move);
    //滑动改变
    var wheel_hammer = new Hammer(wheel_box);
    wheel_hammer.on("panend",function(ev){
        if(ev.distance<50){
            return ;
        }else{
            if(ev.offsetDirection == 2){
                wheel_num-=2;
                wheel_move();
            }else if(ev.offsetDirection == 4){
                wheel_move();
            }
        }
        
    })
    // 轮播图动画结束
})