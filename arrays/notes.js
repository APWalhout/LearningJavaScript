const notes = [{
    title: 'My next trip',
    body: 'Germany'
}, {
    title: 'Goals',
    body: 'Join a gym'
}, {
    title: 'Office todo',
    body: 'Get new chair'
}] 

const findNote = function(notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// }

const note = findNote(notes, 'office todo');
console.log(note);

console.log(notes.length);//remember documentation on mdn array
console.log(notes);//indices start at 0 as they should!


// console.log(notes);

// const index = notes.findIndex(function(note, index){
//     console.log(note);
//     return note.title === 'Goals'
// });

// console.log(index);