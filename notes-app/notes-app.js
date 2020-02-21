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

// const pTag = document.querySelector('p');//returns the first insance of the p tag.
// pTag.remove();//removes all selected elements

//querry all and remove
const pTags = document.querySelectorAll('p');//returns ALL instances

pTags.forEach(function(p){
    p.textContent = '***';
    // console.log(p.textContent);
    //p.remove();
});

//add a new element
//give it a text value
//pick a place to put it
//insert it
const newPTag = document.createElement('p');
newPTag.textContent = 'New p tag added here from js';
document.querySelector('body').appendChild(newPTag);