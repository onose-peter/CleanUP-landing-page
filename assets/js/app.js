let countDate = new Date('Jan 1, 2023 00:00:00').getTime();

function newYear() {
    let now = new Date().getTime();
    gap = countDate - now;


    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}


setInterval(function() {
    newYear();
}, 1000)



function toggle(){
    var newsletter = document.querySelector(".newsletter");
    newsletter.classList.toggle("active")
}




let smallimg = document.getElementById("smallimg")
let imgBox = document.getElementById("img-box")
let menuIcon = document.getElementById("btnIcon")

function screen1(){
    smallimg.src = "./assets/img/Capture.PNG"
}
function screen2(){
    smallimg.src = "./assets/img/bmw_black.jpg"
}
function screen3(){
    smallimg.src = "./assets/img/banner-image.png"
}
function screen4(){
    smallimg.src = "./assets/img/20170909_092652.png"
}


function imageSize(){
    if(imgBox.className =="small"){
        imgBox.className = "full"
        menuIcon.innerHTML = "&#9776"
    }
    else{
        imgBox.className = "small"
        menuIcon.innerHTML = "&#10006"
    }
}