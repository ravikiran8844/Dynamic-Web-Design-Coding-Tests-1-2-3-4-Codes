let myContainer=document.getElementById("myContainer");

let checkboxEl=document.createElement("input");
checkboxEl.type="checkbox";
checkboxEl.id="myCheckbox";
checkboxEl.checked;
let labelEl=document.createElement("label");
labelEl.textContent="Color the heading element";
labelEl.setAttribute("for","myCheckbox");
myContainer.appendChild(checkboxEl);
myContainer.appendChild(labelEl);

let headingEl=document.createElement("h1");
headingEl.textContent="heading Element";
myContainer.appendChild(headingEl);

checkboxEl.onclick=function(){
    headingEl.classList.toggle("heading");
    labelEl.textContent="Uncolor thr heading element";
}