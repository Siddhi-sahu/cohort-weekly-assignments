/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
console.log("Minutes: " + minutes + "    Seconds: " + seconds);

let sum = 0;

function calculateTime(n) {
  for (i = 1; i < n + 1; i++) {
    sum = sum + i;
  }
  return sum;
  //   return 0.01;
}

console.log(calculateTime(100000000000));

let minutes2 = new Date().getMinutes();
let seconds2 = new Date().getSeconds();
console.log("Minutes: " + minutes2 + "   Seconds: " + seconds2);
