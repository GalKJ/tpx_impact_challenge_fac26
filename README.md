# TPXimpact challenge

---

## This repo has been created as part of the [Founders & Coders](https://learn.foundersandcoders.com) pre-apprenticeship program.

---

## A take home challenge for [TPX Impact](https://www.tpximpact.com/)

---

### Cloning 

Please feel free to clone the repo using this url https://github.com/d0g3bl2/tpx_impact_challenge_fac26.git Simply open your terminal, run the command `git clone` followed by the url and type `code .` to open in your code editor of preference.

---

### Deployment 

To view the timer challenge please follow this link https://d0g3bl2.github.io/tpx_impact_challenge_fac26/ to the github pages.

---

### Part one - reproduce a poster.

#### Where to find the code.

- Inside the [poster_challenge](https://github.com/d0g3bl2/tpx_impact_challenge_fac26/tree/main/poster_challenge) directory is `poster.html` which is linked to `poster.css` found in the `css` directory

#### The challenge.

- This reproduction of a poster advertising a Josef Muller-Brockmann concert (original image below)..

![Josef M%FCller-Brockmann on Flickr - Photo Sharing!](https://user-images.githubusercontent.com/99536044/205094095-a76c87e4-849d-4247-92ea-79c984c7d3b3.jpg)

- I used CSS `grid` to divide my `div` with a class of `container` into explicitly defined `grid-template-row`'s and `grid-template-column`'s.

![image](https://user-images.githubusercontent.com/99536044/205154348-7ecf195a-aeda-46f3-a584-4c2f4fe3c559.png)

- Since the original poster was very old and had discoloured over time I tried to give my reproduction a slightly worn look by making the text colour transparent and adding a `text-shadow` with 0 values for the x and y offsets and a small blur radius of `1.5px` 

![image](https://user-images.githubusercontent.com/99536044/205147811-cca0b63d-0579-4a85-b779-33ce527a8a67.png)

- The colours from the three boxes were also no longer sharp which I reproduced using `box-shadow` with a `blur radius` of `1.9px`

![image](https://user-images.githubusercontent.com/99536044/205149149-12da0aaf-4718-4455-b66d-1802ff4ded25.png)

---

### Part two - Create a functioning stopwatch.

#### Where to find the code.

- Inside the [root directory](https://github.com/d0g3bl2/tpx_impact_challenge_fac26) is `index.html` which is linked to `timer.css` and `index.js`.

#### The challenge.

- The timer function increments the variable `centiSeconds` by the value `1` each time the function is called. Therefore the variables `hrs`, `mins` and `secs` values are all formatted by writing mathmatical formula based on the `centiSeconds` given value in the present state.

![image](https://user-images.githubusercontent.com/99536044/205152319-8a94c432-cf4e-41f5-b795-27c1a04d2576.png)

- The timer allows the user to start, stop and reset the time as well as render lap times into the UI which are stored in local storage as well as clearing local storage should they wish. The timer is responsive in mobile and desktop enviroments using CSS media queries

`@media only screen and (max-width: 750px) {
.controls {
    display: flex;
    flex-direction: column;
}
    }`
    
![image](https://user-images.githubusercontent.com/99536044/205100953-64e44fbd-edac-48c3-840b-1f9e1a192e9b.png)

---

### User Stories

I broke the timer challenge down into the following user stories to get a clear idea of the different steps.

- The user wants to view a time display ✔️ 
- The current elapsed time should be in the following format 00:00:00:00 (hours, minutes, seconds, centiseconds) ✔️
- Start button: A button to start or continue a timer. ✔️
- Pause button: A button to pause the running timer. ✔️
- Reset button: A button to reset the timer to zero. ✔️
- Lap button: A button to write the time to a list/table of laps (this would not pause the timer). The results should be shown on screen and still be visible if the page is refreshed. ✔️
- Clear lap history button: A button to clear any lap history ✔️

---

### Thanks 

I hope you enjoy the poster have fun with the timer and beat your personal best 🙂
