
function addTodo() {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Create the task to add and the delete button
    var newContent = document.createTextNode(document.getElementById("jour").value + ": "
    + document.getElementById("tache").value);
    var newButton = document.createElement("button");
    newButton.innerHTML = "🗑";
    newButton.addEventListener("click", (event) => {
        event.target.parent.remove();
   })
    // Append the text node to the div
    newDiv.appendChild(newContent);
    newDiv.appendChild(newButton);
    // Append the new div to the todo-container
    var currentDiv = document.getElementById("todo-container");
    currentDiv.appendChild(newDiv);
}