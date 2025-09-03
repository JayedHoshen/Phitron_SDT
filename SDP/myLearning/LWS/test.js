/* ----------> Learn with sumit: DOM manipulations */
// console.dir(document);

// getElementsByTagName
// let items = document.getElementsByTagName("h1");
// console.log(items);

// getElementById
// let headerElement = document.getElementById("header");
// console.log(headerElement.textContent);
// console.log(headerElement.innerText);
// console.log(headerElement.innerHTML);

// getElementsByClassName
// let itemUL = document.getElementById("items");
// let items = itemUL.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "red";
// }

// ---------- Query selector (any css selector, like jQuery)
// let header = document.querySelector('#header');
// let lastItem = document.querySelector(".item:last-child");
// let lastItem = document.querySelector('#items').querySelector('.item:nth-child(3)');
// let nthItem = document.querySelector(".item:nth-child(3)");
// let lastItems = document.querySelectorAll(".item:last-child");

// ------------ parent/child relation
// const grandParent = document.querySelector(".container");
// const parent = grandParent.children;
// const child = parent[1].children;
// const children = grandParent.querySelectorAll(".item");
// console.log(children);

// reverse parent/child/ancestor relation
// const children = document.querySelector(".item");
// const parent = children.parentElement;
// console.log(parent);
// const closestParent = children.closest(".container");
// console.log(closestParent);
// const childrenTwo = document.querySelector('.item').nextElementSibling;
// const childrenOne = childrenTwo.previousElementSibling;
// childrenTwo.style.color = 'blue';
// childrenOne.style.color = 'red';

// ---------- creating an element
// const divElement = document.createElement("div");
// divElement.className = "red";
// divElement.setAttribute("id", "red");
// divElement.setAttribute("title", "red div");
// divElement.type = 'email';

// const mainDiv = document.querySelector(".container");

// const h1Element = mainDiv.querySelector("h1");
// mainDiv.insertBefore(divElement, h1Element);

// const a = mainDiv.appendChild(divElement);
// console.log(a); return full div
// const b = mainDiv.append(divElement);
// console.log(b); return undefined

// mainDiv.append(divElement, document.createElement("p"), "Hello world"); // all are present output
// mainDiv.appendChild(divElement, document.createElement("p"), "hello world"); // just div are present

// --- Event listeners
const headerElement = document.querySelector("#header");
headerElement.addEventListener("mouseover", (event) => {
  // various type of event (click, mouseenter, mouseover, mousemove, keydown, keyup, keypress, focus, blur, cut, paste, input, submit, etc.)
  event.preventDefault();
  console.log(event.target.value);
});
