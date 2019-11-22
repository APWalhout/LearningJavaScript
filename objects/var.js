//note, var type has depreciated, don't use anymore
//var allows redeclaring variables with the same prototype
//it doesnt notify and just overwrites
//var is function scoped, not block scoped, see below
if (10 === 10) 
{
    var firstName = 'Inoto';
}

console.log(firstName);//contains Inoto as var isn't scoped in blocks, only in functions
//so technically, firstName = Inoto is a global variable, not scoped to the if block
//var does behave as expected scope-wise when in a function's scope

var firstName = 'Alex';
firstName = 'Pete';

var firstName = 'Walhout';//this is allowed with var and it overwrites previous

console.log(firstName);

console.log(age);//doesn't throw an error, assigns undefined as definition
//var declarations get compiled to the top of a script, but the definition gets left behind
var age = 5;