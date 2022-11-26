let nameEl=document.getElementById("name");
let inputValue=document.getElementById("inputValue");
let saveBtn=document.getElementById("saveBtn");
let resetBtn=document.getElementById("resetBtn");

nameEl.textContent="Varun";
nameEl.textContent=localStorage.getItem("name",inputValue.value);

let storedValue=localStorage.setItem("name",inputValue.value);
saveBtn.onclick=function(){
    nameEl.textContent=inputValue.value;
    let storedValue=localStorage.setItem("name",inputValue.value);
};

resetBtn.onclick=function(){
    localStorage.removeItem("name");
    nameEl.textContent="Varun"
};