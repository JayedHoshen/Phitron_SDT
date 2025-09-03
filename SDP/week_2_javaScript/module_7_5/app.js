const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const contentContainer = document.getElementById("contentContainer");
const modalContainer = document.getElementById("modalContainer");

// function to get recipes
const allRecipes = async (name) => {
  contentContainer.innerHTML =
    '<h2 class="bg-success p-3 rounded mt-4">Fetching recipes....</h2>';
  try {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const response = await data.json();

    contentContainer.innerHTML = "";
    response.meals.forEach((items) => {
      const singleItem = document.createElement("div");
      singleItem.classList.add("singleItem");
      singleItem.innerHTML = `
          <img src="${items.strMealThumb}" alt="recipe">
          <h4>${items.strMeal}</h4>
          <p><b>${items.strArea}</b> Dish</p>
          <p>Belongs to <b>${items.strCategory}</b> Category</p>
          <button onclick="viewDetails('${items.idMeal}')" type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            View Details
          </button>
    `;
      contentContainer.appendChild(singleItem);
    });
  } catch (error) {
    contentContainer.innerHTML =
      '<p class="errorText"> <span class="opps">Opps!</span><br/> Recipe Not Found, Try Again.</p>';
  }
};

// view details implementation
const viewDetails = async (id) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await data.json();
  let array = response.meals;

  // create modal content
  modalContainer.innerHTML = "";
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-header", "modalHead");
  modalTitle.innerHTML = `
      <h5 class="modal-title" id="exampleModalLabel">${array[0].strMeal}</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      `;
  const modalBody = document.createElement("div");
  modalBody.classList.add("modalBody", "modal-body");
  modalBody.innerHTML = `
        <h3>Ingredient: </h3>
        <ul class = "ingredientList">${fetchIngredients(array[0])}</ul>
        <hr>
        <h3>Instructions: </h3>
        <p class="text-justify p-2">${array[0].strInstructions}</p>
      `;
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modalFooter", "modal-footer");
  modalFooter.innerHTML = `
      <button type="button" class="btn btn-secondary closeBtn" data-bs-dismiss="modal">
          Close
      </button>
      `;
  modalContainer.appendChild(modalTitle);
  modalContainer.appendChild(modalBody);
  modalContainer.appendChild(modalFooter);
};

const fetchIngredients = (ara) => {
  let ingredientList = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = ara[`strIngredient${i}`];
    if (ingredient) {
      const measure = ara[`strMeasure${i}`];
      ingredientList += `<li>${measure} ${ingredient}</li>`;
    } else break;
  }
  return ingredientList;
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if (!searchInput) {
    contentContainer.innerHTML =
      '<h2 class="bg-danger p-3 rounded mt-4">No input, please type your recipe name....</h2>';
    return;
  }
  allRecipes(searchInput);
});
