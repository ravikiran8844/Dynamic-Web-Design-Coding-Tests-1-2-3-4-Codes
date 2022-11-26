let carBrands = ["Benz", "Ferrari", "Audi", "BMW"];
let listContainer=document.getElementById("listContainer");

function appendCars(){
    for (let eachItem of carBrands){
        let listItem=document.createElement("li");
        listItem.textContent=eachItem;
        listContainer.appendChild(listItem);
    }
}

appendCars();