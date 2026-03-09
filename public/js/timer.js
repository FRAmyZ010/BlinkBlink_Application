let time = 1000 * 20 * 60;

// ดึง Element มาเตรียมไว้
const stopBtn = document.getElementById("start-btn");
const header = document.getElementsByClassName("header")[0];
const timerWrapper = document.getElementsByClassName("timer")[0];
const timerDisplay = document.getElementById("timer"); // ตรงนี้คือที่โชว์ตัวเลข
const timerBtn = document.getElementsByClassName("timer-btn"); // ดึงปุ่ม +/- มา

var alarmSound = new Audio("../public/src/alarm1.mp3");

function adjustTime(){
    
}

function timer() {
    if (time < 0) return;

    let minutes = Math.floor(time / 1000 / 60);
    let seconds = Math.floor(time / 1000) % 60;
    
    // อัปเดตตัวเลขลงใน <h1>
    timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    
    if (time === 0) {
        alarmSound.play();
    }
    time -= 1000;
}

stopBtn.addEventListener('click', function() {
    // 1. เริ่ม Animation ยุบ Header ทันที
    header.classList.add("header-minimized");
    
    // 2. ซ่อนปุ่ม FOCUS ทันทีเพื่อให้ดูสะอาดตาตอน Transition
    stopBtn.style.display = "none";

    // 3. รอ 2 วินาที (ตามเวลา transition: 2s ใน CSS) แล้วค่อยโชว์ Timer
    setTimeout(function() {
        // แสดง Wrapper ของ Timer
        timerWrapper.classList.add("show-timer"); 
        
        // วนลูปเอา class 'isHidden' ออกจากปุ่ม +/-
        for (let i = 0; i < timerBtn.length; i++) {
            timerBtn[i].classList.remove("isHidden");
        }

        // เริ่มนับถอยหลัง
        timer(); 
        setInterval(timer, 1000);
        
    }, 2000); // 2000ms = 2 วินาที
});