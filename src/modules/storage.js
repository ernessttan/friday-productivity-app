let tasks;

const storage = (() => {
    const DEFAULT_TASKS = [
        {
            title: 'Example Task',
            description: 'I am an example task!'
        }
    ];
    const setItems = () => {
        // Updates localStorage data
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getItems = () => {
        let tasks = JSON.parse(window.localStorage.getItem('tasks'));
        return tasks
        
    }
    const reload = () => {
        if(localStorage.getItem('tasks')) {
            // Retrives Data from localStorage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } else {
            tasks = DEFAULT_TASKS;
        }
    };
    reload();
    setItems();
    return {
        setItems,
        getItems,
        reload
    }
})();

export {storage, tasks}