let time = 1000 * 20 * 60;

function timer(){
    let minutes = Math.floor(time / 1000 / 60);
    let seconds = Math.floor(time / 1000) % 60;
    document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    time = time - 1000;
}

const stopBtn = document.getElementById("start-btn");
const header = document.getElementsByClassName("header");
const timerDisplay = document.getElementsByClassName("timer");
var alarmSound = new Audio("../public/src/alarm1.mp3");

stopBtn.addEventListener('click', function(){
    console.log("Focus button clicked");
    header[0].classList.add("header-minimized");
    timerDisplay[0].classList.add("show-timer");
    stopBtn.style.display = "none";
    setInterval(()=>{
        alarmSound.play();
        timer();
    },1000);
});

// setInterval(timer, 1000);
// timer();