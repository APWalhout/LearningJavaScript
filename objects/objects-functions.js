let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 362
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//an object function, accepts an object and does something with its properties
let getSummary = function (book)
{
    return { //inline definition of object
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    //console.log(`${book.title} by ${book.author}.`);
}

//note, need to have error catches for getSummary()
let bookSummary = getSummary(myBook);//passing back an object so returning multiple types/values
let otherSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//challenge area:
//create function - accept fahrenheit, return object with all three conversions
let tempConversion = function(fahrenheit)
{
    //do math
    //calculate celsius
    let celsius = (fahrenheit - 32)/1.8;
    //calculate kelvin
    let kelvin = celsius + 273.15;
    //return all conversions
    return {
        fahrenheit: `Fahrenheit temperature is ${fahrenheit}.`,
        celsius: `${fahrenheit} Fahrenheit is ${celsius} in Celsius.`,
        kelvin: `${fahrenheit} Fahrenheit is ${kelvin} in Kelvin.`
    }
}

let temp72 = tempConversion(72);

console.log(temp72.kelvin);
console.log(temp72.celsius);

//test
console.log(tempConversion(72).fahrenheit);//this also works to access return values