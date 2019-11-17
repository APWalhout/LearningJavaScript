//boolean evaluators
//=== not ==
//!== not !=
//<, >, <=, >=, why not <==? WTF
let temp = 31;
let isFreezing = temp !== 32;//why is === equal and not ==???
isFreezing = temp <= 32;

if (isFreezing) 
{
    console.log('It is Freezing');
}

if (temp > 90)
{
    console.log('It is too hot to exist');
}

console.log(isFreezing);

//challenge:
let isChild = false;
let isSenior = true;
let age = 66;

isChild = age < 8;
isSenior = age > 64;

if (isChild)
{
    console.log('You will get the Children discount');
}

if (isSenior)
{
    console.log('You will get the Senior discount');
}