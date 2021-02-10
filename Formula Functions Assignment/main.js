// Volume of a rectangular prism

// HTML Elements

let calcBtnEl = document.getElementById("calcBtn");
let lengthInEl = document.getElementById("length");
let widthInEl = document.getElementById("width");
let heightInEl = document.getElementById("height");
let volumeOutEl = document.getElementById("ans");

// Event Listener
calcBtnEl.addEventListener("click", calcVolume);

// Event Function
function calcVolume() {
  // Input
  let length = +lengthInEl.value;
  let width  = +widthInEl.value;
  let height = +heightInEl.value;

  // Output
  volumeOutEl.innerHTML = volumeFormula(length, width, height);
}

// Process in a different function
function volumeFormula(length, width, height) {
  return (length * width * height);
}
