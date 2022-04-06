import './styles/style.css';
import { displayPage, displayPageTasks, displayProjects } from './modules/view';
import { addGlobalEventListener, querySelector, querySelectorAll, checkClassName } from './domUtils';
import { addNewTask, deleteTask, filterProjectTasks } from './modules/task';
import { addNewProject } from './modules/project';
import {tasks, projects} from './modules/storage';

window.addEventListener('DOMContentLoaded', () => {
    displayPage('Inbox');
    displayPageTasks(tasks);
    displayProjects(projects);
    

    /* Navbar Event Listeners */
    const hamburger = querySelector('#hamburger');
    const navBar = querySelector('nav');
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    })

    const openAddProject = querySelector('#open-project-add');
    openAddProject.addEventListener('click', () => {
        const addProjectForm = querySelector('#add-project');
        checkClassName(addProjectForm, 'show', 'hidden');
    });

    const projectEntries = querySelectorAll('.project-entry');
    projectEntries.forEach((projectEntry) => {
        projectEntry.addEventListener('click', () => {
            let title = projectEntry.textContent;
            displayPage(title);
            filterProjectTasks(projects, title);
        });
    });


    /* Add Task Form Event Listeners */
    const addTaskForm = querySelector('#add-task');
    addGlobalEventListener('click', '#open-add', (e) => {
        addTaskForm.classList.toggle('show');
    });

    const closeTaskForm = querySelector('#close-form');
    closeTaskForm.addEventListener('click' , () => {
        if(addTaskForm.className === 'show') {
            addTaskForm.className = 'hide';
        } else {
            addTaskForm.className = 'show';
        }
    });

    const projectSelect = querySelector('#project-select');
    projectSelect.addEventListener('click', () => {
        const projectList = querySelector('#project-list');
        projectList.classList.toggle('active');
    });

    const projectItems = querySelectorAll('.project-item');
    projectItems.forEach((projectItem) => {
        projectItem.addEventListener('click', (e) => {
            const selected = querySelector('.selected');
            let title = e.target.textContent;
            console.log(title);
            let id = e.target.id;
            selected.textContent = title;
            selected.id = id;
            selected.style.color = 'black';
        });
    });
    
    const submitTaskButton = querySelector('#submit-task');
    submitTaskButton.addEventListener('click', () => {
        addNewTask();
        displayPageTasks(tasks);
    });

     /* Add Project Form Event Listeners */
     const submitProjectButton = querySelector('#submit-project');
     submitProjectButton.addEventListener('click', () => {
         addNewProject();
         displayProjects(projects);
     });

    /* Task List Event Listeners */
    const deleteTaskButtons = querySelectorAll('.delete-btn');
    deleteTaskButtons.forEach((deleteTaskButton) => {
        deleteTaskButton.addEventListener('click', (e) => {
            let taskId = e.currentTarget.id;
            deleteTask(taskId);
            location.reload();
        });
    })

});














