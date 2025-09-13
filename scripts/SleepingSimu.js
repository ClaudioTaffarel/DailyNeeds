const ageInput = document.getElementById("age");
const bedTimeInput = document.getElementById("bedTime");
const wakeTimeInput = document.getElementById("wakeTime");
const resultBox = document.getElementById("result");
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".reset");

checkBtn.addEventListener("click", () => {
    const age = parseFloat(ageInput.value);
    const bedTime = bedTimeInput.value;
    const wakeTime = wakeTimeInput.value;

    if (isNaN(age) || !bedTime || !wakeTime) {
        alert("Please fill all fields correctly!");
        return;
    }

    const [bedHour, bedMinute] = bedTime.split(":").map(Number);
    const [wakeHour, wakeMinute] = wakeTime.split(":").map(Number);

    let bedInMinutes = bedHour * 60 + bedMinute;
    let wakeInMinutes = wakeHour * 60 + wakeMinute;

    if (wakeInMinutes <= bedInMinutes) {
        wakeInMinutes += 24 * 60;
    }

    const sleepDuration = (wakeInMinutes - bedInMinutes) / 60;

    let minHours, maxHours;
    if (age <= 0.25) { minHours = 14; maxHours = 17; }
    else if (age <= 0.9) { minHours = 12; maxHours = 15; }
    else if (age <= 2) { minHours = 11; maxHours = 14; }
    else if (age <= 5) { minHours = 10; maxHours = 13; }
    else if (age <= 13) { minHours = 9; maxHours = 11; }
    else if (age <= 17) { minHours = 8; maxHours = 10; }
    else if (age <= 25) { minHours = 7; maxHours = 9; }
    else if (age <= 64) { minHours = 7; maxHours = 9; }
    else { minHours = 7; maxHours = 8; }

    if (sleepDuration < minHours) {
        resultBox.textContent = `Ouch... Your sleep duration is ${sleepDuration.toFixed(1)} hours1 less than the ideal (${minHours}-${maxHours} hours).`;
    } else if (sleepDuration > maxHours) {
        resultBox.textContent = `Oops, You slept for ${sleepDuration.toFixed(1)} hours! More than the ideal (${minHours}-${maxHours} hours).`;
    } else {
        resultBox.textContent = `Perfect! Your sleep duration is ${sleepDuration.toFixed(1)} hours, Very ideal!`;
    }
});

resetBtn.addEventListener("click", () => {
    ageInput.value = "";
    bedTimeInput.value = "";
    wakeTimeInput.value = "";
    resultBox.textContent = "";
});
