let userInput=document.getElementById("userInput");
let keydownCounter=document.getElementById("keydownCounter");
let keydownCode=document.getElementById("keydownCode");
let count=0;
userInput.addEventListener("keydown",function(event){
    count+=1;
    keydownCounter.textContent=count;
    keydownCode.textContent=event.keyCode;
});