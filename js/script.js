/* FORM VALIDATION */
const submitForm = document.getElementById('subscribe');
const emailEl = document.getElementById('input-email');
const errorMessage = document.getElementById('error-message');

submitForm.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault(); // Prevent default behavior when submitting form. 
    // IF user clicks the button with no content in it, throw an error. 
    return emailEl.value.trim() === '' ? showError() : showSuccess();
}

const isEmailValid = (email) => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email); // tests email validation and returns either 'True' or 'False'. 
}

function showError() {
    errorMessage.style.display = 'block';
    errorMessage.style.color = 'red';
    emailEl.classList.remove('success');
    emailEl.classList.add('error');


}

function showSuccess() {
    emailEl.classList.remove('error');
    emailEl.classList.add('success');
    errorMessage.style.display = 'none'
}