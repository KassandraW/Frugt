const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("_id");

fetch("https://tema7-f389.restdb.io/rest/frugter/63e9f3d8aa8607500004f237")
  .then((response) => response.json())
  .then((data) => visFrugt(data));

function visFrugt(frugt) {
  console.log("visFrugt");

  //ændre indhold
  document.querySelector(".name").textContent = frugt.navn;
}
