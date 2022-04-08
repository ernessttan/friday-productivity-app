import { querySelector, querySelectorAll, createElement, toggleClasses } from "../domUtils"
import { getProjectName, createProjectDropdown } from "./project";
import { addNewTask, completeTask } from "./task";
import { tasks, projects } from "./storage";

// Function to display pages
// Input: Page Name String
const rightScreen = querySelector('.right');
export function displayPage(pageName) {
    // Clear Data
    rightScreen.innerHTML = '';

    const page = createElement('div');
    page.innerHTML = `
    <h2 id="pageName">${pageName}</h2>
    <form id="addTaskForm">
        <div class="form-header">
            <input type="text" class="title-input" id="taskTitle" placeholder="Untitled" required>
            <textarea class="description-input" id="taskDescription" placeholder="Description" ></textarea>
        </div>
        <div class="form-body">
            <input type="date" id="taskDate" required>
            <div id="projectSelect">
                <div class="selected">${getProjectName(pageName)}</div>
            </div>
        </div>
        <div class="form-footer">
            <button type="button" class="close-btn" id="closeTaskForm">Cancel</button>
            <button type="submit" class="submit-btn" id="submitTask">Add Task</button>
        </div>
    </form>
    <button class="add-btn" id="openTaskForm">
        <i class="fa-solid fa-plus"></i>
        Add Task
    </button>`;

    const taskList = createElement('ul', {id: 'taskList'});
    page.append(taskList);
    rightScreen.append(page);
  
    // Create dropdown and add to project list
    const projectDropdown = createProjectDropdown();
    querySelector('#projectSelect').append(projectDropdown);
   
    // Page Event Listeners
    pageEventListeners(pageName);
}

// Function to display page tasks
// Input: Array of Task Objects
export function displayPageTasks(taskArr, pageName) {
    const taskList = querySelector('#taskList');
    taskList.innerHTML = '';
    taskArr.forEach((task) => {
        const taskCard = createElement('li', {class: 'task-card', id: task.id});
        taskCard.innerHTML = `
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
                    <button class="check-btn" id=${task.id}><i class="fa-solid fa-check"></i></button>
                    <button class="edit-btn" id=${task.id}><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </div>
        </div>`;
        taskList.append(taskCard);
    });
    taskCardEventListeners();
}

// Function to display projects
export function displayProjects() {
    const projectList = querySelector('#projectList');
    projectList.innerHTML = '';
    projects.forEach((project) => {
        const projectEntry = createElement('li', {class: 'project-entry', id: project.id});
        projectEntry.innerHTML = `<i class="fa-solid fa-folder"></i>${project.title}`
        projectList.append(projectEntry);
        pageEventListeners.projectItemListener;
    });
}

// Function for page event listeners
// Input: String pagename
const pageEventListeners = (pageName) => {
    const addTaskForm = querySelector('#addTaskForm');
    const openTaskFormListener = () => {
        const openTaskForm = querySelector('#openTaskForm');
        openTaskForm.addEventListener('click', () => {
            addTaskForm.classList.toggle('active');
        });
    };

     // Listener to close add task form
    const closeTaskFormListener = () => {
        const closeTaskForm = querySelector('#closeTaskForm');
        closeTaskForm.addEventListener('click', () => {
            addTaskForm.classList.remove('active');
        });
    }

     // Listener for toggling project dropdown list
    const projectDropdownListener = () => {
        const projectSelect = querySelector('#projectSelect')
        const projectList = querySelector('.project-list', parent = projectSelect);
        projectSelect.addEventListener('click', () => {
            projectList.classList.toggle('active'); 
        });
    };

    const projectItemListener = () => {
        const projectItems = querySelectorAll('.project-item');
        const projectSelect = querySelector('#projectSelect')
        projectItems.forEach((projectItem) => {
            projectItem.addEventListener('click', (e) => {
                const selected = querySelector('.selected', parent = projectSelect);
                let title = e.target.textContent;
                console.log(title);
                let id = e.target.id;
                selected.textContent = title;
                selected.id = id;
                selected.style.color = 'black';
            });
        });
    }
  

    // Listener for submitting task
    const submitTaskListener = () => {
        const submitTask = querySelector('#submitTask');
        submitTask.addEventListener('click', () => {
            addNewTask();
            displayPageTasks(tasks, pageName);
        });
    }
    openTaskFormListener();
    closeTaskFormListener();
    projectDropdownListener();
    projectItemListener();
    submitTaskListener();
    return {
        openTaskFormListener,
        closeTaskFormListener,
        projectDropdownListener,
        projectItemListener,
        submitTaskListener
    }
};

// Event listeners for task cards
const taskCardEventListeners = () => {
    // Listener to expand card
    const expandCardListener = () => {
        const taskCards = querySelectorAll('.task-card');
        taskCards.forEach((taskCard) => {
            taskCard.addEventListener('click', (e) => {
                const taskContent = e.currentTarget.querySelector('.task-content');
                toggleClasses(taskContent, 'hidden', 'active');
            });
        })
    };

    // Listener to complete task
    const completeTaskListener = () => {
        const checkButtons = querySelectorAll('.check-btn');
        checkButtons.forEach((checkButton) => {
            checkButton.addEventListener('click', (e) => {
                let id = e.currentTarget.id;
                let pageName = querySelector('#pageName');
                completeTask(id, pageName);
            });
        })
    }
    expandCardListener();
    completeTaskListener();
    return {
        expandCardListener,
        completeTaskListener
    }
};

