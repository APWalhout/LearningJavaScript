//boolean evaluators
//=== not ==
//!== not !=
//<, >, <=, >=, why not <==? WTF
let temp = 31;
let isFreezing = temp !== 32;//why is === equal and not ==???
isFreezing = temp <= 32;

console.log(isFreezing);

//challenge:
let isChild = false;
let isSenior = true;
let age = 66;

isChild = age < 8;
isSenior = age > 64;

console.log('Children Discount: ' + isChild);
console.log('Senior Discount: ' + isSenior);