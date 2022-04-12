import { querySelector, querySelectorAll, createElement, toggleClasses } from "../domUtils"
import { getProjectName, createProjectDropdown } from "./project";
import { addNewTask, completeTask, filterProjectTasks, editTask } from "./task";
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
            <div class="project-select">
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
    querySelector('.project-select').append(projectDropdown);
   
    // Page Event Listeners
    pageEventListeners(pageName);
}

// Function to display page tasks
// Input: Array of Task Objects
export function displayPageTasks(taskArr) {
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

// Function to display edit menu
export function displayEditForm(id, selector) {
    let task = tasks.find(task => task.id === id);
    const editForm = createElement('form', {id:'editTaskForm'});
    const taskList = querySelector('#taskList');
    taskList.insertBefore(editForm, selector);
    editForm.innerHTML = `
    <div class="form-header">
        <input type="text" class="title-input" id="titleEdit" placeholder="Untitled" value=${task.title} required>
        <textarea class="description-input" id="descriptionEdit" placeholder="Description">${task.description}</textarea>
    </div>
    <div class="form-body">
        <input type="date" id="dateEdit" value=${task.dueDate} required>
        <div class="project-edit">
            <div class="selected">${getProjectName(task.project)}</div>
        </div>
    </div>
    <div class="form-footer">
        <button type="button" class="close-btn" id="closeEditForm">Cancel</button>
        <button type="submit" class="submit-btn submit-edit" id=${task.id}>Edit Task</button>
    </div>`;
      // Create dropdown and add to project list
      const projectDropdown = createProjectDropdown();
      querySelector('.project-edit').append(projectDropdown);
      editTaskListeners();

}

// Function for page event listeners
// Input: String pagename
const pageEventListeners = (pageName) => {
    const addTaskForm = querySelector('#addTaskForm');
    const openTaskFormListener = () => {
        const openTaskForm = querySelector('#openTaskForm');
        openTaskForm.addEventListener('click', () => {
            addTaskForm.classList.toggle('show');
        });
    };

     // Listener to close add task form
    const closeTaskFormListener = () => {
        const closeTaskForm = querySelector('#closeTaskForm');
        closeTaskForm.addEventListener('click', () => {
            addTaskForm.classList.remove('show');
        });
    }

     // Listener for toggling project dropdown list
    const projectDropdownListener = () => {
        const projectSelects = querySelectorAll('.project-select');
        projectSelects.forEach((projectSelect) => {
            const projectList = querySelector('.project-list');
            projectSelect.addEventListener('click', () => {
                projectList.classList.toggle('active'); 
            });
        });
    };

    const projectItemListener = () => {
        const projectItems = querySelectorAll('.project-item');
        const projectSelect = querySelector('#projectSelect')
        projectItems.forEach((projectItem) => {
            projectItem.addEventListener('click', (e) => {
                const selected = querySelector('.selected', parent = projectSelect);
                let title = e.target.textContent;
                let id = e.target.id;
                selected.textContent = title;
                selected.id = id;
                selected.style.color = 'black';
            });
        });
    };
  
    // Listener for submitting task
    const submitTaskListener = () => {
        const submitTask = querySelector('#submitTask');
        submitTask.addEventListener('click', () => {
            addTaskForm.classList.toggle('active');
            addNewTask();
            let taskArr = filterProjectTasks(pageName)
            displayPageTasks(taskArr);
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
        });
    };

    // Listener to complete task
    const completeTaskListener = () => {
        const checkButtons = querySelectorAll('.check-btn');
        checkButtons.forEach((checkButton) => {
            checkButton.addEventListener('click', (e) => {
                let id = e.currentTarget.id;
                completeTask(id);
                let pageName = querySelector('#pageName');
                let taskArr = filterProjectTasks(pageName);
                displayPageTasks(taskArr);
            });
        });
    };

    // Listener to edit task
    const openEditTaskListener = () => {
        const editButtons = querySelectorAll('.edit-btn');
        editButtons.forEach((editButton) => {
            editButton.addEventListener('click', (e) => {
                let id = e.currentTarget.id;
                let selector = e.currentTarget.closest('.task-card');
                displayEditForm(id, selector);
                editTaskListener();
            });
        });
    };

    // Listener to submit edits
    const editTaskListener = () => {
        const submitEdit = querySelector('.submit-edit');
        submitEdit.addEventListener('click', (e) => {
            let id = e.currentTarget.id;
            editTask(id);
        })
    }
    expandCardListener();
    completeTaskListener();
    openEditTaskListener();
    return {
        expandCardListener,
        completeTaskListener,
        openEditTaskListener,
        editTaskListener
    }
};

// Event Listeners to Edit Tasks
const editTaskListeners = () => {
    const projectDropdownListener = () => {
        const projectEdits = querySelectorAll('.project-edit');
        projectEdits.forEach((projectEdit) => {
            const projectList = querySelector('.project-list', parent = projectEdit);
            projectEdit.addEventListener('click', () => {
                projectList.classList.toggle('active'); 
            });
        });
    };
    
    const projectItemListener = () => {
        const projectItems = querySelectorAll('.project-item');
        const projectEdit = querySelector('.project-edit');
        projectItems.forEach((projectItem) => {
            projectItem.addEventListener('click', (e) => {
                const selected = querySelector('.selected', parent = projectEdit);
                let title = e.target.textContent;
                let id = e.target.id;
                selected.textContent = title;
                selected.id = id;
                selected.style.color = 'black';
            });
        });
    };

    const cancelEditListener = () => {
        const closeEditButton = querySelector('#closeEditForm');
        closeEditButton.addEventListener('click', (e) => {
            const editForm = e.currentTarget.closest('#editTaskForm');
            editForm.remove();
        });
    }

    const submitEditListener = () => {
        const submitEdit = querySelector('.submit-edit');
        submitEdit.addEventListener('click', (e) => {
            let id = e.currentTarget.id
            editTask(id);
        });
    }

    projectDropdownListener();
    cancelEditListener();
    projectItemListener();
    submitEditListener();
    return {
        projectDropdownListener,
        cancelEditListener,
        projectItemListener,
        submitEditListener
    }
};

