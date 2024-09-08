
var username = document.getElementById('name');
var pass = document.getElementById('pass');

var error1 = document.getElementById('err1');
var error2 = document.getElementById('err2');

let regex1 = /^[A-Za-z]{5}$/;
let regex2 = /^[1-5]{5}$/;

function formsubmit() {
    let isValid = true; // Define and initialize isValid variable

    // Username validation
    if (regex1.test(username.value)) {
        error1.innerHTML = 'Valid format';
        error1.style.color = 'green';
    } else {
        error1.innerHTML = 'Invalid format';
        error1.style.color = 'red';
        isValid = false; // Set isValid to false if validation fails
    }

    // Password validation
    if (regex2.test(pass.value)) {
        error2.innerHTML = 'Valid format';
        error2.style.color = 'green';
    } else {
        error2.innerHTML = 'Invalid format';
        error2.style.color = 'red';
        isValid = false; // Set isValid to false if validation fails
    }

    // If both validations are correct, navigate to another page
    if (isValid) {
        window.location.href = 'index2.html'; // Redirect to index2.html
        return false; // Prevent actual form submission for demonstration purposes
    }

    return false; // Prevent form submission if validation fails
}

