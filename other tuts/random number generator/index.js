const generator = document.getElementById('generator')
const number = document.getElementById('number')
const min = 1
const max = 6

generator.onclick = function() {
    number = Math.floor(Math.random() * max) + min
    number.textContent = (number)
}