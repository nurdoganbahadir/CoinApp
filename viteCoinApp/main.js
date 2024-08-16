import "./scss/style.scss";

const form = document.querySelector("header form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputVal();
});

const getInputVal = () => {
  const inputVal = document.querySelector("header input").value;
  console.log(inputVal);
};
