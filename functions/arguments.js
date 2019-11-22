let add = function (a, b)
{
    return a + b;//inline return statement
}

let result = add(10, 1);
console.log(result);

//default arguments are given as equivalency in the argument list
let getScoreText = function (name = 'Player1', score = 0)
{
    return `'Name: ${name}, Score: ${score}`;
}

console.log(getScoreText(undefined, 99));//the first argument set to undefined allows the default to fall through

//challenge area:
//tip calculator
let tipCalc = function (totalBill, tipPercent = .15)
{
    return totalBill * tipPercent;
}

console.log('Tip ammount: ' + tipCalc(37.65, .2));
console.log('Tip ammount: ' + tipCalc(37.65));

//string templates discussion
console.log("Alex");//double quotes can be used for all strings, don't use combos of ' and ""
//could do "Alex" + 'Walhout'. cant open with ' and close with ". Pick one and stick with it.

let name = 'Alex';
let age = 23;
//string template: note the ``
console.log(`Hi, my name is ${name}! I am ${age} years old.`);//string injection
//string templates are easier to read and rearrange.