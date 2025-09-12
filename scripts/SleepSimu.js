document.getElementById("sleepForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    const bedTime = document.getElementById("bedTime").value;
    const wakeTime = document.getElementById("wakeTime").value;
    const result = document.getElementById("result");

    const [bedHour, bedMinute] = bedTime.split(":").map(Number);
    const [wakeHour, wakeMinute] = wakeTime.split(":").map(Number);

    let bedInMinutes = bedHour * 60 + bedMinute;
    let wakeInMinutes = wakeHour * 60 + wakeMinute;

    if (wakeInMinutes <= bedInMinutes) {
        wakeInMinutes += 24 * 60;
    }

    const sleepDuration = (wakeInMinutes - bedInMinutes) / 60; 

//Rekomendasi tidur ideal sesuai https://www.alodokter.com/memenuhi-waktu-tidur-yang-ideal-demi-kesehatan
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
        result.textContent = `Ouch... Your sleep duration is  ${sleepDuration.toFixed(1)} hours - less than the ideal (${minHours}-${maxHours} hours).`;
        result.style.color = "orange";

    } else if (sleepDuration > maxHours) {
        result.textContent = `Oops, You slept for ${sleepDuration.toFixed(1)} hours - More than the ideal (${minHours}-${maxHours} hours).`;
        result.style.color = "yellow";
    } else {
        result.textContent = `Perfect ! Your sleep duration is ${sleepDuration.toFixed(1)} hours - Very ideal !`;
        result.style.color = "lightgreen";
    }
});
