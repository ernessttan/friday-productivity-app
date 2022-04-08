import { querySelector, querySelectorAll, toggleClasses } from "../domUtils";
import { addNewProject } from "./project";
export const navListeners = (() => {
    // Listener to open and close navbar
    const hamburgerListener = () => {
        const hamburger = querySelector('#hamburger');
        const navBar = querySelector('nav')
        hamburger.addEventListener('click', () => {
            navBar.classList.toggle('open');
        });
    };

    // Listener to open Add Project Form
    const addProjectListener = () => {
        const openProjectForm = querySelector('#openProjectForm');
        const projectForm = querySelector('#projectForm');
        openProjectForm.addEventListener('click', () => {
            toggleClasses(projectForm, 'hidden', 'active');
        });
    };

    // Listener to submit project
    const submitProjectListener = () => {
        const submitProject = querySelector('#submitProject');
        submitProject.addEventListener('click', () => {
            addNewProject();
        });
    }

    // Listener for nav links
    const navLinksListener = () => {
        const navLinks = querySelectorAll('.nav-link');
        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', () => {

            })
        });
    }
    hamburgerListener();
    addProjectListener();
    // navLinksListener();
    submitProjectListener();
    return {
        hamburgerListener,
        addProjectListener,
        submitProjectListener
    }
})();