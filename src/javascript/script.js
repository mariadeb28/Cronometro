const timerW = document.getElementById("timer");
const markL = document.getElementById("marks_list");

let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredth = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredth.toString().padStart(2, '0')}`

}

const addMarkToList = (markIndex, markTime) => {
    markL.innerHTML += `<p>Marca ${markIndex}: ${formatTime(markTime)}`;
    
}

const markTime = () =>{
    marks.push(timer);
    addMarkToList(marks.length, timer);
}

const toggleTimer = () =>{
    const button = document.getElementById("play");
    const action = button.getAttribute("action");

    clearInterval(intervalId);

    if(action == 'start' || action == 'continue') {
        intervalId = setInterval(() =>{
            timer +=1;
            setTimer(timer);


        }, 10);
        button.setAttribute("action", "pause");
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';      
    } else if (action == "pause"){
        button.setAttribute("action", "continue");
        button.innerHTML = '<i class="fa-solid fa-play"></i>';    
    }

}

const resetTime = () =>{
    clearInterval(intervalId);
    timer = 0;
    marks = [];
    setTimer(timer);
    markL.innerHTML = '';
    const button = document.getElementById("play");
    button.getAttribute("action", "start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>'; 

}

const setTimer = (time) => {
    timerW.innerText = formatTime(time);
}

document.getElementById('play').addEventListener('click', toggleTimer);
document.getElementById('mark').addEventListener('click', markTime);
document.getElementById('reset').addEventListener('click', resetTime);
