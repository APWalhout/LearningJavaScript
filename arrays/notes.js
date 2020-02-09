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

const findNotes = function(notes, querry) {
    querry == querry.toLowerCase();

    return notes.filter(function (note, index){
        const titleMatch = note.title.toLowerCase().includes(querry);//method chaining by return values
        const bodyMatch = note.body.toLowerCase().includes(querry);
    
        return titleMatch || bodyMatch;
    });
}

console.log(findNotes(notes, 'gym'));

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// }

const note = findNote(notes, 'office todo');
console.log(note);