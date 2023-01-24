class RecipeView {
  _parentElement = document.querySelector(".recipe");

  render(data) {
    this._clear();
    this._parentElement.innerHTML = this._getHtml(data);
    this._parentElement
      .querySelector(".close__btn")
      .addEventListener("click", function () {
        recipeModal.style.visibility = "hidden";
      });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _getHtml(data) {
    return `
    <button class="close__btn"><strong>X</strong></button>
    <div class="img__container">
      <img
        class="recipe__img"
        src="${data.imageUrl}"
        alt="recipe img"
      />
    </div>
    <div class="recipe__details">
      <h1 class="recipe__title">${data.title}</h1>
      <div class="recipe__btns">
        <p>&#x2297; Cooking time: ${data.cookingTime}</p>
        <p>&#167;Servings: ${data.servings}</p>
      </div>

      <div class="recipe__ingredients">
        <h2>Ingredients</h2>
        <ul>
        ${data.ingredients
          .map((ing) => {
            return `<li>&#x2714;  ${ing.description} </li>`;
          })
          .join("")}
        </ul>
      </div>
      <p>Publisher: ${data.publisher}</p>
    </div>
  `;
  }
}

export default new RecipeView();
