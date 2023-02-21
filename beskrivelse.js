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
}
