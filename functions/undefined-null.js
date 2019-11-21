let name = 'Alex';

console.log(name);

let pet;//declared, but not defined

//console.log(pet);//undefined error

//error catch
if (pet === undefined)
{
    console.log('variable undefined');
} else {
    console.log(pet);
}

let square = function (num)
{
    console.log(num);
}

let result = square();//num is set to undefined so throws error
console.log(result);//square has no return, so throws undefined error

//null as assigned clear value.
let age = 23;

age = undefined;//clears a value, but any thrown errors give no context as to deliberate or dev error
age = null;//clearly gives context for why this value is cleared. never clear a value with undefined, use null

console.log(age);