const sheetURL = "https://opensheet.elk.sh/1pRBf8Qr_y-UxNEA11W2n-N-puSr_nMGBVe-qg_yqs30/Sheet1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" width="200">
        <h2>${item.name}</h2>
        <p>1 วัน: ${item.day1} บาท</p>
        <p>3 วัน: ${item.day3} บาท</p>
        <p>5 วัน: ${item.day5} บาท</p>
        <p>7 วัน: ${item.day7} บาท</p>
      `;

      container.appendChild(card);
    });
  });
