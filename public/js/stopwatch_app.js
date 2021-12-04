const timer = document.querySelector("#timer"),
    btn_start = document.querySelector("#btn-start"),
    btn_pause = document.querySelector("#btn-pause"),
    btn_restart = document.querySelector("#btn-restart");

btn_start.addEventListener("click", start);

function start() {
    btn_start.style.display = "none";
    btn_pause.style.display = "block";
    btn_restart.style.display = "block";

    let milliseconds = 0,
        seconds = 0,
        minutes = 0,
        hours = 0;

    let interval = setInterval(() => {

        milliseconds++

        if (milliseconds === 60) {
            milliseconds = 0
            seconds++
        }

        if (seconds === 59) {
            seconds = 0
            minutes++
        }

        if (minutes === 59) {
            minutes = 0
            hours++
        }

        timer.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${milliseconds < 10 ? "0" + milliseconds : milliseconds}`
    }, 1);

    btn_pause.addEventListener("click", pause);

    function pause() {
        clearInterval(interval);
    }

    btn_restart.addEventListener("click", restart);

    function restart() {
        clearInterval(interval);
        start();
    }
}