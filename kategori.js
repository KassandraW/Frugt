fetch("https://tema7-f389.restdb.io/rest/frugter")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //ændre indhold
  document.querySelector(
    ".plante"
  ).href = `frugter.html?category=${cat.udplantning}`;
}
