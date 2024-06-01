function changeColor(event) {
  const colorInput = event.target.value;
  console.log(colorInput);

  const textInputField = findInputField("text-content");

  textInputField.style.color = colorInput;
}
function changeFontSize(event) {
  const fontSizeInput = event.target.value;
  console.log(fontSizeInput + "px");

  const textInputField = findInputField("text-content");

  textInputField.style.fontSize = fontSizeInput + "px";
}
