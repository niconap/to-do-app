// Create a menu to create a new project
const newProject = function () {
    let container = document.getElementById("menu");
    container.innerHTML = "";

    let title = document.createElement("h1");
    title.innerHTML = "Create new Project";
    title.setAttribute("id", "menutitle");
    container.appendChild(title);

    let quit = document.createElement("button");
    quit.innerHTML = "x";
    quit.setAttribute("id", "quit");
    quit.addEventListener("click", removeMenu);
    container.appendChild(quit);

    let projectTitle = document.createElement("input");
    projectTitle.setAttribute("type", "text");
    projectTitle.setAttribute("placeholder", "Title");
    projectTitle.setAttribute("id", "projecttitle");
    container.appendChild(projectTitle);
    
    function removeMenu() {
        container.innerHTML = "";
    }
}

export default newProject
