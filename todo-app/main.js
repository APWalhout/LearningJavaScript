const tasks = [{
    title: 'My next trip',
    completed: false
}, {
    title: 'Goals',
    completed: false
}, {
    title: 'Office todo',
    completed: true
}] 

//add a h2 for how many remaining
const remainingTasks = document.createElement('h2');

// let remainingTally = 0;

// tasks.forEach(function(todo){
//     if(todo.completed == false){remainingTally++;}
// });

const remainingTally = tasks.filter(function(todo){
    return !todo.completed;
});

remainingTasks.textContent = `You have ${remainingTally.length} task(s) remaining.`;
document.querySelector('body').appendChild(remainingTasks);


//add a p for each todo above using text value
tasks.forEach(function(task){
    const newTaskTag = document.createElement('p');
    
    newTaskTag.textContent = task.title;
    document.querySelector('body').appendChild(newTaskTag);
});

document.querySelector('button#add-task').addEventListener('click', function(buttonEvent){
    console.log('button clicked');
});