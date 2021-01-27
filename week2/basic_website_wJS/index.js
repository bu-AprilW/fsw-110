var navbar = document.createElement("nav");
var node = document.createElement("a");
var home = document.createTextNode("Home");
node.appendChild(home);
navbar.appendChild(node);
document.body.append(navbar);

var header = document.createElement("h1");
var text = document.createTextNode("Project 1");
header.appendChild(text);
document.body.append(header);

var par = document.createElement("p");
par.textContent = "All of this was created with JavaScript.";
document.body.append(par);

var list = document.createElement("ol");
var li = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");

let item = ["one"];
li.append(item);
list.append(li);

let item2 = ["two"];
li2.append(item2);
list.append(li2);

let item3 = ["three"];
li3.append(item3);
list.append(li3);

document.body.append(list);

var footer = document.createElement("footer");
var author = document.createTextNode("By: April Williams");
footer.appendChild(author);
document.body.append(footer);