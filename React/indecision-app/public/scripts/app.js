'use strict';

var square = function square(x) {
    return x * x;
};

//an es6 arrow function, they are always anonymous
//normal funcs can be assigned function square(x) {etc}
//but arrow functions are assigned to a variable if you want to reference them
//an arrow function is just (x) =>
//const squareArrow = (x) => 
//{
//    return x*x;
//}

//a REAL arrow function's use is in quick returns so for getters and setters
//implicit returns in expression syntax
//if you have to wait on promises and other things, you'd want a full function
//reading is a bit tricky unless familiar
var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(square(8));
console.log(squareArrow(5));

//challenge
var getFirstName = function getFirstName(x) {
    return x.split(' ')[0];
};
var name = 'Alex Walhout';

console.log(getFirstName(name));
