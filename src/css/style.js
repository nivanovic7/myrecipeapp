const header = document.querySelector(".header");
const form = document.querySelector("form");
const inputSearch = document.querySelector(".search-form__input");
const buttonSubmit = document.querySelector(".search-form button");
const recipe = document.querySelector(".recipe");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  header.style.height = "50vh";
  inputSearch.style.width = "200px";
  recipe.style.display = "flex";
});

inputSearch.addEventListener("focus", function () {
  header.style.height = "75vh";
  inputSearch.style.width = "450px";
});
