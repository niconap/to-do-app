import makeTask from "./modules/makeTask.js"
import render from "./modules/render.js"

// Store all projects and tasks in two seperate arrays
let projects = [];
let tasks = [];

// Create a default project with a default task
projects.push("default");
tasks.push(makeTask("default", "default task", "none", "01-01-2020", "high"));
tasks.push(makeTask("default", "default task", "none", "01-01-2020", "low"));

// Render the projects with their tasks
render(projects, tasks);
createButtons();

// Insert "Delete" buttons into each task and give them event listeners
function createButtons() {
    for (let i = 0; i < tasks.length; i++) {
        let currentTask = document.getElementById(i);
        let deleteButton = document.createElement("button");
        deleteButton.addEventListener("click", function(){
            tasks.splice(i, 1);
            render(projects, tasks);
            createButtons();
        });
        deleteButton.innerHTML = "Delete";
        currentTask.appendChild(deleteButton);
    }
}