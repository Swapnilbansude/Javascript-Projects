function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //Create list of weekdays and months
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Get the current Date 
    var day = days[rtClock.getDay()];
    var dateNo = rtClock.getDate();
    var mon = months[rtClock.getMonth()];
    var year = rtClock.getFullYear();

    //Add AM and PM System
    var ampm = (hours < 12) ? "AM" : "PM";

    //convert hours components to 12-hour format
    hours = (hours > 12) ? hours - 12 : hours;

    //pads the hours , minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //display the clock
    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + ampm;

    //display real time date
    document.getElementById('currentDate').innerHTML = 
        day + ",   " + dateNo + " " + mon + " " + year;
    
    var t = setTimeout(realtimeClock, 500);
    //console.log(minutes);
}

//realtimeClock();