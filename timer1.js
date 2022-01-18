const input = process.argv;
const timerNumbers = input.splice(2, input.length);
let newNumbers = [];
if (timerNumbers.length === 0) {
  return;   
}
for (const i of timerNumbers) {
  if (typeof i === Number || i >= 0) {
    newNumbers.push(i);
  }
}
newNumbers.sort(function(a, b) {
  return a - b;
});

console.log("this is the current array after sorting", newNumbers);

let timeToBeep;
let timeElapsed = 0; 
for (const num of newNumbers) {
  console.log(num);
  setTimeout(() => {
    process.stdout.write('\x07');
    timeElapsed += num * 1000;
      }, timeToBeep = 1000 * num - timeElapsed)
};