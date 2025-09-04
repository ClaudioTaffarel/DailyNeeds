let steps = 0;
let person = document.getElementById('person');
let walkBtn = document.getElementById('walkBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let message = document.getElementById('message');

let pos = 0;
let direction = 1; // 1 = kanan, -1 = kiri
const stepSize = 50; // pixel per langkah
const stepValue = 100; // 100 steps tiap klik

// Walk button
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

  message.textContent = "Steps: " + steps;
});

// Stop button (pakai if else)
stopBtn.addEventListener('click', () => {
  if (steps < 1000) {
    message.textContent = `You've walked ${steps} steps! This is not yet ideal. Based on health recommendations, humans should walk at least 1000 steps a day.`;
  } else {
    message.textContent = `Congrats! You've walked ${steps} steps! This is ideal based on health recommendations — keep it up!`;
  }
});

// Reset button
resetBtn.addEventListener('click', () => {
  steps = 0;
  pos = 0;
  direction = 1;
  person.style.left = pos + 'px';
  person.style.transform = 'scaleX(1)';
  message.textContent = "Steps reset to 0!";
});
