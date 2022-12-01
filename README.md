# TPXimpact challenge

---

## This repo has been created as part of the [Founders & Coders](https://learn.foundersandcoders.com) pre-apprenticeship program.

---

## A take home challenge for [TPX Impact](https://www.tpximpact.com/)

---

### Cloning 

Please feel free to clone the repo using this url https://github.com/d0g3bl2/tpx_impact_challenge_fac26.git Simply open your terminal, run the command `git clone` followed by the url and type `code .` to open in your code editor of preference.

---

### Part one - reproduce a poster.

- Inside the [poster_challenge](https://github.com/d0g3bl2/tpx_impact_challenge_fac26/tree/main/poster_challenge) directory is `poster.html` which is linked to `poster.css` found in the `css` directory

- This reproduction of a poster advertising a Josef Muller-Brockmann concert (original image below) was a very enjoable take home challenge set by TPXimpact and uses css `grid`, as well a `position: relative;`, `box-shadow`, `text-shadow` and other CSS declarations.

![Josef M%FCller-Brockmann on Flickr - Photo Sharing!](https://user-images.githubusercontent.com/99536044/205094095-a76c87e4-849d-4247-92ea-79c984c7d3b3.jpg)

---

### Part two - Create a functioning stopwatch.

- Inside the [timer_challenge](https://github.com/d0g3bl2/tpx_impact_challenge_fac26/tree/main/timer_challenge) directory is `index.html` which is linked to `timer.css` and `index.js` which can be found in the `src` directory.
- The timer allows the user to start, stop and reset the time as well as render lap times into the UI which are stored in local storage as well as clearing local storage shouls they wish. The timer is responsive in mobile and desktop enviroments using

`@media only screen and (max-width: 750px) {
.controls {
    display: flex;
    flex-direction: column;
}
    }`
    
![image](https://user-images.githubusercontent.com/99536044/205100953-64e44fbd-edac-48c3-840b-1f9e1a192e9b.png)

---

### User Stories

I broke the project down into the following user stories to get a clear idea of the different steps.

- The user wants to view a time display ✔️ 
- The current elapsed time should be in the following format 00:00:00:00 (hours, minutes, seconds, centiseconds) ✔️
- Start button: A button to start or continue a timer. ✔️
- Pause button: A button to pause the running timer. ✔️
- Reset button: A button to reset the timer to zero. ✔️
- Lap button: A button to write the time to a list/table of laps (this would not pause the timer). The results should be shown on screen and still be visible if the page is refreshed. ✔️

---

### Thanks 

I hope you have fun with the timer and beat your personal best 🙂
