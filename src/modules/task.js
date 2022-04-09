const generateUniqueId = require('generate-unique-id');
import {format} from 'date-fns';
import { querySelector } from '../domUtils';
import { assignProject } from './project';
import { taskStorage, tasks, projects, projectStorage } from './storage';
import { displayPageTasks } from './view';

// Task Factory Function
const Task = function(id, title, description, project, dueDate) {
    return {id, title, description, project, dueDate}
}

// Function to add new task
export function addNewTask() {
    const id = generateUniqueId({length: 2});
    const title = querySelector('#taskTitle').value;
    const description = querySelector('#taskDescription').value;
    const dueDate = querySelector('#taskDate').value;
    let project = querySelector('.selected', parent = querySelector('#projectSelect')).textContent;
    if(project === 'Select Project') {
        project = 'No Project Selected';
    }
    let newTask = Task(id, title, description, project, dueDate);
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

// Function to complete task
// Input: Integer id
export function completeTask(id) {
    tasks.find((task, index) => {
        if(task.id === id) {
            tasks.splice(index, 1);
            taskStorage.saveTasks();
        }
        if(task.project) {
            projects.forEach((project) => {
                let task = project.tasks.find(task => task.id === id);
                if(task) {
                    project.tasks.splice(index, 1);
                    projectStorage.saveProjects();
                }
            });
        }  
    });
}

export function filterProjectTasks(pageName) {
    let result = [];
    projects.forEach((project) => {
        let projectTasks = project.tasks;
        projectTasks.forEach((task) => {
            if(task.project === pageName) {
                result.push(task);
            }
        })
    });
    return result
}

// Function to filter Nav tasks
// Input: String pagename
export function filterTasks(pageName) {
    let result = [];
    if(pageName === 'Today') {
        result = filterTasksToday();
    }
    return result;
}

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



