let add = function (a, b)
{
    return a + b;//inline return statement
}

let result = add(10, 1);
console.log(result);

//default arguments are given as equivalency in the argument list
let getScoreText = function (name = 'Player1', score = 0)
{
    console.log(name);
    console.log(score);
}

getScoreText();