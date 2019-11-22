//global: convertFahrenCelsi, temp1, temp2
    //local: fahrenheit, celsius
        //local: isFreezing

let convertFahrenheitCelsius = function (fahrenheit)
{
    let celsius = (fahrenheit - 32) * 1.8;
    
    if (celsius <= 0)
    {
        let isFreezing = true;
    }

    return celsius;
}

let temp1 = convertFahrenheitCelsius(32);
let temp2 = convertFahrenheitCelsius(68);

console.log(temp1);
console.log(temp2);