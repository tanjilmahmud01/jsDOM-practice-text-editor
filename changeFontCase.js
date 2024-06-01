function makeUpperCase() {
  console.log("to uppercase");

  const inputField = findInputField("text-content");
  console.log(inputField);

  inputField.classList.toggle("text-uppercase");
}
