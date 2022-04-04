import { displayPage, displayTasks, displayProjects } from './modules/view';
import { addNewTask } from './modules/task';
import { addNewProject } from './modules/project';
import { tasks, projects } from './modules/storage';
import './styles/style.css';

window.addEventListener('DOMContentLoaded', (event) => {
    displayPage('Inbox');
    displayTasks(tasks);
    displayProjects();

    const hamburger = document.querySelector('#hamburger');
    const navBar = document.querySelector('nav');
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    const addTask = document.querySelector('#submit-task');
    addTask.addEventListener('click', (e) => {
        // e.preventDefault();
        addNewTask();
        displayAllTasks();
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
            console.log(projectId);
            console.log(projects[projectId])
            displayPage(projects[projectId].title);
        })
    })
});















