import { taskStorage, tasks, projects, projectStorage } from "./storage";
import {format} from 'date-fns';
import { querySelector } from "../domUtils";
import { displayPageTasks, displayEditForm } from "./view";
import { assignProject } from "./project";
const generateUniqueId = require('generate-unique-id');

// Task factory function
const Task = (id, title, description, dueDate, project) => {
    return {id, title, description, dueDate, project}
}

// Function to add new task
export function addNewTask() {
    const id = generateUniqueId({
        length: 2,
        useLetters: false
    });
    const title = querySelector('#title-input').value;
    const description = querySelector('#description-input').value;
    const dueDate = querySelector('#date-input').value;
    let project = querySelector('.selected').textContent;

    if(project === 'Select Project') {
        project = 'No Project Selected'     
    }

    let newTask = Task(id, title, description, dueDate, project);
    if(project) {
        assignProject(newTask);
        projectStorage.saveProjects();
        tasks.push(newTask);
        taskStorage.saveTasks();
    } else {
        tasks.push(newTask);
        taskStorage.saveTasks();
    }
}

// Function to delete task
export function deleteTask(id) {
    let index = tasks.find(t => t.id === id);
    tasks.splice(index, 1);
    taskStorage.saveTasks();
    
    projects.forEach((project) => {
        let index = project.tasks.find(t => t.id === id);
        project.tasks.splice(index, 1);
        projectStorage.saveProjects();
    });
}


// Function to edit task
export function editTask(id) {
    const title = document.querySelector('#title-edit');
    const description = document.querySelector('#description-edit');
    const dueDate = document.querySelector('#date-edit');
    const project = document.querySelector('.selected-edit');

    let newTask = Task(title, description, dueDate, project);
    projects[id] = newTask;
    taskStorage.saveTasks();
}

// Function to filter today's tasks
export function filterTasksToday() {
    const dateToday = format(new Date(), 'yyyy-MM-dd');
    let result = [];
    tasks.forEach((task) => {
        if(task.dueDate === dateToday) {
            result.push(task);
        }
    });
    return result;
}

// Function to filter project tasks
export function filterProjectTasks(projectArr, projectTitle) {
    projectArr.forEach((project) => {
        if(project.title === projectTitle) {
            displayPageTasks(project.tasks);
        }
    })
}



