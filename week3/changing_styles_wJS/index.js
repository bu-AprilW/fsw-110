for (let i = 0; i < 5; i++) {
    const ele = document.createElement("h2")
    ele.classList.add("border");
    ele.innerHTML = "Changing Styles";
    document.body.appendChild(ele);
}


var header = document.getElementsByTagName("h2");
for (var i = 0; i < header.length; i++) {
    header[i].style.fontSize = "25px";
    header[i].style.fontWeight = "lighter";
    header[i].style.fontFamily = "Sans Serif";
    header[i].style.color = "cornflowerblue";
}