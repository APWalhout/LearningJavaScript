//DOM - Document Object Model

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

const filters = {
    searchText: ''
}

const renderNotes = function(notesList, filterItems){
    const filteredNotes = notesList.filter(function(note){
        return note.title.toLowerCase().includes(filterItems.searchText.toLowerCase());
    })
    
    document.querySelector('div#notes').innerHTML = '';

    //render the items
    filteredNotes.forEach(function(note){
        const noteElement = document.createElement('p');
        noteElement.textContent = note.title;
        document.querySelector('div#notes').appendChild(noteElement);
    });
};

renderNotes(notes, filters);

//mdm addeventlistener to see all the possible listener types
document.querySelector('button#add-note').addEventListener('click',function (e){
    e.target.textContent = 'The button was clicked';
});

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    
    renderNotes(notes, filters);
});

document.querySelector('form#name').addEventListener('submit', function(e){
    e.preventDefault();//stop the default behavior of submit, default is to refresh and move info to url
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
});