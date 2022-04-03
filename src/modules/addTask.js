import { storage, tasks } from "./storage";

const Task = (title, description, dueDate) => {
    return {title, description, dueDate}
}

function addNewTask() {
    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#date-input').value;
    
    const newTask = Task(title, description, dueDate);
    console.log(newTask);
    tasks.push(newTask);
    storage.setItems();
}

export {addNewTask}