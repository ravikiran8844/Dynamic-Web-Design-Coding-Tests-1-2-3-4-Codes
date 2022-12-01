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
  let value = JSON.parse(readLine());

  /* Please do not modify anything above this line */
 let result=0;
  
  let sum=integers.reduce((prev,cur)=>prev+cur,0);
  
  integers.map(function(ele){
      ele+value>=sum-ele ? result++:"";
  });
  console.log(result)
  
  /* Write your code here and log the output */
}
