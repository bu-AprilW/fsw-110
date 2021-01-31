const form = document.myForm

form.addEventListener("submit", (event) => {
    event.preventDefault();



    const checkedBoxes = []

    for(let i = 0; i < form.restrictions.length; i++) {
        if (form.restrictions[i].checked) {
            checkedBoxes.push(form.restrictions[i].value)
        }
    }
});


function display() {
    DispWin = window.open('', 'NewWin', 'toolbar=no, status=no, width=300, height=200');
    message = "First Name: " + document.myForm.fname.value;
    message1 = "Last Name: " + document.myForm.lname.value;
    message2 = "Age: " + document.myForm.age.value;
    message3 = "Gender: " + document.myForm.gender.value;
    message4 = "Destination: " + document.myForm.destinations.value;
    message5 = "Dietary Restrictions: " + document.myForm.restrictions.value;
    DispWin.document.write(message);
    DispWin.document.write(message1);
    DispWin.document.write(message2);
    DispWin.document.write(message3);
    DispWin.document.write(message4);
    DispWin.document.write(message5);
}