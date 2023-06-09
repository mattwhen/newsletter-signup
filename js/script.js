/* FORM VALIDATION */
const submitForm = document.getElementById('subscribe');
const emailEl = document.getElementById('input-email');
const emailElValue = document.getElementById('input-email').value;
const errorMessage = document.getElementById('error-message');
const panel = document.querySelector('.panel');

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

    setTimeout(() => renderSuccessContent(), 1000);
}

function renderSuccessContent() {
    // Removes existing content inside panel.
    panel.textContent = '';
    panel.classList.remove('panel');

    // Create elements
    let createCheckmark = document.createElement('img');
    createCheckmark.src = '../assets/images/icon-success.svg'
    let createTitle = document.createElement('h1');
    let createP = document.createElement('p');
    let createBtn = document.createElement('button');

    // Modify class attributes
    panel.setAttribute('style', 'height: 500px; width: 500px; background-color: white; border-radius: 30px; font-size: 16px; padding: 50px;');
    createBtn.classList.add('dismissBtn');
    createBtn.setAttribute('style', 'background-color: hsl(3, 18%, 26%), padding: 18px 10px; font-weight: 700px; width: 100%')
    // Add text content 
    createTitle.textContent = 'Thanks for subscribing!';
    createP.textContent = `A confirmation email has been sent to ${emailEl.value}. Please open it and click the button inside to confirm your subscription.`;
    createBtn.textContent = 'Dismiss message';

    // Append all our elements in the panel
    panel.appendChild(createCheckmark);
    panel.appendChild(createTitle);
    panel.appendChild(createP);
    panel.appendChild(createBtn);
}