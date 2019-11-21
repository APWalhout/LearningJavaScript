let greetUser = function ()
{
    console.log('Welcome User');//cue tron music
}

greetUser();

let square = function (num)
{
    //method 1
    num *= num;
    console.log(num);
    //method 2
    let result = num * num;//preserves data
    return result;//actually passes the data along
}

let num = 3;
square(num);
console.log('Calling function result below: ');
console.log(square(num));