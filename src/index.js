import { displayInbox, displayTasks } from './modules/view';
import { addNewTask } from './modules/addTask';
import './styles/style.css';

displayInbox();
displayTasks();

const addTask = document.querySelector('#submit-task');
addTask.addEventListener('click', () => {
    addNewTask();
    displayTasks();
});











