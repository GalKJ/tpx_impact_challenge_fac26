// Global variables 
const timerEl = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let seconds = 0;
let interval = null;

function timer() {
    seconds ++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	timeEl.innerText = `${hrs}:${mins}:${secs}`;
}