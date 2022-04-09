import { querySelector, querySelectorAll, toggleClasses } from "../domUtils";
import { addNewProject } from "./project";
import { displayPage, displayPageTasks, displayProjects } from "./view";
import { filterProjectTasks, filterTasksToday } from "./task";
import { tasks } from "./storage";

export const navListeners = () => {
    // Listener to return home
    const homeListener = () => {
        const logo = querySelector('#logo');
        logo.addEventListener('click', () => {
            displayPage('All Tasks');
            displayPageTasks(tasks, 'All Tasks');
        })
    }

    // Listener to open and close navbar
    const hamburgerListener = () => {
        const hamburger = querySelector('#hamburger');
        const navBar = querySelector('nav')
        hamburger.addEventListener('click', () => {
            navBar.classList.toggle('open');
        });
    };

    // Listener to open Add Project Form
    const projectForm = querySelector('#projectForm');
    const addProjectListener = () => {
        const openProjectForm = querySelector('#openProjectForm');
        openProjectForm.addEventListener('click', () => {
            toggleClasses(projectForm, 'hidden', 'active');
        });
    };

    // Listener to submit project
    const submitProjectListener = () => {
        const submitProject = querySelector('#submitProject');
        submitProject.addEventListener('click', (e) => {
            e.preventDefault();
            let pageName = querySelector('#pageName').textContent;
            toggleClasses(projectForm, 'active', 'hidden');
            addNewProject();
            displayPage(pageName);
            displayProjects();
            openProjectListener();
        });
    }

    // Listener to open projects
    const openProjectListener = () => {
        const projectEntries = querySelectorAll('.project-entry');
        projectEntries.forEach((projectEntry) => {
            projectEntry.addEventListener('click', () => {
                let pageName = projectEntry.textContent;
                displayPage(pageName);
                let taskArr = filterProjectTasks(pageName);
                displayPageTasks(taskArr);
            });
        });
    }

    // Listener for nav links
    const navLinksListener = () => {
        const navLinks = querySelectorAll('.nav-link');
        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', () => {
                let pageName = navLink.textContent;
                displayPage(pageName);
                let taskArr = filterTasksToday();
                displayPageTasks(taskArr);
            });
        });
    }
    homeListener();
    hamburgerListener();
    addProjectListener();
    openProjectListener();
    navLinksListener();
    submitProjectListener();
    return {
        homeListener,
        hamburgerListener,
        addProjectListener,
        navLinksListener,
        submitProjectListener,
        openProjectListener
    }
};