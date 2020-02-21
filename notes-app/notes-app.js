//DOM - Document Object Model

// const pTag = document.querySelector('p');//returns the first insance of the p tag.
// pTag.remove();//removes all selected elements

//querry all and remove
const pTags = document.querySelectorAll('p');//returns ALL instances

pTags.forEach(function(p){
    p.textContent = '***';
    // console.log(p.textContent);
    //p.remove();
});