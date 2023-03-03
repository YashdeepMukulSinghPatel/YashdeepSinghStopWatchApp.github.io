// here initialy variale 0
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
// and initialy  variable boolean timer=false 
var timer = false;
// id funtion for return the time counting by access id 
function $id(id) {
    return document.getElementById(id);
}
// start function for start the time counting
function start() {
    timer = true;
    stopwatch();
}
// stop function using for stop the timer
function stop() {
    timer = false;

}
// reset function using for reset the timer
function reset() {
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
   //here I have accessed to id from html file 
    $id("hr").innerHTML = "00";
    $id("min").innerHTML = "00";
    $id("sec").innerHTML = "00";
    $id("count").innerHTML = "00";

}
//here stopwatch function using for count the timer 
//and here count are behaving like centisecond(Cs)
function stopwatch() {
    if (timer == true)
        count = count + 1;

    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
// display on digit like 01 not 1 .else display two digit like 10,11,99,59
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    if (hr < 10) {
        hrString ="0"+ hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0"+ secString;
    }
    if (count < 10) {
        countString ="0"+ countString;
    }

    $id("hr").innerHTML = hrString;
    $id("min").innerHTML = minString;
    $id("sec").innerHTML = secString;
    $id("count").innerHTML = countString;
    setTimeout("stopwatch()", 10)
}
