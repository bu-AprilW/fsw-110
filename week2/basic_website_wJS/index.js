var navbar = document.createElement("nav");
document.append(navbar);

var header = document.createElement("h1");
var text = document.createTextNode("Project 1");
header.appendChild(text);
document.body.append(header);

var par = document.createElement("p");
par.textContent = "All of this was created with JavaScript.";
document.body.append(par);

var list = document.createElement("ol");
var li = document.createElement("li");
let items = ['One', 'Two', 'Three'];

li.append(items);
list.append(li);
document.body.append(list);

var footer = document.createElement("footer");
document.body.append(footer);