const foodInput = document.getElementById("inpFood");
const calInput = document.getElementById("inpCal");
const heightInput = document.getElementById("inpHeight");
const weightInput = document.getElementById("inpWeight");
const ageInput = document.getElementById("inpAge");
const genderInput = document.getElementById("Genderzz");
const btnInput = document.querySelector(".inputt");
const btnReset = document.querySelector(".reset");
const btnCalculate = document.querySelector(".calculate");
const foodList = document.querySelector(".foodListz");

let foodzzz = [];
let totalCalories = 0;

function addNewFood() {
    foodList.innerHTML = "";
    foodzzz.forEach((item, index) => {
        const newFood = document.createElement("div");
        newFood.textContent = `${index + 1}. ${item.name} + ${item.cal} calories`;
        foodList.append(newFood);
    });
}

btnInput.addEventListener("click", () => {
    const name = foodInput.value.trim();
    const cal = parseInt(calInput.value);

    if (!name || isNaN(cal) || cal <= 0) {
        alert("Isi nama makanan dan kalori dengan benar!");
        return;
    }

    if (name.length >= 20) {
        alert("Nama makanan terlalu panjang!");
        return;
    }

    if (foodzzz.length >= 5) {
        alert("Maksimal hanya 5 makanan!");
        return;
    }

    foodzzz.push({ name, cal });
    totalCalories += cal;

    addNewFood();

    foodInput.value = "";
    calInput.value = "";
});

btnReset.addEventListener("click", () => {
    foodzzz = [];
    totalCalories = 0;
    foodList.innerHTML = "";
    foodInput.value = "";
    calInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    ageInput.value = "";
    genderInput.value = "Male";
});

btnCalculate.addEventListener("click", () => {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseFloat(ageInput.value);
    const gender = genderInput.value;

    if (isNaN(height) || isNaN(weight) || isNaN(age) || foodzzz.length === 0) {
        alert("Isi data diri dan makanan dulu!");
        return;
    }

    let bmr = 0;

    if (gender === "Male") {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    } else {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }

    let conclusion = "";

    if (totalCalories < bmr - 100) {
        conclusion = "The calories consumed are still less than ideal.";
    } else if (totalCalories > bmr + 100) {
        conclusion = "The calories consumed exceed the ideal.";
    } else {
        conclusion = "The calories consumed are already close to ideal.";
    }

    const resultzz = document.createElement("div");
    resultzz.classList.add("conclusion");
    resultzz.textContent = `Conclusion: ${conclusion} (BMR: ${Math.round(bmr)} cal, Total Calories: ${totalCalories} cal)`;
    foodList.append(resultzz);
});
