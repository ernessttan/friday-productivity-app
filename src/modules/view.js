import { createElement } from "../domUtils";
// import { storage } from "./storage";
import { addNewProject } from "./project";
import { projects, tasks } from "./storage";

const rightScreen = document.querySelector('.right');

export function displayPage(page) {
    rightScreen.innerHTML = '';
    const pageId = page.toLowerCase();
    const pageTitle = page;
    page = createElement('div', {id: pageId});
    
    page.innerHTML = `
    <h2>${pageTitle}</h2>
    <form class="hidden" id="add-task" class="add-container">
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

    const taskButton = document.querySelector('#task-btn');
    const addTask = document.querySelector('#add-task');
    taskButton.addEventListener('click', function() {       
        addTask.classList.remove('hidden');
        addTask.classList.toggle('active');
    });

    const cancelTask = document.querySelector('#cancel-task');
    cancelTask.addEventListener('click', function() {
        addTask.classList.toggle('hidden');
    });
    
    projectSelect.addEventListener('click', () => {
        const projectList = document.querySelector('.project-list');
        projectList.classList.toggle('active');
    });

    const projectOptions = document.querySelectorAll('.project');
    projectOptions.forEach(project => {
        project.addEventListener('click', function(e) {
            const selected = document.querySelector('.selected');
            let title = e.target.textContent;
            let id = e.target.id;
            selected.textContent = title;
            selected.id = id;
        });
    });
}

export function displayProjects() {
    const projectList = document.querySelector('#projects-list');
    projectList.innerHTML = '';
    projects.forEach((project, id) => {
        const projectEntry = createElement('li', {class: 'project-entry', id: id});
        projectEntry.innerHTML = `
        <i class="fa-solid fa-folder"></i>
        <p>${project.title}</p>`;
        projectList.append(projectEntry);
    });
}

export function displayTasks(tasks) {
    const taskList = document.querySelector('#task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, id) => {
        const taskEntry = createElement('li', {class: 'task-entry', id: id});
        taskEntry.innerHTML = `
        <div class="task-header">
            <p class='task-title'>${task.title}</p>
            <p class="due-date"><i class="fa-regular fa-clock"></i>${task.dueDate}</p>
        </div>
        <div id="task-footer" class="hidden">
            <p id="description">${task.description}</p>
            <button class="project-tag">Project</button>
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


//function displayInbox() {
    //     const inbox = createElement('div', {id: 'inbox'});
    //     inbox.innerHTML = `
    //     <h2>Inbox</h2>
    //     <form class="hidden" id="add-task" class="add-container">
    //         <div id="input-container">
    //             <input type="text" id="title-input" placeholder="Untitled">
    //             <textarea placeholder="Description" id="description-input"></textarea>
    //             <div id="details-container">
    //                 <input type="date" id="date-input">
    //                 <div id="project-select">
    //                     <div class="selected">Select Project</div>
    //                     <div class="project-list">
    //                         <div class="project">Option 1</div>
    //                         <div class="project">Option 2</div>
    //                         <div class="project">Option 3</div>
    //                     </div>
    //                 </div>
    //             </div>  
    //         </div>
    //         <div id="submit-container">
    //             <button id="cancel-task">Cancel</button>
    //             <button class="submit-btn" id="submit-task">Add Task</button>
    //         </div>
    //     </form>
    //     <button type="button" id="task-btn" class="add-btn">
    //         <i class="fa-solid fa-plus"></i>
    //         <p>Add Task</p>
    //     </button>
    //     <ul id="task-list"></ul>`;
    //     rightScreen.append(inbox);
       
    //     const taskButton = document.querySelector('#task-btn');
    //     const addTask = document.querySelector('#add-task');
    //     taskButton.addEventListener('click', function() {       
    //         addTask.classList.remove('hidden');
    //         addTask.classList.toggle('active');
    //     });
    
    //     const cancelTask = document.querySelector('#cancel-task');
    //     cancelTask.addEventListener('click', function() {
    //         addTask.classList.toggle('hidden');
    //     });
        
    //     const projectSelect = document.querySelector('#project-select');
    //     projectSelect.addEventListener('click', () => {
    //         const projectList = document.querySelector('.project-list');
    //         projectList.classList.toggle('active');
    //     });
    
    //     const projects = document.querySelectorAll('.project');
    //     projects.forEach(project => {
    //         project.addEventListener('click', function(e) {
    //             const selected = document.querySelector('.selected');
    //             let title = e.target.textContent;
    //             console.log(title);
    //             selected.textContent = title;
    //         });
    //     });
    // }
    
   