console.log('in register page');

const FormInput = document.getElementById('formInput');
const FirstName = document.getElementById('firstname');
const LastName = document.getElementById('lastname');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-password');
const ChooseFile = document.getElementById('choose-file');
const Age = document.getElementById('age');

const sendError = (err) => {
	window.alert(err);
};

const isEmail = (email) => {
	const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	return re.test(email);
};

const checkPasswordLength = (password) => {
	if (password.length < 8) {
		return false;
	}
	return true;
};

const checkPassword = (password, rePassword) => {
	if (password !== rePassword) {
		return false;
	}
	return true;
};

const validateFileUpload = (fileName) => {
	var allowed_extensions = new Array('jpg', 'png', 'gif');
	var file_extension = fileName.split('.').pop().toLowerCase();

	for (var i = 0; i <= allowed_extensions.length; i++) {
		if (allowed_extensions[i] == file_extension) {
			return true;
		}
	}

	return false;
};

FormInput.addEventListener('submit', (event) => {
	event.preventDefault();
	const firstName = FirstName.value.trim();
	const lastName = LastName.value.trim();

	const email = Email.value.trim();
	if (!isEmail(email)) {
		return sendError('invalid email');
	}

	if (!checkPasswordLength(Password.value)) {
		return sendError('password must be 8 character long');
	}

	if (!checkPassword(Password.value, ConfirmPassword.value)) {
		return sendError('Both Password should match.');
	}

	if (!validateFileUpload(ChooseFile.value)) {
		return sendError('file must be a image');
	}

	if (!Age.value || isNaN(parseInt(Age.value))) {
		return sendError('Age must be a number.');
	}

	console.log('correct data');
});
