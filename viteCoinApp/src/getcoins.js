import axios from "axios";
import displayCoins from "./displayCoins";

export const getCoins = async (query) => {
  const url = `https://api.coinranking.com/v2/coins?search=${query}`;

  const options = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token":
        "coinranking72da7f6db2bfdc3c2ea8e95407a1ad27de3540e5c154a74c",
    },
  };
  try {
    const res = await axios(url, options);
    if (!res.data.data.coins.length) {
      alert("coin not found!");
    } else {
      displayCoins(res.data.data.coins[0]);
    }
  } catch (error) {
    console.log(error);
  }
};
