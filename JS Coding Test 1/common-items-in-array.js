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
  let arr1 = JSON.parse(readLine().replace(/'/g, '"'));
  let arr2 = JSON.parse(readLine().replace(/'/g, '"'));
  let arr3 = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */

  /* Write your code here */
let myArr=[]
  arr1.map(e=>{
      if(arr2.includes(e) &&arr3.includes(e))
      myArr.push(e)
  })
  console.log(myArr)
}
