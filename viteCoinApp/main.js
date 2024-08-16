import "./scss/style.scss";
import { getCoins } from "./src/getcoins";

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
    alert("input not be blank!");
  } else {
    getCoins();
  }
};
