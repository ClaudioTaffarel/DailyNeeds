const guy = document.getElementById('person');
const walkBtn = document.getElementById('walkBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const messagezz = document.getElementById('messagezz');

let steps = 0;
let positionn = 0;
let direction = 1;
const stepSize = 100;

walkBtn.addEventListener('click', () => {
    guy.style.display = 'block';
    steps += stepSize;
    positionn += stepSize * direction;

    if (positionn >= 1300) {
        direction = -1;
        guy.style.transform = 'scaleX(-1)';
    } else if (positionn <= 0) {
        direction = 1;
        guy.style.transform = 'scaleX(1)';
    }

    guy.style.left = positionn + 'px';
    messagezz.textContent = 'Steps: ' + steps;
});

stopBtn.addEventListener('click', () => {
    guy.style.display = 'none';

    if (steps < 5000) {
        messagezz.textContent = `You've walked ${steps} steps! This is considered sedentary (not very active). Try to move more for better health.`;
    } else if (steps >= 5000 && steps <= 7499) {
        messagezz.textContent = `You've walked ${steps} steps! This is considered low active. A good start, but you can aim for more.`;
    } else if (steps >= 7500 && steps <= 9999) {
        messagezz.textContent = `You've walked ${steps} steps! This is considered somewhat active. You're on the right track!`;
    } else if (steps >= 10000 && steps <= 12499) {
        messagezz.textContent = `You've walked ${steps} steps! This is considered active. Great job! keep maintaining this level!`;
    } else {
        messagezz.textContent = `You've walked ${steps} steps! This is considered highly active. Excellent effort, keep it up!`;
    }
});

resetBtn.addEventListener('click', () => {
    guy.style.display = 'block';
    steps = 0;
    positionn = 0;
    direction = 1;
    guy.style.left = positionn + 'px';
    guy.style.transform = 'scaleX(1)';
    messagezz.textContent = 'Steps reset to 0!';
});
