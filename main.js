import "./main.css";
import { rot13 } from "./cipher";

window.addEventListener("DOMContentLoaded", () => {
  renderOutput();
});

function renderOutput() {
  const input = document.querySelector("input");
  const button = document.querySelector("button");
  // allows user to submit with enter
  input.onkeydown = (event) => {
    if (event.key === "Enter" || event.key === 13) {
      button.onclick();
    }
  };
  const output = document.getElementById("output");
  button.onclick = () => {
    const inputValue = input.value;
    // no input by user
    if (inputValue.length === 0) return (output.innerHTML = "No input value");
    // reset input value
    input.value = "";
    // call cipher function
    const cipher = rot13(inputValue);
    const repeat = document.getElementById("repeat");
    repeat.innerHTML = inputValue;
    return (output.innerHTML = cipher);
  };
}
