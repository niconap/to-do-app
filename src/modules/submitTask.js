import { submitProject } from "./newProject";

// Return the input values to make a task
const submitTask = function() {
    let newTask = [];

    newTask.push(document.getElementById("projectselect").value);
    newTask.push(document.getElementById("tasktitle").value);
    newTask.push(document.getElementById("taskdescription").value);
    newTask.push(document.getElementById("taskdate").value);
    newTask.push(document.getElementById("taskpriority").value);
    return newTask;
}

export default submitTask