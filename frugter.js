fetch("https://tema7-f389.restdb.io/rest/frugter", {
  method: "get",
  headers: { "x-apikey": "63e9f446478852088da6810b" },
})
  .then((e) => e.json())
  .then(visFrugter);

function visFrugter(frugter) {
  console.log(frugter);
  frugter.forEach(showFruits);
}

function showFruits(frugter) {
  //vælge template og kopiere den
  const temp = document.querySelector("#temp").content;
  const copy = temp.cloneNode(true);

  //ændre indhold
  copy.querySelector(".navn").textContent = frugter.navn;

  //indsæt template i DOM
  document.querySelector(".grid").appendChild(copy);
}
