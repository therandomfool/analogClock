const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');
const dateDiv = document.getElementById('date');


setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds() /60;
    let min = date.getMinutes() /60;
    let hour = date.getHours() /12;
    let activeDate = date.toString();
    document.getElementById("date").innerHTML = activeDate;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";

}