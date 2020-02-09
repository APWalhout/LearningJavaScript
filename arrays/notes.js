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

const sortNotes = function(notes){
    notes.sort(function(a, b){
        // return -1;//for if a is first
        // return 1;//for if b is first
        // return 0;//for if order doesn't change
        if(a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;//a and b are =, don't mess with them
        }
    });
}

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

// console.log(findNotes(notes, 'gym'));

// const note = findNote(notes, 'office todo');
// console.log(note);

sortNotes(notes);
console.log(notes);