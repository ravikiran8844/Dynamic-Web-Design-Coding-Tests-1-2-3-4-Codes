let sbmtBtn=document.getElementById("sbmtBtn");
let message=document.getElementById("message");
let lucknow=document.getElementById("lucknow");
let agra=document.getElementById("agra");
let varanasi=document.getElementById("varanasi");
let favPlaces=document.getElementById("favPlaces");

favPlaces.addEventListener("submit",function(event){
    event.preventDefault();
});

sbmtBtn.onclick=function(){
    if(lucknow.checked){
        message.textContent="Your favourite place is: Lucknow";
    }
    else if (agra.checked){
        message.textContent="Your favourite place is: Agra";
    }
    else if (varanasi.checked){
        message.textContent="Your favourite place is: Varanasi";
    }
};