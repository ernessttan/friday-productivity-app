import { displayInbox, displayTasks } from './modules/view';
import { addNewTask } from './modules/task';
import './styles/style.css';

displayInbox();
displayTasks();

const addTask = document.querySelector('#submit-task');
addTask.addEventListener('click', () => {
    addNewTask();
    displayTasks();
});

const addProjectButton = document.querySelector('#project-btn');
const addProjectForm = document.querySelector('#add-project');
addProjectButton.addEventListener('click', () => {
    if(addProjectForm.className === 'hidden') {
        addProjectForm.className = 'active';
    } else {
        addProjectForm.className = 'hidden';
    }
});


const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
})











