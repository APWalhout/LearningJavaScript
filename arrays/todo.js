//create an array of 5 things to do
//print message includes length
//print first and second to last items to console
const todo = ['Take dog to vet','1 mile run','Pick up beans','Put cat in bag','Groceries'];

console.log(`You have ${todo.length} things to do:`);
console.log(`First --> ${todo[0]}`);
console.log(`Penultimate --> ${todo[todo.length - 2]}`);

//challenge area
//delete 3rd item
todo.splice(2,1);
//add new item to end
todo.push('challenge end note');
//remove first item from the list
todo.shift();

console.log(todo);
