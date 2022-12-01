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
myArray.sort()
  /* Please do not modify anything above this line */
let res = [];
  
  myArray.sort();
  
  myArray.map(item => {
      if (item % 2 == 0 && item % 3 == 0 && res.length < 1) {
          res.push(item);
      }
  })
  if (res.length > 0) {
      console.log(res[0]);
  } else {
      console.log('undefined');
  }

  /* Write your code here and log the output */
}
