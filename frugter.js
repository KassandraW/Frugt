const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");

document.querySelector(".kategori").textContent = `${cat}`;
document.querySelector(".breadcrumb span").textContent = `${cat}`;

fetch(`https://tema7-f389.restdb.io/rest/frugter?q={"udplantning":"${cat}"}`, {
  method: "get",
  headers: { "x-apikey": "63e9f446478852088da6810b" },
})
  .then((e) => e.json())
  .then(visFrugter);

function visFrugter(frugter) {
  console.log(frugter);
  frugter.forEach(showFruits);
  document.querySelector(".kategori").textContent = `${cat}`;
}

function showFruits(frugter) {
  //vælge template og kopiere den
  const temp = document.querySelector("#temp").content;
  const copy = temp.cloneNode(true);

  //ændre indhold
  copy.querySelector(".navn").textContent = frugter.navn;
  copy.querySelector("img").src = "images/" + frugter.image;
  copy.querySelector(
    ".card_container"
  ).href = `frugtbeskrivelse.html?id=${frugter._id}`;

  //indsæt template i DOM
  document.querySelector(".grid").appendChild(copy);
}
