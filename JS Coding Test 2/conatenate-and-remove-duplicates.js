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
  let arr1 = JSON.parse(readLine());
  let arr2 = JSON.parse(readLine());

  /* Please do not modify anything above this line */

  /* Write your code here and log the output */
 const newArr = Array.from(new Set(arr1.concat(arr2))).sort();
console.log(newArr);
}