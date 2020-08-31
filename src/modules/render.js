const render = function(projects, tasks) {
    let container = document.getElementById("content");
    projects.forEach(project => {
        let projectContainer = document.createElement("div");
        projectContainer.setAttribute("id", project);
        container.appendChild(projectContainer);
        projectContainer = document.getElementById(project);
        let projectTitle = document.createElement("h1");
        projectTitle.innerHTML = project;
        projectContainer.appendChild(projectTitle);
    })
    tasks.forEach(task => {
        let projectName = task.project;
        let projectContainer = document.getElementById(projectName);
        let taskTitle = task.title;
        let taskDescription = task.description;
        let taskDue = task.due;
        let taskPriority = task.priority;

        let title = document.createElement("p");
        title.setAttribute("class","tasktitle");
        title.innerHTML = taskTitle;
        projectContainer.appendChild(title);

        let description = document.createElement("p");
        description.setAttribute("class","taskelement");
        description.innerHTML = taskDescription;
        projectContainer.appendChild(description);

        let due = document.createElement("p");
        due.setAttribute("class","taskelement");
        due.innerHTML = taskDue;
        projectContainer.appendChild(due);
        
        let priority = document.createElement("p");
        priority.setAttribute("class","taskelement");
        priority.innerHTML = taskPriority;
        projectContainer.appendChild(priority);
    });
}

export default render