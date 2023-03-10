const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");

let myURL;

if (cat != null) {
  myURL = `https://tema7-f389.restdb.io/rest/frugter?q={"udplantning":"${cat}"}`;
  document.querySelector(".kategori").textContent = `${cat}`;
  document.querySelector(".breadcrumb span").textContent = `${cat}`;
} else {
  myURL = `https://tema7-f389.restdb.io/rest/frugter`;
  document.querySelector(".kategori").textContent = `Alle frugter`;
  document.querySelector(".breadcrumb span").textContent = `Alle frugter`;
}

fetch(myURL, {
  method: "get",
  headers: { "x-apikey": "63e9f446478852088da6810b" },
})
  .then((e) => e.json())
  .then(visFrugter);

function visFrugter(frugter) {
  frugter.forEach(showFruits);
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
