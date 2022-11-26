let message=document.getElementById("message");
let onEventListenerBtn=document.getElementById("onEventListenerBtn");
let addEventListenerBtn=document.getElementById("addEventListenerBtn");

function inlineEventListener(){
    message.textContent="Inline event listener";
}

onEventListenerBtn.onclick=function(){
        message.textContent="onevent listener";
};

addEventListenerBtn.addEventListener("click",function(){
        message.textContent="addEventListener";

});