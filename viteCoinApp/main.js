import "./scss/style.scss";
import { getCoins } from "./src/getcoins";
import { notify } from "./src/notify";

const form = document.querySelector("header form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputVal();
  form.reset();
});

const getInputVal = () => {
  const inputVal = document.querySelector("header input").value;
  if (!inputVal.trim()) {
    notify("input not be blank!", "warning");
  } else {
    getCoins(inputVal);
  }
};
