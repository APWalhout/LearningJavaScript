const pTags = document.querySelectorAll('p');

//remove all p tags with 'the'
pTags.forEach(function(p){
    if(p.textContent.includes('the')){
        p.remove();
    }
});