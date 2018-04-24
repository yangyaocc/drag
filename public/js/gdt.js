// 鼠标滚轮
function mouseWheel(obj,upfun,downfun){
    if(obj.addEventListener){
        obj.addEventListener("mousewheel",fn);
        obj.addEventListener("DOMMouseScroll",fn)
    }else{
        obj.attachEvent("onmousewheel",fn);
    }
    function fn(e){
        var ev=e||window.event;
        //鼠标滚轮滚动的方向
        //火狐 ev.detail  向上-3  向下3
        //IE chrome      ev.wheelDelta  向上120 向下-120
        var val=ev.detail||ev.wheelDelta;
        if(val==-3||val==120){
            upfun();
        }else if(val==3||val==-120){
            downfun();
        }
        if(ev.preventDefault){
            ev.preventDefault();
        }else{
            ev.returnValue=false;
        }
    }

};

// 组件


function gdt(a,b,c,d){
    var out=document.querySelector(a)
    var inner=document.querySelector(b)
    var scrollbtn=document.querySelector(c)
    var scrollbar=document.querySelector(d)
    var innerH=inner.offsetHeight;
    var outH=out.offsetHeight;
    // alert(outH);
    var scrollbarH=scrollbar.offsetHeight;
    // alert(scrollbarH);
    var bili=innerH/outH;
    var tops=0;
    var speed=20;
    // console.log(innerH,outH);
    // if(bili<1){
    //     scrollbtn.style.display="none";
    // }
    var scrollbtnH=scrollbarH/bili;
    // scrollbtn.style.height=scrollbtnH+"px";
    var lenH=scrollbarH-scrollbtnH;
    if(bili<=1){
        scrollbar.style.opacity="0";
    }else{
        scrollbar.style.opacity="1";
        scrollbtn.onclick=function (e) {
            var ev=e||window.event;
            if(scrollbtn.stopPropagation){
                ev.stopPropagation();
            }else{
                ev.cancelBubble();
            }
        }
        scrollbtn.onmousedown = function (e) {
            var ev=e||window.event;
            var lenY=ev.clientY-this.offsetTop;
            if(ev.preventDefault){
                ev.preventDefault()
            }else{
                ev.returnValue=false;
            }
            document.onmousemove = function (e) {
                var ev = e || window.event;
                tops = ev.clientY - lenY;
                if(tops<0){
                    tops=0;
                }
                if(tops>lenH){
                    tops=lenH;
                }
                scrollbtn.style.top = tops + "px";
                var innerT=tops*bili;
                inner.style.marginTop=-innerT+"px";
                 
            }
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
        mouseWheel(out,function(){
            tops-=speed;
            setTop()
        },function(){
            tops+=speed;
            setTop()
        })
        scrollbar.onclick=function (e) {
            var ev=e||window.event;
            tops=ev.offsetY;
            setTop()
        }
        document.onkeydown=function (e) {
            var ev=e||event;
            if(ev.keyCode==38){
                tops-=speed;
                setTop()
            }else if(ev.keyCode==40){
                tops+=speed;
                setTop()
            }
        }
        function setTop(){
            if(tops<0){
                tops=0;
            }
            if(tops>=lenH){
                tops=lenH;
            }
            if(out.offsetHeight-inner.offsetHeight >= 0)
            {
                tops=0;
            }
            scrollbtn.style.top=tops+"px";
            inner.style.marginTop=-tops*bili+"px";
        }
    }
};
