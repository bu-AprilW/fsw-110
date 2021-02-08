var ele = document.getElementsByClassName("red-box");
ele[0].addEventListener("mousemove", showCords);

function showCords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var cord = "X cords: " + x +", Y cords:" + y;
ele[0].innerHTML = cord;
}


document.getElementsByClassName("red-box");
ele[0].addEventListener("mouseout", clearCord);

function clearCord() {
    ele[0].innerHTML = "";
}

document.title = "Mousemove";