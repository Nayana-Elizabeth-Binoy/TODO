function previewTask() {
    let inputValue = document.getElementById("taskInput").value;
    document.getElementById("preview").textContent = inputValue;
}

function addTask(event) {
    event.preventDefault();

    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth() + 1; // months start from 0
    let year = today.getFullYear();

    let formattedDate = `${date}-${month}-${year}`;

    let li = document.createElement("li");
    li.textContent = `${taskValue} (Added on: ${formattedDate})`;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}