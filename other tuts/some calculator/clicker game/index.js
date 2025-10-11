const Counter = document.getElementById('AmountOfClicks')
const AddButton = document.getElementById('AddButton')
const ResetButton = document.getElementById('ResetButton')
const SubtractButton = document.getElementById('SubtractButton')

let count = 0;

AddButton.onclick = function() {
    count++;
    Counter.textContent = count

    if (count = 50) {

    }
}

ResetButton.onclick = function() {
    count = 0;
    Counter.textContent = count
}

SubtractButton.onclick = function() {
    count--;
    Counter.textContent = count
}