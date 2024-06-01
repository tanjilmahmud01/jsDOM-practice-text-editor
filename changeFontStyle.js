function makeBold() {
  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.toggle("bolder");
}
function makeItalic() {
  console.log("making Italic");
  const inputField = findInputField("text-content");
  console.log(inputField);
  inputField.classList.toggle("italic");
}
function makeUnderline() {
  console.log("making Underlined");
  const inputField = findInputField("text-content");
  console.log(inputField);
  inputField.classList.toggle("underlined");
}
