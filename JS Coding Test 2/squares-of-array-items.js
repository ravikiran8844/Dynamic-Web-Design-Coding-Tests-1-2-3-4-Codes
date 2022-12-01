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
  let myArray = JSON.parse(readLine());

let res = [];
  
  myArray.forEach(item=> {
      if (typeof item === 'number') {
          res.push(item ** 2);
      } else {
          let arr = [];
          
          if (item.length < 2) {
              arr.push(item ** 2);
          } else {
              item.forEach(n => arr.push(n ** 2));
          }
          
          res.push(arr);
      }
  })
  
  console.log(res);
}
  /* Please do not modify anything above this line */

  /* Write your code here and log the output */

