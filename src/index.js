import makeTask from "./modules/makeTask.js"
import render from "./modules/render.js"

// Store all projects and tasks in two seperate arrays
let projects = [];
let tasks = [];

// Create a default project with a default task
projects.push("default");
tasks.push(makeTask("default", "default task", "none", "01-01-2020", "high"));

// Render the projects with their tasks
render(projects, tasks);