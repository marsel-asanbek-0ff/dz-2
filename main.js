let currentColor = "white"; 

function changeColor(newColor) {
  document.body.style.backgroundColor = newColor;
  currentColor = newColor;
}

function changeColorAfterDelay(newColor, delay) {
  setTimeout(() => {
    changeColor(newColor);
  }, delay);
}

document.getElementById("redButton").addEventListener("click", () => {
  changeColorAfterDelay("red", 3000);
});

document.getElementById("yellowButton").addEventListener("click", () => {
  changeColorAfterDelay("yellow", 3000);
});

document.getElementById("greenButton").addEventListener("click", () => {
  changeColorAfterDelay("green", 3000);
});

window.onload = () => {
  document.body.style.backgroundColor = currentColor;
};