import './styles/style.css';
import { querySelector } from "./domUtils";
import { navListeners } from './modules/nav';
import { displayPage, displayPageTasks, displayProjects } from './modules/view';
import {tasks} from './modules/storage';

window.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    displayPage('All Tasks');
    displayPageTasks(tasks, 'All Tasks');
    navListeners();
});
















