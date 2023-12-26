const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();

    if(emailValue === '') {
		setErrorFor('Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor('Please provide a valid email address');
	} else {
		setSuccessFor();
	}
};

function setErrorFor(message) {
	const small = form.querySelector('small');
	small.innerText = message;
};

function setSuccessFor() {
	const small = form.querySelector('small');
	small.innerText = "";
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};