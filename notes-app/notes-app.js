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

//mdm addeventlistener to see all the possible listener types
document.querySelector('button').addEventListener('click',function (e){
    e.target.textContent = 'The button was clicked';
});