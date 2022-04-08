import './styles/style.css';
import { querySelector } from "./domUtils";
import { navListeners } from './modules/nav';
import { displayPage, displayPageTasks } from './modules/view';
import {tasks} from './modules/storage';

window.addEventListener('DOMContentLoaded', () => {
    displayPage('All Tasks');
    displayPageTasks(tasks, 'All Tasks');
});
















