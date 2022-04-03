import { createElement } from "../domUtils";
import { tasks, storage } from "./storage";

const rightScreen = document.querySelector('.right');

function displayInbox() {
    const inbox = createElement('div', {id: 'inbox'});
    inbox.innerHTML = `
    <h2>Inbox</h2>
    <form class="hidden" id="add-task" class="add-container">
        <div id="input-container">
            <input type="text" id="title-input" placeholder="Untitled">
            <textarea placeholder="Description" id="description-input"></textarea>
            <div id="details-container">
                <input type="date" id="date-input">
            </div>  
        </div>
        <div id="submit-container">
            <button id="cancel-task">Cancel</button>
            <button class="submit-btn" id="submit-task">Add Task</button>
        </div>
    </form>
    <button type="button" id="task-btn" class="add-btn">
        <i class="fa-solid fa-plus"></i>
        <p>Add Task</p>
    </button>
    <ul id="task-list"></ul>`;
    rightScreen.append(inbox);
    const taskButton = document.querySelector('#task-btn');
    const addTask = document.querySelector('#add-task');
    const cancelTask = document.querySelector('#cancel-task');

    taskButton.addEventListener('click', function() {
        addTask.classList.remove('hidden');
        addTask.classList.toggle('active');
    });

    cancelTask.addEventListener('click', function() {
        addTask.classList.toggle('hidden');
    });
}

function displayTasks() {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, id) => {
        const taskEntry = createElement('li', {class: 'task-entry', id: id});
        taskEntry.innerHTML = `
        <div class="task-header">
            <p>${task.title}</p>
            <p>${task.dueDate}</p>
        </div>
        <p id="description" class="hidden">${task.description}</p>`;
        taskList.append(taskEntry);

        taskEntry.addEventListener('click', function(e) {
            const taskDescription = e.currentTarget.querySelector('#description');
            if(taskDescription.className === 'hidden') {
                taskDescription.className = 'active';
            } else if(taskDescription.className === 'active') {
                taskDescription.className = 'hidden';
            }
        });
    });
}

export { displayInbox, displayTasks }