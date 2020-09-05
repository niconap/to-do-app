// Return an object with all necessary data for making a task
const makeTask = (project, title, description, due, priority, completed) => {
    return {
        project, 
        title, 
        description, 
        due, 
        priority, 
        completed
    };
}

// Return the input values to make a task
const submitTask = {
    submit: function() {
        let newTask = [];
        newTask.push(document.getElementById("projectselect").value);
        newTask.push(document.getElementById("tasktitle").value);
        newTask.push(document.getElementById("taskdescription").value);
        newTask.push(document.getElementById("taskdate").value);
        newTask.push(document.getElementById("taskpriority").value);
        return newTask;
    }
}

// Return the entered value to make a project
const makeProject = {
    submit: function () {
        return document.getElementById("projecttitle").value;
    }
}

// Create a menu to make a new task in the DOM
const addMenu = {
    createMenu: function () {
        let container = document.getElementById("menu");
        container.innerHTML = "";

        let title = document.createElement("h1");
        title.innerHTML = "Create new Task";
        title.setAttribute("id", "menutitle");
        container.appendChild(title);

        let quit = document.createElement("button");
        quit.innerHTML = "x";
        quit.setAttribute("id", "quit");
        quit.addEventListener("click", this.removeMenu);
        container.appendChild(quit);

        let taskTitle = document.createElement("input");
        taskTitle.setAttribute("type", "text");
        taskTitle.setAttribute("placeholder", "Title");
        taskTitle.setAttribute("id", "tasktitle");
        container.appendChild(taskTitle);

        let taskDescription = document.createElement("input");
        taskDescription.setAttribute("type", "text");
        taskDescription.setAttribute("placeholder", "Description");
        taskDescription.setAttribute("id", "taskdescription");
        container.appendChild(taskDescription);

        let taskDate = document.createElement("input");
        taskDate.setAttribute("type", "date");
        taskDate.setAttribute("id", "taskdate");
        taskDate.setAttribute("onkeydown", "return false");
        container.appendChild(taskDate);

        let today = new Date(),
        day = today.getDate(),
        month = today.getMonth()+1, //January is 0
        year = today.getFullYear();
         if(day<10){
                day='0'+day
            } 
        if(month<10){
            month='0'+month
        }
        today = year+'-'+month+'-'+day;

        document.getElementById("taskdate").setAttribute("min", today);

        
        let taskPriority = document.createElement("select");
        taskPriority.setAttribute("id", "taskpriority");
        container.appendChild(taskPriority);

        let high = document.createElement("option");
        high.setAttribute("value", "High");
        high.innerHTML = "High";
        taskPriority.appendChild(high);

        let medium = document.createElement("option");
        medium.setAttribute("value", "Medium");
        medium.innerHTML = "Medium";
        taskPriority.appendChild(medium);

        let low = document.createElement("option");
        low.setAttribute("value", "Low");
        low.innerHTML = "Low";
        taskPriority.appendChild(low);

        let projectSelect = document.createElement("select");
        projectSelect.setAttribute("id", "projectselect");
        container.appendChild(projectSelect);

        this.createOptions();
    },
    createOptions: function() {
        projects.forEach(project => {
            let projectSelect = document.getElementById("projectselect");   
            let option = document.createElement("option");
            option.setAttribute("value", project);
            option.innerHTML = project;
            projectSelect.appendChild(option);
        });
    },
    removeMenu: function() {
        let container = document.getElementById("menu");
        container.innerHTML = "";
    }
}

// Render the tasks and the projects in the DOM
const render = {
    index: 0,
    renderProjects: function() {
        let container = document.getElementById("content");
        container.innerHTML = "";
        
        // Render the project containers
        if(projects.length != 0 && projects[0] != "") {
            projects.forEach(project => {
                let projectContainer = document.createElement("div");
                projectContainer.setAttribute("id", project);
                projectContainer.setAttribute("class", "project");
                container.appendChild(projectContainer);
                projectContainer = document.getElementById(project);
                let projectTitle = document.createElement("h1");
                projectTitle.innerHTML = project;
                projectContainer.appendChild(projectTitle);
            })

            for (let j = 0; j < projects.length; j++) {
                let currentProject = document.getElementById(projects[j]);
                let deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", "deletetask");
                deleteButton.addEventListener("click", function() {
                    let currentProject = projects[j];
                    projects.splice(j, 1);
                    let number = 0;
                    tasks.forEach(task => {
                        if (task.project == currentProject) {
                            tasks.splice(number, 1);
                            number += 1;
                        }
                    });
                    render.renderProjects();
                    render.renderTasks();
                });
                deleteButton.innerHTML = "x";
                currentProject.appendChild(deleteButton);
            }
        }
    },

    renderTasks: function() {
        if (render.index != 0) {
            render.index = 0;
        }
        // Render the task containers and put them in the right project container
        if(tasks.length != 0) {
            tasks.forEach(task => {
                let projectName = task.project;
                let projectContainer = document.getElementById(projectName);
                let taskWrapper = document.createElement("div");
                taskWrapper.setAttribute("id", this.index);
                projectContainer.appendChild(taskWrapper);
                let taskTitle = task.title;
                let taskDescription = task.description;
                let taskDue = task.due;
                let taskPriority = task.priority;

                let title = document.createElement("p");
                title.setAttribute("class","tasktitle");
                title.innerHTML = taskTitle;
                taskWrapper.appendChild(title);

                let description = document.createElement("p");
                description.setAttribute("class","taskelement");
                description.innerHTML = taskDescription;
                taskWrapper.appendChild(description);

                let due = document.createElement("p");
                due.setAttribute("class","taskelement");
                console.log(taskDue);
                if (taskDue == "") {
                    due.innerHTML = "Due date: N/A";
                } else {
                    due.innerHTML = "Due date: " + taskDue;
                }
                taskWrapper.appendChild(due);
                
                let priority = document.createElement("p");
                priority.setAttribute("class","taskelement");
                priority.innerHTML = taskPriority + " priority";
                taskWrapper.appendChild(priority);

                let checkbox = document.createElement("input");
                checkbox.setAttribute("type","checkbox");
                checkbox.setAttribute("id", "check" + this.index);
                if (task.completed == "Yes") {
                    checkbox.checked = true;
                }
                taskWrapper.appendChild(checkbox);

                let label = document.createElement("label");
                label.setAttribute("for","checkbox" + this.index);
                label.innerHTML = "Done";
                taskWrapper.appendChild(label);
                this.index += 1;
            });
        }

        for (let i = 0; i < tasks.length; i++) {
            let currentTask = document.getElementById(i);
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", "deleteproject");
            deleteButton.addEventListener("click", function(){
                tasks.splice(i, 1);
                render.renderProjects();
                render.renderTasks();
            });
            deleteButton.innerHTML = "x";
            currentTask.appendChild(deleteButton);

            let checkbox = document.getElementById("check" + i);
            checkbox.addEventListener("click", function () {
                if (tasks[i].completed == "No") {
                    tasks[i].completed = "Yes";
                } else {
                    tasks[i].completed = "No";
                }
                render.renderProjects();
                render.renderTasks();
            })
        }

        localStorage.setItem("projects", projects);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },

}

// Create a menu to create a new project
const newProject = {
    createMenu: function() {
        let container = document.getElementById("menu");
        container.innerHTML = "";

        let title = document.createElement("h1");
        title.innerHTML = "Create new Project";
        title.setAttribute("id", "menutitle");
        container.appendChild(title);

        let quit = document.createElement("button");
        quit.innerHTML = "x";
        quit.setAttribute("id", "quit");
        quit.addEventListener("click", this.removeMenu);
        container.appendChild(quit);

        let projectTitle = document.createElement("input");
        projectTitle.setAttribute("type", "text");
        projectTitle.setAttribute("placeholder", "Title");
        projectTitle.setAttribute("id", "projecttitle");
        container.appendChild(projectTitle);
    },
    removeMenu: function() {
        let container = document.getElementById("menu");
        container.innerHTML = "";
    }
}

// Add an eventlistener to the add button
// Add a button that will submit a new task
const buttons = {
    taskButton: function() {
        let taskButton = document.getElementById("plustask");
        taskButton.addEventListener("click", function(){
            addMenu.createMenu();
            alerted = false;
            let complete = document.createElement("button");
            complete.innerHTML = "Complete";
            complete.setAttribute("id", "complete");
            complete.addEventListener("click", function() {
                let newTask = submitTask.submit();
                if (newTask[1] == "" || newTask[2] == "") {
                    if (alerted == false) {
                        let alert = document.createElement("p");
                        alert.setAttribute("id", "alert");
                        alert.innerHTML = "Please enter something in all inputs!"
                        menu.appendChild(alert);
                        alerted = true;
                    }
                } else if (newTask[0] == "") {
                    if (alerted == false) {
                        let alert = document.createElement("p");
                        alert.setAttribute("id", "alert");
                        alert.innerHTML = "Please create a project first!"
                        menu.appendChild(alert);
                        alerted = true;
                    }
                } else {
                    menu.innerHTML = "";
                    alerted = false;
                    tasks.push(makeTask(newTask[0], newTask[1], newTask[2], newTask[3], newTask[4]));
                    render.renderProjects();
                    render.renderTasks();
                }
            });
            menu.appendChild(complete);
        });
    },

    projectButton: function() {
        let projectButton = document.getElementById("plusproject");
        projectButton.addEventListener("click", function() {
            newProject.createMenu();
            alerted = false;
            let complete = document.createElement("button");
            complete.innerHTML = "Complete";
            complete.setAttribute("id", "complete");
            complete.addEventListener("click", function() {
                let newProject = makeProject.submit();
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
                    render.renderProjects();
                    render.renderTasks();
                }
            });
            menu.appendChild(complete);
        });
    }
}

// Create a default project with a default task
const defaultTask = {
    create: function () {
        if (localStorage.length == 0) {
            projects.push("Default");
        }
        if (localStorage.length == 0) {
            tasks.push(makeTask("Default", "Default task", "None", "01-01-2020", "High", "No"));
        }
    }  
}

// Store all projects and tasks in two seperate arrays
let projects = [];
let tasks = [];
if (localStorage.length != 0){
    let projectString = localStorage.getItem("projects").split(",");
    projects = projectString;
    if (projects[0] == "") {
        projects.splice(0, 1);
    }
    let taskString = JSON.parse(localStorage.getItem("tasks"));
    tasks = taskString;
}
let menu = document.getElementById("menu");
let alerted = false;

// Add eventlisteners to the buttons
buttons.taskButton();
buttons.projectButton();

// Create a default project and task if there's nothing in localStorage
defaultTask.create();

// Render the projects with their tasks
// Save the data locally
render.renderProjects();
render.renderTasks();