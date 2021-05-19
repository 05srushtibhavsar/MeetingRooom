console.log('in details');
const MeetingForm = document.getElementById('meetingForm');
const MeetingDay = document.getElementById('meetingDay');
const MeetingStartTiming = document.getElementById('meetingStartTiming');
const MeetingStopTiming = document.getElementById('meetingStopTiming');
const Attendies = document.getElementById('attendies');

MeetingForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(
		MeetingDay.value,
		MeetingStartTiming.value,
		MeetingStopTiming.value,
		Attendies.value
	);
});
