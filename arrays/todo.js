const todo = [{
    completed: true,
    text: 'Take dog to vet'
}, {
    completed: false,
    text: '1 mile run'
}, {
    completed: true,
    text: 'Pick up beans'
}, {
    completed: false,
    text: 'Put cat in bag'
}, {
    completed: true,
    text: 'Groceries'
}];

//convert array of strings to that of objects
//create a function to remove element by text value

const deleteTodo = function(noteArray, todoText){
    const toDelete = noteArray.findIndex(function(note){
        return note.text.toLowerCase() === todoText.toLowerCase();
    });

    if(toDelete > -1)
    {
        todo.splice(toDelete, 1);
    }
}

//create a function to return uncompleted tasks

const getIncompletes = function(taskList) {
    return taskList.filter(function(task){
        return !task.completed;
    });
}

//sort by completed
const sortTasks = function(taskList){
    taskList.sort(function(a, b){
        if(a.completed && !b.completed){
            return 1;
        } else if (!a.completed && b.completed){
            return -1;
        }
        
        return 0;
    });
}

sortTasks(todo);
// deleteTodo(todo, '1 mile run');
// console.log(getIncompletes(todo));
console.log(todo);
