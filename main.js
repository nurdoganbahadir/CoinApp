const options = {
  headers: {
    "x-access-token":
      "coinranking72da7f6db2bfdc3c2ea8e95407a1ad27de3540e5c154a74c",
  },
};

fetch("https://api.coinranking.com/v2/blockchains", options)
  .then((response) => response.json())
  .then((result) => console.log(result.data.blockchains))
  .catch((error) => console.log(error));
