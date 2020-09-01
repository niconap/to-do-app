import makeTask from "./modules/makeTask.js"
import render from "./modules/render.js"
import addMenu from "./modules/add.js"

// Store all projects and tasks in two seperate arrays
let projects = [];
let tasks = [];
let menu = document.getElementById("menu");

// Add an eventlistener to the add button
// Add a button that will submit a new task
let addButton = document.getElementById("plus");
addButton.addEventListener("click", function(){
    addMenu(projects);
    let complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.addEventListener("click", function() {

    });
    menu.appendChild(complete);
});

// Create a default project with a default task
projects.push("Default");
tasks.push(makeTask("Default", "default task", "none", "01-01-2020", "high"));

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