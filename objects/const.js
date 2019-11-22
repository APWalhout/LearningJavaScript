let isRaining = true;

isRaining = false;

console.log(isRaining);

const canRain = true;//makes a varaible in the same way let does, but it protects data integrity

//canRain = false; //can't do this, cant reassign a const

console.log(canRain);

const person = {
    age: 23
}

//person = {};//this fails as can't reassign, but can still access properties and give properties new values