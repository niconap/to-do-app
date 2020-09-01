import makeTask from "./modules/makeTask.js"
import render from "./modules/render.js"
import addMenu from "./modules/add.js"
import submitTask from "./modules/submitTask.js"
import newProject from "./modules/newProject.js"
import submitProject from "./modules/submitProject.js"

// Store all projects and tasks in two seperate arrays
let projects = [];
let tasks = [];
let menu = document.getElementById("menu");
let alerted = false;

// Add an eventlistener to the add button
// Add a button that will submit a new task
let taskButton = document.getElementById("plustask");
taskButton.addEventListener("click", function(){
    addMenu(projects);
    alerted = false;
    let complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.addEventListener("click", function() {
        let newTask = submitTask();
        if (newTask[1] == "" || newTask[2] == "" || newTask[3] == "") {
            if (alerted == false) {
                let alert = document.createElement("p");
                alert.setAttribute("id", "alert");
                alert.innerHTML = "Please enter something in all inputs!"
                menu.appendChild(alert);
                alerted = true;
            }
        } else {
            menu.innerHTML = "";
            alerted = false;
            tasks.push(makeTask(newTask[0], newTask[1], newTask[2], newTask[3], newTask[4]));
            render(projects, tasks);
        }
    });
    menu.appendChild(complete);
});

let projectButton = document.getElementById("plusproject");
projectButton.addEventListener("click", function() {
    newProject();
    alerted = false;
    let complete = document.createElement("button");
    complete.innerHTML = "Complete";
    complete.addEventListener("click", function() {
        let newProject = submitProject();
        if (newProject == "") {
            if (alerted == false) {
                let alert = document.createElement("p");
                alert.setAttribute("id", "alert");
                alert.innerHTML = "Please enter something in all inputs!"
                menu.appendChild(alert);
                alerted = true;
            }
        } else {
            menu.innerHTML = "";
            alerted = false;
            projects.push(newProject);
            render(projects, tasks);
        }
    });
    menu.appendChild(complete);
});

// Create a default project with a default task
projects.push("Default");
tasks.push(makeTask("Default", "Default task", "None", "01-01-2020", "High"));

// Render the projects with their tasks
render(projects, tasks);