import { setTimer } from "./utils.js";
import { Howl, Howler } from 'howler';

const timerForm = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");
const stopTimerBtn = document.getElementById("stopTimer");

timerForm.addEventListener("submit", startTimer);
stopTimerBtn.addEventListener("click", stopTimer);

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let hours = hoursInput.value;
let minutes = minutesInput.value;
let seconds = secondsInput.value;

let interval = null;

function handleTimer() {
    hours = hoursInput.value;
    minutes = minutesInput.value;
    seconds = secondsInput.value;
    timerResult.innerHTML = setTimer( { hours, minutes, seconds } );
}

function startTimer(event) {
    let sound = new Howl({
        src: ['./assets/sound.mp3']
    });
    event.preventDefault();
    stopTimer();
    handleTimer();
    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            timerResult.innerHTML = setTimer( { hours, minutes, seconds } );
        } else if (minutes > 0) {
            seconds = 59;
            minutes--;
            timerResult.innerHTML = setTimer( { hours, minutes, seconds } );
        } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
            timerResult.innerHTML = setTimer( { hours, minutes, seconds } );
        } else {
            stopTimer();
            sound.play();
        }
    }, 1000)
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

handleTimer(timerForm);


