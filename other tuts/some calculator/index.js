const PI = 3.14
let radius;
let circumference;

document.getElementById("MySubmit").onclick = function() {
    radius = document.getElementById('MyInput').value;
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("MyAnswer").textContent = circumference
}