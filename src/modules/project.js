import { querySelector, createElement } from "../domUtils";
import { projects, projectStorage } from "./storage";
const generateUniqueId = require('generate-unique-id');

// Factory function for project
const Project = (id, title, tasks) => {
    return {id, title, tasks: []}
}

// Function to prefill selected project on dropdown
// Input: Page Name String
// Output: String
export function getProjectName(pageName) {
    let prefill = 'Select Project';
    projects.forEach((project) => {
        if(project.title === pageName) {
            prefill = pageName;
        }
    });
    return prefill
}

// Function to add a new project
export function addNewProject() {
    const title = querySelector('#projectTitle').value;
    querySelector('#projectTitle').value = '';

    let id = generateUniqueId({length: 2});

    let newProject = Project(id, title);
    projects.push(newProject);
    projectStorage.saveProjects();
}

export function assignProject(task) {
    projects.forEach(project => {
        if(task.project === project.title) {
            project.tasks.push(task);
            projectStorage.saveProjects();
        }
    });
}

// Function to create project dropdown list
// Output: HTML element
export function createProjectDropdown() {
    const projectList = createElement('div', {class: 'project-list'});
    projects.forEach((project, id) => {
        let projectOption = createElement('div', {class:'project-item', text: project.title, id: id});
        projectList.append(projectOption);
    });
    return projectList
}


