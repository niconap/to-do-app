// Create a menu for entering a new task
const addMenu = function (projects) {
    let container = document.getElementById("menu");
    container.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "Create new Task";
    title.setAttribute("id", "menutitle");
    container.appendChild(title);

    let quit = document.createElement("button");
    quit.innerHTML = "x";
    quit.addEventListener("click", removeMenu);
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
    container.appendChild(taskDate);
    
    let taskPriority = document.createElement("select");
    taskPriority.setAttribute("id", "taskpriority");
    container.appendChild(taskPriority);

    let high = document.createElement("option");
    high.setAttribute("value", "high");
    high.innerHTML = "High";
    taskPriority.appendChild(high);

    let medium = document.createElement("option");
    medium.setAttribute("value", "medium");
    medium.innerHTML = "Medium";
    taskPriority.appendChild(medium);

    let low = document.createElement("option");
    low.setAttribute("value", "low");
    low.innerHTML = "Low";
    taskPriority.appendChild(low);

    let projectSelect = document.createElement("select");
    projectSelect.setAttribute("id", "projectselect");
    container.appendChild(projectSelect);

    projects.forEach(project => {   
        let option = document.createElement("option");
        option.setAttribute("value", project);
        option.innerHTML = project;
        projectSelect.appendChild(option);
    });

    function removeMenu() {
        container.innerHTML = "";
    }
}

export default addMenu