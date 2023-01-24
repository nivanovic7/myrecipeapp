import * as model from "./model.js";
import RecipeView from "./views/recipeView.js";

console.log("hel controller");

const recipeController = async function () {
  const id = this.location.hash.slice(1);
  await model.getJSON(id);
  console.log(model.state.recipe);
  RecipeView.render(model.state.recipe);
};

window.addEventListener("hashchange", recipeController);
window.addEventListener("load", recipeController);
