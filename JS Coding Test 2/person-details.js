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
  let person = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */
  let personAddress=`${person.name} is from ${person.address.city}, ${person.address.state}`
  console.log(personAddress);
  let nickNames=`${person.name} has ${person.nickNames.length} nicknames`;
  /* Write your code here and log the output */
  console.log(nickNames);
}

