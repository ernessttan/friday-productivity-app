import { projectStorage, projects } from "./storage";

// Project factory function
const Project = (title) => {
    return {title, tasks: []}
}

// Function to add a new project
export function addNewProject() {
    const title = document.querySelector('#project-title').value;

    let newProject = Project(title);
    projects.push(newProject);
    projectStorage.saveProjects();
}

// Function to assign task to a project
export function assignProject(task) {
    projects.forEach(project => {
        if(task.project === project.title) {
            project.tasks.push(task);
        }
    });
}


