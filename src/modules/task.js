import { taskStorage, tasks, projects, projectStorage } from "./storage";

const Task = (title, description, dueDate, project) => {
    return {title, description, dueDate, project}
}

export function addNewTask() {
    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#date-input').value;
    const project = document.querySelector('.selected').id;

    let newTask = Task(title, description, dueDate, project);
    // Need to search localStorage projects for the right project id
    // Push the task into the project
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

