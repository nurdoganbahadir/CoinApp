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
    const res = await fetch(url, options);
    const coinData = await res.json();
    console.log(coinData);
  } catch (error) {
    console.log(error);
  }
};
