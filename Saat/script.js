//Analog Clock

let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');


setInterval(() => {
    let day = new Date();
    let ss = day.getSeconds() * 6;
    let mm = day.getMinutes() * 6;
    let hh = day.getHours() * 30;

    sc.style.transform = `rotateZ(${ss}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;


    //Digital Clock
    
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hours = document.getElementById('hours');
    let ampm = document.getElementById('ampm');

    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    // convert 24h/12h

    let am = h >= 12 ? "AM" : "PM";

    if (h > 12) {
        h = h - 12;
    }

    // Add 0 before 

    s = (s < 10) ? "0" + s : s;
    m = (m < 10) ? "0" + m : m;
    h = (h < 10) ? "0" + h : h;

    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    ampm.innerHTML = am;

})