let myContainer=document.getElementById("myContainer");
let createBtn=document.getElementById("createBtn");
createBtn.onclick=function(){
    let headingEl=document.createElement("h1");
    headingEl.textContent="Main Heading element";
    headingEl.style.color="#0000ff";
    myContainer.appendChild(headingEl);
};