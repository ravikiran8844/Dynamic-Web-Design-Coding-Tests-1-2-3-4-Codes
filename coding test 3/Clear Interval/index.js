let clearCount=document.getElementById("clearCount");
let counter=document.getElementById("counter");
let count=0;
let counterId=setInterval(function(){
    count+=1;
    counter.textContent=count;
},1000);

clearCount.onclick=function(){
    clearInterval(counterId);
}