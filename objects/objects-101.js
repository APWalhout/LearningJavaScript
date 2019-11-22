let myBook = {//object declaration: let myObject = {} sorta like a struct
    //property definitions
    title: '1984',
    author: 'George Orwell',
    pageCount: 362//no ; on the last one, } ends the statement
}

console.log(myBook);//spits out low level toString of object
console.log(myBook.title);//uses dot notation for property access

console.log(`${myBook.title} by ${myBook.author}`);

//changing the book title like a setter, note, no data protection yet!!!!
myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}`);

//challenge area:
let person = {
    name: 'Alex',
    age: 23,
    location: 'Seattle',
    birthMonth: 'May'
}

console.log(`${person.name} is ${person.age}, and lives in ${person.location}.`);
person.age = person.age + 1;
console.log(`${person.name} will be ${person.age} in ${person.birthMonth}.`);