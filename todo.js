// Select the todo list element
const todoListElement = document.getElementById('todo-list');
let completedCount = 0; // Keep track of completed tasks

// Hardcoded normal English descriptions
const descriptions = [
    'Learn javascript',
    'Complete todo app',
    'Review PRs',
    'Attend meeting',
    'Workout',
    'Gaming',
    'Reading books'
];

// Function to fetch todos from the API
function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=7') //
        .then(response => response.json())
        .then(todos => {
            todos.forEach((todo, index) => {
                // Create a list item for each todo
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';

                // Checkbox to mark the todo as completed
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'form-check-input me-2';

                // Event listener to handle completion
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        completedCount++;
                    } else {
                        completedCount--;
                    }
                    checkForFiveCompleted(); // Check if 5 tasks are completed
                });

                // Use normal English descriptions for the todo titles
                const todoTitle = descriptions[index] || 'Task ' + (index + 1);
                
                // Append the checkbox and title to the list item
                
                li.appendChild(document.createTextNode(todoTitle));
                li.appendChild(checkbox);

                // Append the list item to the todo list
                todoListElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}

// Function to check if 5 todos are completed
function checkForFiveCompleted() {
    return new Promise((resolve) => {
        if (completedCount === 5) {
            alert('Congrats. 5 Tasks have been Successfully Completed');
            resolve();
        }
    });
}

// Fetch todos when the page loads
window.onload = fetchTodos;