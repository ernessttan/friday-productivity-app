import './styles/style.css';
import { displayPage, displayPageTasks, displayProjects, displayEditForm } from './modules/view';
import { querySelector, querySelectorAll, checkClassName } from './domUtils';
import { addNewTask, deleteTask, filterProjectTasks, filterTasksToday } from './modules/task';
import { addNewProject } from './modules/project';
import {tasks, projects} from './modules/storage';

window.addEventListener('DOMContentLoaded', () => {
    displayPage('Inbox');
    displayPageTasks(tasks);
    displayProjects(projects);
    

    /* Navbar Event Listeners */
    const logo = querySelector('#logo');
    logo.addEventListener('click', (e) => {
        e.preventDefault()
        navBar.classList.remove('active');
        displayPage('Inbox');
    });

    const navLinks = querySelectorAll('.nav-link');
    const navBar = querySelector('nav');
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            let pageTitle = navLink.textContent;
            displayPage(pageTitle);
            const pageTasks = filterTasksToday();
            console.log(pageTasks);
            displayPageTasks(pageTasks);
            navBar.classList.remove('active');
        });
})

    const hamburger = querySelector('#hamburger');
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });

    const projectEntries = querySelectorAll('.project-entry');
    projectEntries.forEach((projectEntry) => {
        projectEntry.addEventListener('click', () => {
            let title = projectEntry.textContent;
            navBar.classList.remove('active');
            displayPage(title);
            filterProjectTasks(projects, title);
        });
    });


    /* Add Task Form Event Listeners */
    

     /* Add Project Form Event Listeners */
    const openAddProject = querySelector('#open-project-add');
    const addProjectForm = querySelector('#add-project');
    openAddProject.addEventListener('click', () => {
        checkClassName(addProjectForm, 'show', 'hidden');
    });
    
     const submitProjectButton = querySelector('#submit-project');
     submitProjectButton.addEventListener('click', (e) => {
         e.preventDefault();
         addNewProject();
         displayProjects(projects);
         checkClassName(addProjectForm, 'hidden', 'show');
     });

    /* Task List Event Listeners */
    const submitTaskButton = querySelector('#submit-task');
    submitTaskButton.addEventListener('click', () => {
        addNewTask();
        displayPageTasks(tasks);
    });

    const deleteTaskButtons = querySelectorAll('.delete-btn');
    deleteTaskButtons.forEach((deleteTaskButton) => {
        deleteTaskButton.addEventListener('click', (e) => {
            let taskId = e.currentTarget.id;
            deleteTask(taskId);
            displayPageTasks(tasks);
            // location.reload();
        });
    });

    const editTaskButtons = querySelectorAll('.edit-btn');
    editTaskButtons.forEach((editTaskButton) => {
        editTaskButton.addEventListener('click', (e) => {
            let selector = e.currentTarget.closest('.task-entry');
            let id = e.currentTarget.id
            displayEditForm(id, selector);
        });
    });

});














