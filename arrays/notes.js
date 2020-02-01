const notes = ['Note 1', 'Note 2', 'Note 3'];//note that array items can be of mixed types in JS

notes.push('My new note');

console.log(notes.length);//remember documentation on mdn array
console.log(notes);//indices start at 0 as they should!
//note that accessing out of bounds indices doesn't crash or error, it simply returns undefined

notes.pop();//produces the popped object as a return

console.log(notes);

notes.shift();//pops at front

console.log(notes);

notes.unshift('My first note');//pushes front

console.log(notes);

notes.splice(1,1);//first argument is which item to start at, second argument is the number of things wished to be removed
//the third argument adds an item at the index and shoves everything after it down one index
notes.splice(1,0, 'my mid note');//this line doesn't remove an item, just adds. could remove if wanted
//you can replace an item with splice, but it is easier at times to access an index and reassign it
notes[1] = 'my second mid note';

//forEach runs a number of times = to the number of elements
notes.forEach(function (item, index) {
    console.log(item);
    console.log(index);
});

console.log(notes);

for(let cnt = 0; cnt < 3; cnt++)
{
    console.log(cnt);
}

for(let cnt = 0; cnt < notes.length; cnt++) 
{
    console.log(notes[cnt]);
}

for(let cnt = notes.length -1; cnt > -1; cnt--)
{
    console.log(notes[cnt]);
}