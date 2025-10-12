const min = 1
const max = 100
const answer = Math.floor(Math.random() * (max - min + 1))

let running = true;
let attempts = true;
let guess;

while (running = true) {
    guess = window.prompt(`Select a number between ${min} and ${max}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert('Please put a proper number in.')
    } else if (guess < min || guess > max) {
        window.alert('Please put a proper number in.')

        if (guess < answer) {
            attempts++
            alert('Youre below the answer.')
        }
    } else if (guess > answer) {
        alert(`youre above the answer`)
    } else {
        alert(`you got the answer (${answer}) in ${attempts} tries`)
    }


    running = false

}