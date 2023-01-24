const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";
const API_KEY = "ef8495ba-47b6-424d-8e7f-d9b2023da498";

export const state = {
  recipe: {},
};

export const getJSON = async function (id) {
  const req = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
  const data = await req.json();
  const { recipe } = data.data;

  state.recipe = {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    title: recipe.title,
    imageUrl: recipe.image_url,
  };
};
