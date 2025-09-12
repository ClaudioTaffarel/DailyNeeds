let steps = 0;
let person = document.getElementById('person');
let walkBtn = document.getElementById('walkBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let messagezz = document.getElementById('messagezz');

let pos = 0;
let direction = 1;
const stepSize = 50;
const stepValue = 100;

walkBtn.addEventListener('click', () => {
    steps += stepValue;

    pos += stepSize * direction;
    if (pos >= window.innerWidth - 120) {
        direction = -1;
        person.style.transform = 'scaleX(-1)';
    } else if (pos <= 0) {
        direction = 1;
        person.style.transform = 'scaleX(1)';
    }
    person.style.left = pos + 'px';

    messagezz.textContent = 'Steps: ' + steps;
});

stopBtn.addEventListener('click', () => {
    person.style.display = 'none';

    if (steps < 1000) {
        messagezz.textContent = `You've walked ${steps} steps! This is not yet ideal. Based on health recommendations, humans should walk at least 1000 steps a day.`;
    } else {
        messagezz.textContent = `Congrats! You've walked ${steps} steps! This is ideal based on health recommendations — keep it up!`;
    }
});

resetBtn.addEventListener('click', () => {
    person.style.display = 'block';
    steps = 0;
    pos = 0;
    direction = 1;
    person.style.left = pos + 'px';
    person.style.transform = 'scaleX(1)';
    messagezz.textContent = 'Steps reset to 0!';
});
