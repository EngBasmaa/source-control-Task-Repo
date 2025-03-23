let count = 0;
const countDisplay = document.getElementById("count");

function updateCounter() {
  countDisplay.textContent = count;
  countDisplay.style.transform = "scale(1.1)";
  setTimeout(() => (countDisplay.style.transform = "scale(1)"), 150);
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}
