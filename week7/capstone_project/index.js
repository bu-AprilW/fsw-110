const theForm = document.theForm;

theForm.addEventListener("submit", e => {
    e.preventDefault();

    let task = theForm.task.value;
    let taskDescription = theForm.taskDescription.value;
    let taskItems = document.getElementById("task_items");
    let newDiv = document.createElement("div");
    let spanTask = document.createElement("span");
    let spanDelete = document.createElement("span");
    let spanDescription = document.createElement("span");
    let deleteBtn = document.createElement("button");

    newDiv.style.width = "300px";
    spanTask.style.fontWeight = "bold";
    spanDelete.style.float = "right";
    spanDescription.style.display = "block";

    spanTask.textContent = task;
    spanDescription.textContent = taskDescription;

    with (deleteBtn) {
        classList.add("delete_btn");
        addEventListener("click", e => {
            newDiv.remove();
        });
    }
    spanDelete.appendChild(deleteBtn);

    with (newDiv){
        appendChild(spanTask);
        appendChild(spanDelete);
        appendChild(spanDescription);
    }
    taskItems.appendChild(newDiv);

    with (theForm) {
        task.value = "";
        taskDescription.value = "";
    }
});