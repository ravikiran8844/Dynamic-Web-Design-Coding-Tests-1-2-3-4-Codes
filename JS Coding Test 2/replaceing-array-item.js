"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let targetItem = JSON.parse(readLine().replace(/'/g, '"'));
  let replaceItem = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */
for(let i=0; i<myArray.length; i++){
      if(myArray[i]===targetItem){
          myArray[i]=replaceItem;
          break;
      }
  }
  console.log(myArray)
  /* Write your code here and log the output */
}
