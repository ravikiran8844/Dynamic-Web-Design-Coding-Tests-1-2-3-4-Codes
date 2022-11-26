let btnEl= document.getElementById("btnEl");
let heading=document.getElementById("heading");

btnEl.onclick=function(){
    heading.classList.remove("old-new-styles")

    heading.classList.add("heading-new-styles")

}