const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const contentContainer = document.getElementById("contentContainer");
const modalContainer = document.getElementById("modalContainer");
const cartContent = document.getElementById("cartContent");
const count = document.querySelector("#count");

// function to get drinks
const allDrinks = async (name) => {
  contentContainer.innerHTML =
    '<h2 class="bg-success p-3 rounded mt-4">Fetching drinks....</h2>';
  try {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const response = await data.json();

    contentContainer.innerHTML = "";
    response.drinks.forEach((items) => {
      const singleItem = document.createElement("div");
      singleItem.classList.add("singleItem");
      singleItem.innerHTML = `
          <img src="${items.strDrinkThumb}" alt="drinks">
          <h4>Name: ${items.strGlass}</h4>
          <p>Category: ${items.strCategory}</p>
          <p>Instruction: ${items.strInstructions.slice(0, 20)}</p>
          <button onclick="addToCart('${
            items.idDrink
          }')" type="button" class="addCart btn btn-outline-success">
            Add to Cart
          </button>
          <button onclick="viewDetails('${
            items.idDrink
          }')" type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details
          </button>
    `;
      contentContainer.appendChild(singleItem);
    });
  } catch (error) {
    contentContainer.innerHTML =
      '<p class="errorText"> <span class="opps">Opps!</span><br/> Drinks Not Found, please try again.</p>';
  }
};

// view details implementation
const viewDetails = async (id) => {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await data.json();
  let array = response.drinks;

  // create modal content
  modalContainer.innerHTML = "";
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-header", "modalHead");
  modalTitle.innerHTML = `
      <h5 class="modal-title" id="exampleModalLabel">${array[0].strGlass}</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      `;
  const modalBody = document.createElement("div");
  modalBody.classList.add("modalBody", "modal-body");
  modalBody.innerHTML = `
        <img src="${array[0].strDrinkThumb}" alt="drinks">
        <h4>Details</h4>
        <p>Category: <b>${array[0].strCategory}</b></p>
        <p>Alcoholic: <b>${array[0].strAlcoholic}</b></p>
        <p>${array[0].strInstructions}</p>
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

// addToCart function
let cnt = 0;
const addToCart = async (id) => {
  if (cnt < 7) {
    const data = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const response = await data.json();
    let array = response.drinks;

    const cart = document.createElement("div");
    cart.classList.add("cartItem");
    cart.innerHTML = `
    <img class="cartImg" src="${array[0].strDrinkThumb}" alt="cart_img"/>
    <span>${array[0].strGlass}</span>
  `;
    cartContent.appendChild(cart);

    count.innerText = ++cnt;

    cart.addEventListener("click", () => {
      cart.parentNode.removeChild(cart);
      cnt--;
      count.innerText = cnt;
    });
  } else {
    alert("You have reached the max limit");
  }
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if (!searchInput) {
    contentContainer.innerHTML =
      '<h2 class="bg-danger p-3 rounded mt-4">No input, please type your drinks name....</h2>';
    return;
  }
  allDrinks(searchInput);
});

// default
window.addEventListener("DOMContentLoaded", () => {
  allDrinks("a");
});
