const tasks = [{
    title: 'My next trip',
    completed: false
}, {
    title: 'Goals',
    completed: false
}, {
    title: 'Office todo',
    completed: true
}, {
    title: 'Buy dog',
    completed: false
}, {
    title: 'Jump the shark',
    completed: true
}] 

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTasks = function(taskList, filterItems){
    const filteredTasks = taskList.filter(function(task){
        const searchTextMatch = task.title.toLowerCase().includes(filterItems.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !task.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const remainingTally = filteredTasks.filter(function(todo){
        return !todo.completed;
    });

    //clear out the list
    document.querySelector('div#taskList').innerHTML = '';

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

//create a checkbox and set up a listener : hide complete
//create new hideCompleted filter (default false), like search filter
//update hidecompleted and render list on checkbox change, like search filter render
//setup render todos to remove completed items, if true, don't show complete, if false, show everything
document.querySelector('input#hideComplete').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTasks(tasks, filters);
});;