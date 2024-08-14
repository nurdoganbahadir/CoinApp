const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector(".btn");
const cardDiv = document.querySelector(".cardDiv");
const natification = document.querySelector(".natification");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const options = {
    headers: {
      "x-access-token":
        "coinranking72da7f6db2bfdc3c2ea8e95407a1ad27de3540e5c154a74c",
    },
  };

  fetch("https://api.coinranking.com/v2/coins", options)
    .then((response) => response.json())
    .then((result) => {
      result.data.coins.forEach((item) => {
        let cardPrice = parseFloat(item.price).toFixed(2);

        if (searchInput.value.toLowerCase() == item.name.toLowerCase()) {
          cardDiv.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <button class="removeBtn"><i class="fa-solid fa-x"></i></button>
                <h3 class="text-light">${item.name}</h3>
                <p class="text-light">$ <span>${cardPrice}</span></p>
                <img src="${item.iconUrl}" alt="" />
                <div class="text-success my-2">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>${item.change}%</span>
                </div>
            </div>
          `;
        } else{
            console.log("error");
        }
      });
    })

    .catch((error) => console.log(error));
});
