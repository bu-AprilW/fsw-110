for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello World";
    document.body.appendChild(ele);
}

var header = document.getElementsByTagName("h1")
for (var i = 0; i < header.length; i++) {
    header[i].style.fontFamily = "Comic Sans MS";
    header[i].style.color = "teal";
    header[i].style.textAlign = "center";
    header[i].style.border = "medium double black";
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (names[0] of ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']) {
    console.log(names[0]);
}