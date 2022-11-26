let counterValue = document.getElementById("counterValue");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let counter = 0;

function onIncrement(){
       if (counter % 2 === 0) {
        counter = counter + 5;
        counterValue.textContent = counter;
    } else if (counter % 2 !== 0) {
        counter = counter + 10;
        counterValue.textContent = counter;
    }
}

function onReset(){
    counter=0;
    counterValue.textContent = counter;
}
function onDecrement(){
    if (counter % 2 === 0) {
        counter = counter - 2;
        counterValue.textContent = counter;
    } else if (counter % 2 !== 0) {
        counter = counter - 1;
        counterValue.textContent = counter;
    }

}