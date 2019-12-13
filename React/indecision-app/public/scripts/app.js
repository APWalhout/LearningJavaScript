'use strict';

//arguments object is no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 1001));

var addArrow = function addArrow(a, b) {
    //console.log(arguments) no longer works
    a + b;
};

//this keyword is also no longer bound with arrow functions

var user = {
    name: 'Alex',
    cities: ['Seattle', 'Kalamazoo', 'Virginia Beach'],
    printPlacesLived: function printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        var workAround = this;

        this.cities.forEach(function (city) {
            //this is an anonymous function that has no this keyword bound to the object
            console.log(workAround.name + ' has lived in ' + city);
        });
    }
};
user.printPlacesLived();

//using arrow functions allows foregoing of workAround
//since arrow functions don't bind a this object, the reference goes to the parent object (?)
//if printPlacesLived were an arrow function, it couldn't have a this, meaning the forEach wouldn't work as this would be undefined
var user2 = {
    name: 'Alex',
    cities: ['Seattle', 'Kalamazoo', 'Virginia Beach'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //this is not an arrow function, this is es6 function syntax
        var cityMessages = this.cities.map(function (city) {
            //map allows transformations of the array
            //!!!!MAP does NOT change the existing array!
            return _this.name + ' has lived in ' + city + '!'; //the concatenation is allowed by using map
        });
        return cityMessages;

        //this.cities.forEach((city) => {//this is an anonymous function that has no this keyword bound to the object
        //    console.log(this.name + ' has lived in ' + city);
        //})
    }
};
console.log(user2.printPlacesLived());

//challenge area
var multiplier = {
    numbers: [3, 6, 9],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
