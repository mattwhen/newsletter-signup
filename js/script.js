/* FORM VALIDATION */
const submitForm = document.getElementById('subscribe');
const emailEl = document.getElementById('input-email');
const errorMessage = document.getElementById('error-message');
const panel = document.querySelector('.panel');

submitForm.addEventListener('submit', validateForm);

function validateForm(e) {
	e.preventDefault(); // Prevent default behavior when submitting form.
	// IF user clicks the button with no content in it, throw an error.
	return emailEl.value.trim() === '' ? showError() : showSuccess();
}

const isEmailValid = (email) => {
	const regExp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regExp.test(email); // tests email validation and returns either 'True' or 'False'.
};

function showError() {
	errorMessage.style.display = 'block';
	errorMessage.style.color = 'red';
	emailEl.classList.remove('success');
	emailEl.classList.add('error');
}

function showSuccess() {
	emailEl.classList.remove('error');
	emailEl.classList.add('success');
	errorMessage.style.display = 'none';

    // Render new content after a second, to give the user impression that it's contacting a server and doesn't render content immediately.
	setTimeout(() => renderSuccessContent(), 1000);
}

function renderSuccessContent() {
	// Removes existing content inside panel.
	panel.textContent = '';

	// Create elements
	let createCheckmark = document.createElement('img');
	createCheckmark.src = './assets/images/icon-success.svg';
	let createTitle = document.createElement('h1');
	let createP = document.createElement('p');
	let createBtn = document.createElement('button');
	let createDiv = document.createElement('div');

	// Add classes to elements
	createBtn.classList.add('btn-primary');
	createBtn.classList.add('btn');
	createBtn.classList.add('submitBtn');
	createTitle.classList.add('form-title');

	// Modify class attributes
	panel.setAttribute(
		'style',
		'display: flex; flex-direction: column; justify-content: center; padding: 50px; min-height: 600px; max-width: 500px'
	);
	createCheckmark.setAttribute('style','width: 50px;')
	createBtn.setAttribute('style', 'bottom: 40px; width: 90%');
	createDiv.setAttribute('style', 'display: flex; justify-content: center');


	// Add text content
	createTitle.textContent = 'Thanks for subscribing!';
	createP.textContent = "A confirmation email has been sent to " +  emailEl.value + " Please open it and click the button inside to confirm your subscription.";
	createBtn.textContent = 'Dismiss message';

	// Refresh page after dismissing the page
	createBtn.addEventListener('click', () => {
        // Reload the webpage after a second, to give the user impression that it's contacting a server and doesn't reload instantly.
		setTimeout(() => {
			location.reload();
		}, 1000);
	});

	// Append all our elements in the panel
	panel.appendChild(createCheckmark);
	panel.appendChild(createTitle);
	panel.appendChild(createP);
	panel.appendChild(createDiv)
	createDiv.appendChild(createBtn);
}
