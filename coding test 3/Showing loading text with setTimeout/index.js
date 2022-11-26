let button=document.getElementById("button");

button.onclick=function(){
    button.textContent="Loading";
    setTimeout(function(){
        button.textContent="Shows Loading for 1 sec";
    },1000);
}