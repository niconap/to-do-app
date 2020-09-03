// Return an object in order to add a task to the array
const makeTask = (project, title, description, due, priority, completed) => {
    return {project, title, description, due, priority, completed};
}

export default makeTask