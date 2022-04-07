import { projectStorage, projects } from "./storage";
import { querySelector } from "../domUtils";

// Project factory function
const Project = (title) => {
    return {title, tasks: []}
}

// Function to add a new project
export function addNewProject() {
    const title = querySelector('#project-title').value;
    querySelector('#project-title').value = '';

    let newProject = Project(title);
    projects.push(newProject);
    projectStorage.saveProjects();
}

// Function to assign task to a project
export function assignProject(task) {
    projects.forEach(project => {
        if(task.project === project.title) {
            project.tasks.push(task);
            projectStorage.saveProjects();
        }
    });
}

// Function to prefill project selection when adding tasks
export function getProjectName(pageName) {
    let prefill = ''
    projects.forEach((project) => {
        if(project.title === pageName) {
            prefill = pageName
        }
    });
    return prefill
}


