document.getElementById("div1").style.margin = "150px 10px 20px 350px";
document.getElementById("div2").style.margin = "150px 10px 20px 340px";
document.getElementById("div3").style.margin = "150px 10px 20px 341px";
document.getElementById("button1").style.backgroundColor = "darkgray";
document.getElementById("button2").style.backgroundColor = "darkgray";
document.getElementById("button3").style.backgroundColor = "darkgray";
document.body.style.backgroundColor = "bisque";

function add() {
    var a,b,c;
    a = Number(document.getElementById("num1").value);
    b = Number(document.getElementById("num2").value);
    c = a + b;
    document.getElementById("result").value = c;
};

function subtract() {
    var a,b,c;
    a = Number(document.getElementById("numA").value);
    b = Number(document.getElementById("numB").value);
    c = a - b;
    document.getElementById("result2").value = c;
};

function multiply() {
    var a,b,c;
    a = Number(document.getElementById("numOne").value);
    b = Number(document.getElementById("numTwo").value);
    c = a * b;
    document.getElementById("result3").value = c;
};