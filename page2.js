document.addEventListener("DOMContentLoaded", function() {
    let receivedName = localStorage.getItem('enteredName');

    console.log('Name received: ' + receivedName);

    let nameElement = document.getElementById('nameOfBirthdayPerson');
    nameElement.textContent = "HAPPY BIRTHDAY " + receivedName.toUpperCase() + "!!";
});
