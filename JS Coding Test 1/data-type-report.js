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
 const data = {
      'number': 0,
      'object': 0,
      'string': 0,
      'boolean': 0
  }
  
for (let e of myArray) {
      if (typeof(e) === 'number') {
          data.number++;
      } else if (typeof(e) === 'object') {
          data.object++
      } else if (typeof(e) === 'string') {
          data.string++
      } else if (typeof(e) === 'boolean') {
          data.boolean++
      }
}
  console.log(data)
}
