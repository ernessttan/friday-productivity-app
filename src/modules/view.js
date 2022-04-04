import { createElement } from "../domUtils";
import { addNewProject } from "./project";
import { projects, tasks } from "./storage";
import { deleteTask, editTask } from "./task";

const rightScreen = document.querySelector('.right');

// Function to display pages dynamically
export function displayPage(page) {
    rightScreen.innerHTML = '';
    const pageId = page.toLowerCase();
    const pageTitle = page;
    page = createElement('div', {id: pageId});
    
    page.innerHTML = `
    <h2>${pageTitle}</h2>
    <form class="hidden" id="add-task">
        <div id="input-container">
            <input type="text" id="title-input" placeholder="Untitled">
            <textarea placeholder="Description" id="description-input"></textarea>
            <div id="details-container">
                <input type="date" id="date-input">
                <div id="project-select">
                    <div class="selected">Select Project</div>
                </div>
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
    rightScreen.append(page);

    const projectList = createElement('div', {class: 'project-list'});
    const projectSelect = document.querySelector('#project-select');
    projectSelect.append(projectList);
    projects.forEach((project, id) => {
        let projectOption = createElement('div', {class: 'project', text: project.title, id: id});
        projectList.append(projectOption);
    });
}

// Function to show all projects in Nav Bar
export function displayProjects() {
    const editList = document.querySelector('#projects-list');
 editList.innerHTML = '';
    projects.forEach((project, id) => {
        const projectEntry = createElement('li', {class: 'project-entry', id: id});
        projectEntry.innerHTML = `
        <i class="fa-solid fa-folder"></i>
        <p>${project.title}</p>`;
     editList.append(projectEntry);
    });
}

// Function to display tasks on page
export function displayTasks(taskData) {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';
    taskData.forEach((task, id) => {
        const taskEntry = createElement('li', {class: 'task-entry', id: id});
        taskEntry.innerHTML = `
        <div class="task-header">
            <p class='task-title'>${task.title}</p>
            <div class="header-right">
                <p class="due-date"><i class="fa-regular fa-clock"></i>${task.dueDate}</p>
            </div>
        </div>
        <div id="task-footer" class="hidden">
            <p id="description">${task.description}</p>
            <div id="task-buttons">
                <button class="project-tag">Project</button>
                <div class="buttons-right">
                    <button class="delete-btn" id=${id}><i class="fa-regular fa-trash-can"></i></button>
                    <button class="edit-btn" id=${id}><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>`;
        
        taskList.append(taskEntry);

        taskEntry.addEventListener('click', function(e) {
            const taskFooter = e.currentTarget.querySelector('#task-footer');
            if(taskFooter.className === 'hidden') {
                taskFooter.className = 'active';
            } else if(taskFooter.className === 'active') {
                taskFooter.className = 'hidden';
            }
        });
    });
}

export function displayEditForm(task, id) {
    let taskData = tasks[id];
    const taskList = document.querySelector('#task-list');
    const editForm = createElement('form', {id: 'edit-task'});
    editForm.innerHTML = `
    <div id="input-container">
        <input type="text" id="title-edit" placeholder="Untitled">
        <textarea placeholder="Description" id="description-edit"></textarea>
        <div id="details-container">
            <input type="date" id="date-edit">
            <div id="project-edit">
                <div class="selected-edit">Select Project</div>
            </div>
        </div>  
    </div>  
    <div id="submit-container">
        <button id="cancel-task">Cancel</button>
        <button class="submit-btn" id="submit-edit">Save</button>
    </div>`;

    taskList.insertBefore(editForm, task);

    const saveEdit = document.querySelector('#submit-edit');
    saveEdit.addEventListener('click', (e) => {
        let id = e.target.closest('.task-entry');
        console.log(id);
        editTask(id);
    });

    const editList = createElement('div', {class: 'edit-list'});
    const projectSelect = document.querySelector('#project-edit');
    projectSelect.append(editList);
    projects.forEach((project, id) => {
        let projectOption = createElement('div', {class: 'project', text: project.title, id: id});
        editList.append(projectOption);
    });

    projectSelect.addEventListener('click', (e) => {
        const editList = document.querySelector('.edit-list');
        editList.classList.toggle('active');
    });
}