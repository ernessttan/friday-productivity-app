import { createElement } from "../domUtils";

const main = document.querySelector('main');
function displayInbox() {
    const inbox = createElement('div', {id: 'inbox'});
    inbox.innerHTML = `
    <h2>Inbox</h2>
    <div class="hidden" id="add-container">
        <div id="add-task">
            <input type="text" id="title-input" placeholder="Untitled">
            <textarea placeholder="Description" id="description-input"></textarea>
            <div id="details-container">
                <input type="date" id="date-input">
            </div>  
        </div>
        <div id="submit-container">
            <button id="cancel-task">Cancel</button>
            <button id="submit-task">Add Task</button>
        </div>
    </div>
    <button type="button" id="add-btn">
        <i class="fa-solid fa-plus"></i>
        <p>Add Task</p>
    </button>
    <button type="button" id="test">Hello</button>`;
    main.append(inbox);
    const addButton = document.querySelector('#add-btn');
    const addContainer = document.querySelector('#add-container');
    addButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('yo');
        addContainer.classList.toggle('active');
    });
}

export { displayInbox }