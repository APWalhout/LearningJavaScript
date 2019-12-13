//arguments object is no longer bound with arrow functions

const add = function (a, b)
{
    console.log(arguments);
    return a + b;
};
console.log(add(55,1001));

const addArrow = (a,b) => 
{
    //console.log(arguments) no longer works
    a + b;
}

//this keyword is also no longer bound with arrow functions

const user = {
    name: 'Alex',
    cities: ['Seattle', 'Kalamazoo', 'Virginia Beach'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const workAround = this;

        this.cities.forEach(function (city){//this is an anonymous function that has no this keyword bound to the object
            console.log(workAround.name + ' has lived in ' + city);
        })

    }
};
user.printPlacesLived();

//using arrow functions allows foregoing of workAround
//since arrow functions don't bind a this object, the reference goes to the parent object (?)
//if printPlacesLived were an arrow function, it couldn't have a this, meaning the forEach wouldn't work as this would be undefined
const user2 = {
    name: 'Alex',
    cities: ['Seattle', 'Kalamazoo', 'Virginia Beach'],
    printPlacesLived() {//this is not an arrow function, this is es6 function syntax
        const cityMessages = this.cities.map((city) => {//map allows transformations of the array
            //!!!!MAP does NOT change the existing array!
            return this.name + ' has lived in ' + city + '!';//the concatenation is allowed by using map
        });
        return cityMessages;

        //this.cities.forEach((city) => {//this is an anonymous function that has no this keyword bound to the object
        //    console.log(this.name + ' has lived in ' + city);
        //})

    }
};
console.log(user2.printPlacesLived());

//challenge area
const multiplier = {
    numbers: [3, 6, 9],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());