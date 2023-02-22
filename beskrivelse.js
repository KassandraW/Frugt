const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://tema7-f389.restdb.io/rest/frugter/" + id, {
  method: "get",
  headers: {
    "x-apikey": "63e9f446478852088da6810b",
  },
})
  .then((response) => response.json())
  .then((data) => visFrugt(data));

function visFrugt(frugt) {
  console.log("visFrugt");

  //ændre indhold
  document.querySelector(".name").textContent = frugt.navn;
  document.querySelector(".frugter").textContent = frugt.udplantning;

  //billede
  document.querySelector(
    ".frugtlink"
  ).href = `frugter.html?category=${frugt.udplantning}`;
  document.querySelector(".card_bg img").src = "images/" + frugt.image;

  //tekst
  document.querySelector(".latinsk").textContent = frugt.latinskenavn;
  document.querySelector(".navn").textContent = frugt.navn;
  document.querySelector(".beskrivelse").textContent = frugt.Beskrivelse;
  document.querySelector(".land").textContent = frugt.oprindelsesland;
  document.querySelector(".tid").textContent = frugt.årstid;
  document.querySelector(".udplantning").textContent = frugt.udplantning;
}
