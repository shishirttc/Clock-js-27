var Hour = document.getElementById('Hour');
var Minute = document.getElementById('Minute');
var Secound = document.getElementById('Secound');

setInterval(function(){

    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var secound = date.getSeconds();

    Hour.innerText = hour;
    Minute.innerText = minute;
    Secound.innerText = secound;
    
}, 1000);