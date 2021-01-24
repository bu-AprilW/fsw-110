var button = document.getElementById("button")

function changeColor() {
    button.addEventListener("mouseover", changeColor);
    button.style.backgroundColor = "blue";
}

function changeColor2() {
    button.addEventListener("mousedown", changeColor);
    button.style.backgroundColor = "red";
}

function changeColor3() {
    button.addEventListener("mouseup", changeColor3);
    button.style.backgroundColor = "yellow";
}

function changeColor4() {
    button.addEventListener("dblclick", changeColor4);
    button.style.backgroundColor = "green";
}

function changeColor5() {
    button.addEventListener("wheel", changeColor5);
    button.style.backgroundColor = "orange";
}

function changeColor6($event) {
    button.addEventListener("keydown", changeColor6);
    if ($event.key == 'b') {
        button.style.backgroundColor = "blue";
    }
    if ($event.key == 'r') {
        button.style.backgroundColor = "red";
    }
    if ($event.key == 'y') {
        button.style.backgroundColor = "yellow";
    }
    if ($event.key == 'g') {
        button.style.backgroundColor = "green";
    }
    if ($event.key == 'o') {
        button.style.backgroundColor = "orange";
    }
}


button.addEventListener("mouseover", changeColor);
button.addEventListener("mousedown", changeColor2);
button.addEventListener("mouseup", changeColor3);
button.addEventListener("dblclick", changeColor4);
button.addEventListener("wheel", changeColor5);
button.addEventListener("keydown", changeColor6);