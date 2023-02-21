const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("id");

fetch("https://tema7-f389.restdb.io/rest/frugter/" + id)
  .then((res) => res.json())
  .then(showCategories);
