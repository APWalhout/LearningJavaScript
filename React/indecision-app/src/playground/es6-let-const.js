var nameVar = 'Pete';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Alex';
nameLet = 'Torov';//can't do let nameLet = , again as crashes in the es5 convert with babel
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//can't even reassign value for a const, obviously use const by default, and only if needing switch to let
console.log('nameConst', nameConst);

function getPetName() 
{
    let petName = 'Hal';
    return petName;
}

console.log(getPetName());

const fullName = 'Alex Walhout';
let firstName;
if (fullName) 
{
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);