console.log('in add-room');

const FormInput = document.getElementById('formInput');
const RoomId = document.getElementById('roomId');
const Description = document.getElementById('description');
const WifiInput = document.getElementById('wifiInput');
const ProjectorInput = document.getElementById('projectorInput');
const ACInput = document.getElementById('acInput');
const TVInput = document.getElementById('tvInput');
const Pic1Input = document.getElementById('pic1Input');
const Pic2Input = document.getElementById('pic2Input');
const Pic3Input = document.getElementById('pic3Input');
const Pic4Input = document.getElementById('pic4Input');

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

const showError = (no) => {
	window.alert(`Pic ${no} must be a image`);
};

FormInput.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!validateFileUpload(Pic1Input.value)) {
		return showError(1);
	}
	if (!validateFileUpload(Pic2Input.value)) {
		return showError(2);
	}
	if (!validateFileUpload(Pic3Input.value)) {
		return showError(3);
	}
	if (!validateFileUpload(Pic4Input.value)) {
		return showError(4);
	}
	if (!Description.value) {
		return window.alert('Description is required');
	}
    console.log('Corret form data');
});
