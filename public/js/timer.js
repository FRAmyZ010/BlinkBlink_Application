
let time = 25 * 60 * 1000; // 25 minutes in milliseconds


function updateTimer() {

    let minutes = Math.floor(time/60/1000);
    let seconds = Math.floor(time/1000) % 60
    time -= 1000;
    document.getElementById("timer").innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;

}

setInterval(updateTimer, 1000);
updateTimer();