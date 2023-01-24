const header = document.querySelector(".header");
const form = document.querySelector("form");
const inputSearch = document.querySelector(".search-form__input");
const buttonSubmit = document.querySelector(".search-form button");
const recipeModal = document.querySelector(".recipe__modal");
const link = document.querySelectorAll("a");

link.forEach((link) => {
  link.addEventListener("click", function () {
    header.style.height = "50vh";
    inputSearch.style.width = "200px";
    recipeModal.style.visibility = "visible";
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  header.style.height = "50vh";

  inputSearch.style.width = "200px";
});

inputSearch.addEventListener("focus", function () {
  header.style.height = "100vh";

  inputSearch.style.width = "450px";
});
