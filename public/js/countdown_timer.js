const [
    hours_number,
    minutes_number,
    seconds_number,
    btn_start,
    btn_stop,
    btn_finish,
    btn_restart,
    hours_text,
    minutes_text,
    seconds_text,
    days_text
] = ["hours", "minutes", "seconds", "btn-start", "btn-stop", "btn-finish", "btn-restart", "hours-value", "minutes-value", "seconds-value", "days-value"].map(element => document.querySelector(`#${element}`))

btn_start.addEventListener("click", start);

function start() {

    document.querySelector(".countdown").style.display = "flex";
    document.querySelector(".group").style.display = "none";

    let days = parseInt(hours_number.value / 24),
        hours = parseInt(hours_number.value) - (days * 24),
        minutes = parseInt(minutes_number.value),
        seconds = parseInt(seconds_number.value);

    if (days > 0 && hours === 0 && minutes === 0) {
        days--
        hours = 24
    }

    days_text.innerHTML = days < 10 ? "0" + days : days
    hours_text.innerHTML = hours < 10 ? "0" + hours : hours
    minutes_text.innerHTML = minutes < 10 ? "0" + minutes : minutes
    seconds_text.innerHTML = seconds < 10 ? "0" + seconds : seconds

    let interval = setInterval(() => {

        if (days >= 0 || hours >= 0 || minutes >= 0 && seconds > 0) {
            seconds--
            seconds_text.innerHTML = seconds < 10 ? "0" + seconds : seconds
        }

        if (days === 0 && hours === 0 && minutes === 0 && seconds <= 0) clearInterval(interval);

        if (seconds <= 0 && minutes > 0) {
            seconds = 59
            minutes--
            minutes_text.innerHTML = minutes < 10 ? "0" + minutes : minutes
            seconds_text.innerHTML = seconds < 10 ? "0" + seconds : seconds
        }

        if (minutes === 0 && hours > 0 && seconds === 0) {
            minutes = 59
            hours--
            minutes_text.innerHTML = minutes < 10 ? "0" + minutes : minutes
            hours_text.innerHTML = hours < 10 ? "0" + hours : hours
        }

        if (hours === 0 && days > 0 && minutes === 59) {
            hours = 23
            days--
            days_text.innerHTML = days < 10 ? "0" + days : days
            hours_text.innerHTML = hours < 10 ? "0" + hours : hours
        }

    }, 1000)

    btn_stop.addEventListener("click", stop)
    btn_restart.addEventListener("click", restart)
    btn_finish.addEventListener("click", finish)

    function stop() {
        clearInterval(interval);
    }

    function restart() {
        clearInterval(interval);
        start();
    }

    function finish() {
        clearInterval(interval);
        document.querySelector(".countdown").style.display = "none";
        document.querySelector(".group").style.display = "flex";
    }

}