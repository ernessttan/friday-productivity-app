const generateUniqueId = require('generate-unique-id');
import { querySelector } from '../domUtils';
import { taskStorage, tasks, projects } from './storage';
import { displayPageTasks } from './view';

// Task Factory Function
const Task = (id, title, description, project, dueDate) => {
    return {id, title, description, project, dueDate}
}

// Function to add new task
export function addNewTask() {
    const id = generateUniqueId({length: 2});
    const title = querySelector('#taskTitle').value;
    const description = querySelector('#taskDescription').value;
    const dueDate = querySelector('#taskDate').value;
    const project = querySelector('.selected', parent = querySelector('#project-select'));

    let newTask = Task(id, title, description, project, dueDate);
    tasks.push(newTask);
    taskStorage.saveTasks();
}

// Function to delete task
// Input: Integer id
export function deleteTask(id) {
    let index = tasks.find(t => t.id === id);
    tasks.splice(index, 1);
    taskStorage.saveTasks();
    displayPageTasks(tasks)
    
    projects.forEach((project) => {
        let index = project.tasks.find(t => t.id === id);
        project.tasks.splice(index, 1);
        projectStorage.saveProjects();
    });
}



