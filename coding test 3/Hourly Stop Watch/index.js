let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");
let startBtn=document.getElementById("startBtn");
let stopBtn=document.getElementById("stopBtn");
let startCount;
let minCount=0;
let secCount=0;
startBtn.onclick=function(){
    startCount=setInterval(function(){
        secCount+=1;
        if(secCount<10){
            seconds.textContent="0" + secCount;
        }
        else{
            seconds.textContent=secCount;
        }
        if(secCount===60){
            secCount=0;
            minCount+=1;
            minutes.textContent=minCount;
        }
    },1000);
};

stopBtn.onclick=function(){
    clearInterval(startCount);
    // minutes.textContent="00";
    // seconds.textContent="00";
}