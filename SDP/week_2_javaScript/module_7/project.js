const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      displayProduct(data);
    });
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product_container");

  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("cart");

    div.innerHTML = `
      <img class="cart_image" src = ${product.image} alt = "" />
      <h5>${product.title}</h5>
      <p>Price: ${product.price}</p>
      <p>${product.description.slice(0, 50)}</p>
      <button onclick="singleProduct('${product.id}')">Details</button>
      <button onclick="handleAddToCart('${product.title}', ${
      product.price
    })">Add To Cart</button>
    `;
    productContainer.appendChild(div);
  });
};

const handleAddToCart = (name, price) => {
  const cartCount = document.getElementById("count").innerText;
  let convertedCount = parseInt(cartCount);
  convertedCount = convertedCount + 1;
  document.getElementById("count").innerText = convertedCount;

  const container = document.getElementById("cart_main_container");

  const div = document.createElement("div");
  div.classList.add("cart_info");
  div.innerHTML = `
    <p>${name.slice(0, 6)}</p>
    <h3 class="price">${price}</h3>
  `;
  container.appendChild(div);
  updateTotal();
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");

  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
  }
  document.getElementById("total").innerText = count.toFixed(2);
};

const singleProduct = (id) => {
  console.log(id);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

loadAllProduct();
