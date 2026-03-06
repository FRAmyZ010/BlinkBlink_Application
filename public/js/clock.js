const dayoftheweek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

function clock(){
    const clock = new Date();

    let day = dayoftheweek[clock.getDay()];
    let month = months[clock.getMonth()];
    let date = clock.getDate();
    let year = clock.getFullYear();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (date < 10) {
        date = "0" + date;
    }

    document.getElementById("dayoftheweek").innerHTML = day;
    document.getElementById("date").innerHTML = month + " " + date + ", " + year;
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;

}

setInterval(clock, 1000);