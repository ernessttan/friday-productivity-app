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


