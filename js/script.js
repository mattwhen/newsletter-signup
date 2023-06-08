const submitForm = document.getElementById('subscribe');
const emailEl = document.getElementById('input-email');

submitForm.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();

    isEmailValid(emailEl.value);
}

const isEmailValid = (email) => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email); // tests email validation and returns either 'True' or 'False'. 
}

const showError = () => {
    alert('Field cannot be blank');
}