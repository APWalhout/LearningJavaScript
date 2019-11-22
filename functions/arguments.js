let add = function (a, b)
{
    return a + b;//inline return statement
}

let result = add(10, 1);
console.log(result);

//default arguments are given as equivalency in the argument list
let getScoreText = function (name = 'Player1', score = 0)
{
    return 'Name: ' + name + ', Score: ' + score;
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