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
  let integers = JSON.parse(readLine());

  /* Please do not modify anything above this line */

  /* Write your code here */
    const cumulativeSum = arr=>arr.map((sum=>value=>sum+=value)(0))
  console.log(cumulativeSum(integers));
}

