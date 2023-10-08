document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("birthdayForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nameInput = document.getElementById('name');
        let enteredName = nameInput.value;

        console.log('Name entered: ' + enteredName);
        localStorage.setItem('enteredName', enteredName);
    });
});
