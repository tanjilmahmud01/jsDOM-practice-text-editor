const list = [
  "left-aligned",
  "right-aligned",
  "center-aligned",
  "justified-aligned",
];

function makeLeftAligned() {
  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.remove(...list);

  inputField.classList.toggle("left-aligned");
}
function makeRightAligned() {
  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.remove(...list);

  inputField.classList.toggle("right-aligned");
}
function makeCenterAligned() {
  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.remove(...list);

  inputField.classList.toggle("center-aligned");
}
function makeJustifiedAligned() {
  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.remove(...list);

  inputField.classList.toggle("justified-aligned");
}
