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
  if(integers.length>0){
      let res=integers[0].toString();
      let buf=integers[0];
      for(let i =1 ; i<integers.length; i++){
          res+=" * " + integers[i].toString();
          buf*=integers[i];
      }
      console.log(res+" = " + buf)
  }
  

  /* Write your code here and log the output */
}
