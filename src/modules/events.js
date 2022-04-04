export const initEvents = (() => {
    const addTaskEvents = () => {
        
        const taskButton = document.querySelector('#task-btn');
        const addTask = document.querySelector('#add-task');
        taskButton.addEventListener('click', function() {       
            addTask.classList.remove('hidden');
            addTask.classList.toggle('active');
        });
    }
})();