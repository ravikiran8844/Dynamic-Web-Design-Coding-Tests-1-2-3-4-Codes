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
  let sportsData = JSON.parse(readLine().replace(/'/g, '"'));

  /* Please do not modify anything above this line */

  /* Write your code here */  
  const myObj={};
  sportsData.map(e=>{
      myObj[e[0]]=e[1];
      
  });
  console.log(myObj)

}
