import { displayPage, displayTasks, displayProjects } from './modules/view';
import { addNewTask, filterTasksToday, deleteTask, editTask} from './modules/task';
import { addNewProject } from './modules/project';
import { tasks, projects } from './modules/storage';
import './styles/style.css';

window.addEventListener('DOMContentLoaded', () => {
    displayPage('Inbox');
    displayTasks(tasks);
    displayProjects();

    const hamburger = document.querySelector('#hamburger');
    const navBar = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    const logo = document.querySelector('#logo');
    logo.addEventListener('click', () => {
        displayPage('Inbox');
        displayTasks(tasks);
    });

    const addTask = document.querySelector('#submit-task');
    addTask.addEventListener('click', () => {
        addNewTask();
        displayTasks(tasks);
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (e) => {
            deleteTask(e.currentTarget.id);
            displayTasks(tasks);
        });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach((editButton) => {
        editButton.addEventListener('click', (e) => {
            let id = e.currentTarget.id;
            let taskEntry = e.currentTarget.closest('.task-entry');
            editTask(taskEntry, id);
        });
    })

    const addProjectButton = document.querySelector('#project-btn');
    const addProjectForm = document.querySelector('#add-project');
    addProjectButton.addEventListener('click', () => {
        if(addProjectForm.className === 'hidden') {
            addProjectForm.className = 'active';
        } else {
            addProjectForm.className = 'hidden';
        }
    });

    const submitProject = document.querySelector('#submit-project');
    submitProject.addEventListener('click', () => {
        if(addProjectForm.className === 'hidden') {
            addProjectForm.className = 'active';
        } else {
            addProjectForm.className = 'hidden';
        }
        addNewProject();
        displayProjects();
    });

    const projectNavLinks = document.querySelectorAll('.project-entry');
    projectNavLinks.forEach(project => {
        project.addEventListener('click', (e) => {
            let projectId = e.currentTarget.id;
            navBar.className = 'hidden';
            displayPage(projects[projectId].title);
            displayTasks(projects[projectId].tasks);
        })
    });

    const today = document.querySelector('#today');
    today.addEventListener('click', () => {
        let tasksToday = filterTasksToday();
        displayPage('Today');
        displayTasks(tasksToday);
    });
});















