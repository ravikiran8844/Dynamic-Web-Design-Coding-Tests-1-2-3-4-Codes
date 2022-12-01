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

  /* Please do not modify anything above this line */

  /* Write your code here */
  let clearArr = [...new Set(myArray)]
  
  
  let duplicates = [...myArray]
  clearArr.forEach((item) => {
      const i = duplicates.indexOf(item)
      duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length))
  })
  if (duplicates.length > 0) {
      for (let i=0; i<duplicates.length; i++) {
          console.log(duplicates[i])}
      }
      else {
          console.log(false)
      }
}


