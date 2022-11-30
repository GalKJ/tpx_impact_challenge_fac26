// Global variables. 
    const timeEl = document.querySelector('#timer');
    const startButton = document.querySelector('#start');
    const stopButton = document.querySelector('#stop');
    const resetButton = document.querySelector('#reset');
    const lapButton = document.querySelector('#lap');
    const clearLapsButton = document.querySelector('#clear-laps');
    const lapList = document.querySelector('#lap-list');


    let centiSeconds = 0;
    let interval = null;

// Event listeners.
    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);
    lapButton.addEventListener('click', lap);
    clearLapsButton.addEventListener('click', clearLaps);

// Function to define hrs, mins, secs and centi, increment the centiseconds and render the variable values to the timeEl variables inner text.
    function timer () {
        centiSeconds ++;

        let hrs = Math.floor(centiSeconds / 360000);
        let mins = Math.floor((centiSeconds - (hrs * 360000)) / 6000);
        let secs = Math.floor((centiSeconds - (mins * 6000)) / 100);
        let centi = centiSeconds % 100;

        if (centi < 10) centi = '0' + centi;
        if (secs < 10) secs = '0' + secs;
        if (mins < 10) mins = "0" + mins;
        if (hrs < 10) hrs = "0" + hrs;

        timeEl.innerText = `${hrs}:${mins}:${secs}:${centi}`;
    }

// Function to run the timer function at a set interval of 10 milliseconds (1 centisecond).
    function start () {
        if (interval) {
            return
        }

        interval = setInterval(timer, 10);
    }

// Function to stop the timer function running by clearing the interval.
    function stop () {
        clearInterval(interval);
        interval = null;
    }

// Function to run the stop function, reset the centiseconds to 0, the timeEl inner text to the DOM value and the lapList inner HTML to an empty paragraph.
    function reset () {
        stop();
        centiSeconds = 0;
        timeEl.innerText = '00:00:00:00';
    }

// Function to create a new paragraph, render the current timeEl value as it's inner text and append it to the lapList div. 
    function lap () {
        const lap = document.createElement('p');
        lap.textContent = `Lap ${timeEl.innerText}`;
        lapList.appendChild(lap);

        localStorage.setItem('laps', `${lapList.innerHTML}`);
    }

// Function to clear the innerHTML of the lapList div.
    function clearLaps () {
        lapList.innerHTML = `<p></p>`;
    }

// Function to render local storage HTML in lapList div on page load.
    function loadLaps () {
        lapList.innerHTML = localStorage.getItem('laps');
    }

    loadLaps();