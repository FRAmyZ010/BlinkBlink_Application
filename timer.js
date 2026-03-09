
let default_time = 25 * 60 * 1000; // 25 minutes in milliseconds

let time = default_time;
let timerInterval = null;

function additionalTime(amount) {
    time += amount * 60 * 1000;
    updateTimer();
}

function subtractionTime(amount) {
    time -= amount * 60 * 1000;
    updateTimer();
}


const alarm = new Audio("alarm1.mp3");

function updateTimer() {

    let minutes = Math.floor(time/60/1000);
    let seconds = Math.floor(time/1000) % 60

    if (time <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alarm.play();
        alarm.loop = true;
        time = default_time;
    }
    // time -= 1000;
    document.getElementById("timer").innerHTML = `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;

}
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", function(){

    if(timerInterval === null){
        timerInterval = setInterval(countdown, 1000);
    }
    startBtn.style.display = "none";
    stopBtn.style.display = "flex";
});

stopBtn.addEventListener("click", function(){

    clearInterval(timerInterval);
    timerInterval = null;

    time = default_time;
    updateTimer();
    alarm.pause();

    startBtn.style.display = "flex";
    stopBtn.style.display = "none";
});

function countdown(){
    time -= 1000;
    updateTimer();
}



updateTimer();