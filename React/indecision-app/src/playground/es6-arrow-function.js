const square = function (x) 
{
    return x*x;
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
const squareArrow = (x) => x*x;

console.log(square(8));
console.log(squareArrow(5));

//challenge
const getFirstName = (x) => x.split(' ')[0];
const name = 'Alex Walhout';

console.log(getFirstName(name));