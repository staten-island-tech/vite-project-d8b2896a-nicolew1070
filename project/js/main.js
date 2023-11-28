import "../css/style.css";
import { DOMSelectors } from "./dom.js";
import { desserts } from "./desserts.js";

 document.querySelector("#change-theme").addEventListener("click", function () {
  if (document.body.classList.contains("freshy")) {
    document.body.classList.add("minty");
    document.body.classList.remove("freshy");
  } else {
    document.body.classList.add("freshy");
    document.body.classList.remove("minty");
  }
});

function all () {
  desserts.forEach((item) =>
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card"> 
    <h2>${item.name}</h2> 
    <img class="display-img" src="${item.img}" alt="">
    <h3>${item.price}</h3>
    <h3>${item.calories}</h3>`
    )
  );
}

function cakes () {
  const cake = desserts.filter((item) => item.class.includes("Cake"));
  cake.forEach((item) =>
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card"> 
    <h2>${item.name}</h2> 
    <img class="display-img" src="${item.img}" alt="">
    <h3>${item.price}</h3>
    <h3>${item.calories}</h3>`
    )
  );
}

function cookies () {
const cookie = desserts.filter((item) => item.class.includes("Cookie"));
cookie.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
  <h2>${item.name}</h2> 
  <img class="display-img" src="${item.img}" alt="">
  <h3>${item.price}</h3>
    <h3>${item.calories}</h3>`
  )
);
  }

function icecreams () {
const icecream = desserts.filter((item) => item.class.includes("Ice Cream"));
icecream.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
  <h2>${item.name}</h2> 
  <img class="display-img" src="${item.img}" alt="">
  <h3>${item.price}</h3>
    <h3>${item.calories}</h3>`
  )
);
  }

function drinks () {
const drink = desserts.filter((item) => item.class.includes("Drink"));
drink.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
  <h2>${item.name}</h2> 
  <img class="display-img" src="${item.img}" alt="">
  <h3>${item.price}</h3>
    <h3>${item.calories}</h3>`
  )
);
}

DOMSelectors.all.addEventListener("click", function (){
DOMSelectors.card.innerHTML = '';
all ();
});

DOMSelectors.cake.addEventListener("click", function () {
DOMSelectors.card.innerHTML = '';
cakes ();
});

DOMSelectors.cookie.addEventListener("click", function () {
DOMSelectors.card.innerHTML = '';
cookies ();
});

DOMSelectors.icecream.addEventListener("click", function () {
DOMSelectors.card.innerHTML = '';
icecreams ();
});

DOMSelectors.drink.addEventListener("click", function () {
DOMSelectors.card.innerHTML = '';
drinks ();
});

all (); 