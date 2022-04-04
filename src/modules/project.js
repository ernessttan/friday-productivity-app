import { projectStorage, projects } from "./storage";


const Project = (title) => {
    return {title, tasks: []}
}

export function addNewProject() {
    const title = document.querySelector('#project-title').value;

    let newProject = Project(title);
    projects.push(newProject);
    projectStorage.saveProjects();
}
