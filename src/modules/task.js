import { taskStorage, tasks, projects, projectStorage } from "./storage";
import {format} from 'date-fns';
import { displayTasks, displayEditForm } from "./view";

// Task factory function
const Task = (title, description, dueDate, project) => {
    return {title, description, dueDate, project}
}

// Function to add new task
export function addNewTask() {
    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#date-input').value;
    const project = document.querySelector('.selected').id;

    let newTask = Task(title, description, dueDate, project);
    if(project >= 0) {
        let projectToPush = projects[project].tasks
        projectToPush.push(newTask);
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
    tasks.splice(id, 1);
    taskStorage.saveTasks();
}

// Function to edit task
export function editTask(id) {
    const title = document.querySelector('#title-edit');
    const description = document.querySelector('#description-edit');
    const dueDate = document.querySelector('#date-edit');
    const project = document.querySelector('.selected-edit');

    let newTask = Task(title, description, dueDate, project);
    console.log(newTask);
    projects[id] = newTask;
    taskStorage.saveTasks();
}

// Function to filter today's tasks
export function filterTasksToday() {
    const dateToday = format(new Date(), 'yyyy-MM-dd');
    let result = [];
    tasks.forEach((task, id) => {
        if(task.dueDate === dateToday) {
            result.push(task);
        }
    });
    return result;
}



