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

const filters = {
    searchText: ''
};

const renderTasks = function(taskList, filterItems){
    const filteredTasks = taskList.filter(function(task){
        return task.title.toLowerCase().includes(filterItems.searchText.toLowerCase());
    });

    //clear out the list
    document.querySelector('div#taskList').innerHTML = '';

    const remainingTally = filteredTasks.filter(function(todo){
        return !todo.completed;
    });

    const remainingTasks = document.createElement('h2');
    remainingTasks.textContent = `You have ${remainingTally.length} task(s) remaining.`;
    document.querySelector('div#taskList').appendChild(remainingTasks);

    filteredTasks.forEach(function(task){
        const taskElement = document.createElement('p');
        taskElement.textContent = task.title;

        document.querySelector('div#taskList').appendChild(taskElement);
    });
};

//initial render call
renderTasks(tasks, filters);

document.querySelector('input#search-bar').addEventListener('input', function(e){
    filters.searchText = e.target.value;

    renderTasks(tasks, filters);
});

document.querySelector('form#newTodo').addEventListener('submit', function(e){
    e.preventDefault();

    tasks.push({
        title: e.target.elements.createTask.value,
        completed: false
    });

    e.target.elements.createTask.value = '';

    //refresh screen
    renderTasks(tasks, filters);
});