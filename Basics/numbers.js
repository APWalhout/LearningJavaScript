let x = 12;
x = x * 2 + (3/4);

let num = 11;
num += 5;
num *= 2;
num /= 4;

let age = 22;
let dogYears = (age + 1)/7;

console.log('x: ' + x);
console.log('num: ' + num);
console.log('My age in Dog Years: ' + dogYears);

//challenge:
let questionsTotal = 183;
let questionsWrong = 23;
//score and percentage could be combined, but this allows more flexibility. same with having questions wrong instead of those right
let score = (questionsTotal - questionsWrong) / questionsTotal;
let percentage = score * 100;

console.log('Questions wrong: ' + questionsWrong + ' out of ' + questionsTotal);
console.log('Score: ' + percentage);