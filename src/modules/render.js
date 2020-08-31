const render = function(projects, tasks) {
    let index = 0;
    let container = document.getElementById("content");
    container.innerHTML = "";
    
    // Render the project containers
    if(projects.length != 0) {
        projects.forEach(project => {
            let projectContainer = document.createElement("div");
            projectContainer.setAttribute("id", project);
            container.appendChild(projectContainer);
            projectContainer = document.getElementById(project);
            let projectTitle = document.createElement("h1");
            projectTitle.innerHTML = project;
            projectContainer.appendChild(projectTitle);
        })
    }

    // Render the task containers and put them in the right project container
    if(tasks.length != 0) {
        tasks.forEach(task => {
            let projectName = task.project;
            let projectContainer = document.getElementById(projectName);
            let taskWrapper = document.createElement("div");
            taskWrapper.setAttribute("id",index);
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
            due.innerHTML = taskDue;
            taskWrapper.appendChild(due);
            
            let priority = document.createElement("p");
            priority.setAttribute("class","taskelement");
            priority.innerHTML = taskPriority;
            taskWrapper.appendChild(priority);

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkbox.setAttribute("id","check" + index);
            taskWrapper.appendChild(checkbox);

            let label = document.createElement("label");
            label.setAttribute("for","checkbox" + index);
            label.innerHTML = "Done";
            taskWrapper.appendChild(label);
            index += 1;
        });
    }
}

export default render