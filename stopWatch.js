let countValue = document.getElementById('watch-value');
let showText = document.querySelector('.show-text');

let count = 0;
let interval = null;

// START
const startTime = () => {
    if (interval !== null) return; // prevent multiple intervals

    interval = setInterval(() => {
        count++;
        countValue.innerText = count;
    }, 1000);
};

// STOP
const stopTime = () => {
    clearInterval(interval);
    interval = null;
    showText.textContent = `Time stopped: ${count}`;
};

// RESET
const resetTime = () => {
    clearInterval(interval);
    interval = null;
    count = 0;
    countValue.innerText = count;
    showText.textContent = `Time reset`;
};

// LAP
const getTime = () => {
    let p = document.createElement("p");
    p.innerText = `Lap: ${count}s`;
    showText.appendChild(p);
};

// CLEAR
const clearTime = () => {
    showText.innerHTML = "";
};

// EVENTS
document.getElementById('start').addEventListener('click', startTime);
document.getElementById('stop').addEventListener('click', stopTime);
document.getElementById('reset').addEventListener('click', resetTime);
document.getElementById('getTime').addEventListener('click', getTime);
document.getElementById('clear').addEventListener('click', clearTime);