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

//challenge area:
let convertFahrenheitCelsius = function(fahrenheit)
{
    let celsius = (fahrenheit - 32) / 1.8;

    return celsius;
}

console.log('Conversion of 45 degrees F: ' + convertFahrenheitCelsius(45));
console.log('Conversion of 32 degrees F: ' + convertFahrenheitCelsius(32));
console.log('Conversion of 120 degrees F: ' + convertFahrenheitCelsius(120));