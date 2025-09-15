const smallCups = document.querySelectorAll('.cup-small')
const cup = document.querySelector('.cup')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
const resetBtn = document.getElementById('resetBtn')
const cupHeight = cup.clientHeight
const textAlert = document.querySelector('.text')
const defaultText = textAlert.innerText

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCup(idx))
})

function highlightCup(idx) {
    if (idx === 7 && smallCups[idx].classList.contains('full')) idx--
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup,idx2) => {
        const img = cup.querySelector('.small-cup-frame')

        if(idx2 <= idx) {
            cup.classList.add('full')
            img.src = 'assets/SmallCup.PNG'
        } else {
            cup.classList.remove('full')
            img.src = 'assets/SmallCup-Empty.png'
        }
    })
    updateBigCup()
} 

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * cupHeight}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0

        textAlert.innerText = "🎉 Congrats! You reached your goal: 2 Liters!"
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (fullCups * 250 / 1000)}L`
    }
}

resetBtn.addEventListener('click', resetCups)

function resetCups() {
    smallCups.forEach(cup => {
        cup.classList.remove('full');
        const img = cup.querySelector('.small-cup-frame');
        if (img) img.src = 'assets/SmallCup-Empty.png';
    });

    textAlert.innerText = defaultText;

    updateBigCup();
}
