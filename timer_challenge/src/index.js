// Global variables 
    const timeEl = document.querySelector('#timer');
    const startButton = document.querySelector('#start');
    const stopButton = document.querySelector('#stop');
    const resetButton = document.querySelector('#reset');

    let centiSeconds = 0;
    let interval = null;

// Event listeners
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);


    function timer() {
        centiSeconds ++;

        let hrs = Math.floor(centiSeconds / 360000);
        let mins = Math.floor((centiSeconds - (hrs * 360000)) / 6000);
        let secs = centiSeconds / 100;
        let centi = centiSeconds % 100;

        if (centi < 100) centi = '00' + centi;
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

    function stop () {
        clearInterval(interval);
        interval = null;
    }