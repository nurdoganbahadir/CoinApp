import { getCoins } from "./getcoins";
import { } from "module";

export let myCoinList = [];

export const setLocalStorage = () => {
  localStorage.setItem("coins", JSON.stringify(myCoinList));
};

export const updateLocalStorage = (coinName) => {
  myCoinList = myCoinList.filter((item) => item !== coinName);
  localStorage.setItem("coins", JSON.stringify(myCoinList));
};

export const showStorage = () => {
  (JSON.parse(localStorage.getItem("coins")) || []).forEach((coinName) => {
    getCoins(coinName);
  });
};

window.addEventListener("load", () => {
  showStorage();
});
