let num = 1011.1011;

//allows you to trim floats to significant digits
//can be found by searching mdn number in the mozilla documention
//mdn Math is also important, Math is built in library
console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//Math.random() generates a random number between [0 and 1) 
//this number can be used as a percent for other values 
//we want random nums between

let min = 12;
let max = 22;
let rng = Math.floor(Math.random() * (max - min +1)) + min;
//0-10, would be 10.999999 if not for floor, the +1 allows to include the tenth number
console.log(rng);

//challenge area:
//guess 1-5 true if correct false if not

let guess = function (num)
{
    //could use ceil and set the * num = max desired included value
    return num === Math.floor(Math.random() * 6);
}

console.log(guess(2));
