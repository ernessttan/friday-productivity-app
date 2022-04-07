import {createElement, querySelector, querySelectorAll, checkClassName} from '../domUtils';
import { projects, tasks } from "./storage";
import { getProjectName } from './project';

const rightScreen = querySelector('.right');

// Function to display pages
// Input: Page Name String
export function displayPage(pageName) {
    // Update data
    rightScreen.innerHTML = '';

    const pageId = pageName.toLowerCase();
    // Create Page
    const page = createElement('div', {id: pageId});
    const pageTitle = createElement('h2', {text: pageName});
    page.append(pageTitle);

    // Create Add Task Form
    const addTaskForm = createElement('form', {id: 'add-task', class: 'hide'});
    addTaskForm.innerHTML = `
    <div class="form-header">
        <input type="text" id="title-input" placeholder="Untitled" required>
        <textarea placeholder="Description" id="description-input"></textarea>
    </div>
    <div class="form-body">
        <input type="date" id="date-input" required>
        <div id="project-select">
            <div class="selected">${getProjectName(pageName)}</div>
        </div>
    </div>
    <div class="form-footer">
        <button type="button" id="close-form">Cancel</button>
        <button type="submit" class="submit-btn" id="submit-task">Add Task</button>
    </div>`;
    page.append(addTaskForm);

    // Create Add Task Button
    const addTaskButton = createElement('button', {type: 'button', class: 'add-btn', id:'open-add'});
    addTaskButton.innerHTML = `
    <i class="fa-solid fa-plus"></i>
    Add Task`;
    page.append(addTaskButton);

    // Create Task List
    const taskList = createElement('ul', {id: 'task-list'});
    page.append(taskList);
    rightScreen.append(page);

    // Create add project dropdown
    const projectDropdown = createProjectDropdown();
    const projectSelect = querySelector('#project-select');
    projectSelect.append(projectDropdown);

    const openAdd = querySelector('#open-add');
    openAdd.addEventListener('click', (e) => {
        e.preventDefault();
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
}

// Helper function to generate project dropdown list
function createProjectDropdown() {
    const projectList = createElement('div', {id: 'project-list'});
    projects.forEach((project, id) => {
        let projectOption = createElement('div', {class:'project-item', text: project.title, id: id});
        projectList.append(projectOption);
    });
    return projectList
}

// Function to display page tasks
// Input: Array of Task Objects
export function displayPageTasks(tasksArr) {
    const taskEntries = querySelector('#task-list');
    taskEntries.innerHTML = '';
    tasksArr.forEach((task, id) => {
        // Create task entry
        const taskEntry = createElement('li', {class: 'task-entry', id: task.id});
        taskEntry.innerHTML = `
        <div class="task-header">
            <h4 class='task-title'>${task.title}</h4>
            <div class="header-right">
                <p class="due-date"><i class="fa-regular fa-clock"></i>${task.dueDate}</p>
            </div>
        </div>
        <div class="task-content hidden">
            <p class="task-description">${task.description}</p>
            <div class="task-footer">
                <button class="project-tag">${task.project}</button>
                <div class="footer-right">
                    <button class="delete-btn" id=${task.id}><i class="fa-solid fa-check"></i></button>
                    <button class="edit-btn" id=${task.id}><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>`;
        taskEntries.append(taskEntry);
        taskEntry.addEventListener('click', (e) => {
            const taskContent = e.currentTarget.querySelector('.task-content');
            checkClassName(taskContent, 'show', 'hidden');
        });
        // taskList.forEach((taskEntry) => {
        //     taskEntry.addEventListener('click', (e) => {
        //         const taskContent = e.currentTarget.querySelector('.task-content');
        //         checkClassName(taskContent, 'show', 'hidden');
        //     });
        // });
    });
}

// Function to display projects in NavBar
// Input: Array of Project Objects
export function displayProjects(projectsArr) {
    const projectList = querySelector('#projects-list');
    projectList.innerHTML = '';
    projectsArr.forEach((project, id) => {
        // Create project list item
        const projectEntry = createElement('li', {class: 'project-entry', id: id});
        projectEntry.innerHTML = `<i class="fa-solid fa-folder"></i>${project.title}`;
        projectList.append(projectEntry);
    })
}