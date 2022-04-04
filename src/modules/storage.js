export let projects;
export let tasks;

export const projectStorage = (() => {
    const saveProjects = () => {
        localStorage.setItem('projects', JSON.stringify(projects));
    };
    const getProjects = () => {
        projects = JSON.parse(window.localStorage.getItem('projects'));
    };
    const reloadProjects = () => {
        if(localStorage.getItem('projects')) {
            projects = JSON.parse(localStorage.getItem('projects'));
        } else {
            projects = [];
        }
    }
    reloadProjects();
    saveProjects();

    return {
        saveProjects,
        getProjects,
        reloadProjects
    }
})();

export const taskStorage = (() => {
    
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };
    const getTasks = () => {
        tasks = JSON.parse(window.localStorage.getItem('tasks'));
    };
    const reloadTasks = () => {
        if(localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } else {
            tasks = [];
        }
    }
    reloadTasks();
    saveTasks();

    return {
        saveTasks,
        getTasks,
        reloadTasks
    }
})();















