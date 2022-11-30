// Global variables 
    const timeEl = document.querySelector('#timer');
    const startButton = document.querySelector('#start');
    const stopButton = document.querySelector('#stop');
    const resetButton = document.querySelector('#reset');

    let seconds = 0;
    let interval = null;

// Event listeners
    startButton.addEventListener('click', start);


    function timer() {
        seconds ++;

        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds - (hrs * 3600)) / 60);
        let secs = seconds % 60;
        let centi = seconds * 100;

        if (secs < 10) secs = '0' + secs;
        if (mins < 10) mins = "0" + mins;
        if (hrs < 10) hrs = "0" + hrs;

        timeEl.innerText = `${hrs}:${mins}:${secs}:${centi}`;
    }

    function start () {
        if (interval) {
            return
        }

        interval = setInterval(timer, 1000);
    }