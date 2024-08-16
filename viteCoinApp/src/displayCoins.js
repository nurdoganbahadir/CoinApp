const displayCoins = (coin) => {
  const { price, name, change, rank, symbol, iconUrl } = coin;
  const ul = document.querySelector("main .coins");
  const li = document.createElement("li");
  li.className = "coin";
  li.innerHTML = `

    <div class="remove-icon">
        <i class="fas fa-windows-close"></i>
    </div>
    <h2 class="coin-name">
        <span>${name}</span>
        <sup>${symbol}</sup>
    </h2>
    <div class="coin-temp">$${Number(price).toFixed(3)}</div>
    <figure>
        <img src="${iconUrl}" alt="" class="coin-icon" />
        <figcaption style="color: red">
            <i class="fa-solid fa-chart-line"></i>
            <span>${change}%</span>
        </figcaption>
    </figure>

  `;
  ul.prepend(li);
};

export default displayCoins;
