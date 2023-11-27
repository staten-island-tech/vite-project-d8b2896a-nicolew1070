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
    <h3>${item.class}</h3>  
    <img class="display-img" src="${item.img}" alt="">`
    )
  );
}

function cake () {
  const cake = desserts.filter((item) => item.class.includes("Cake"));
  cake.forEach((item) =>
    DOMSelectors.card.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card"> 
            <h2>${item.name}</h2> 
            <h3>${item.class}</h3>  
            <img class="display-img" src="${item.img}" alt="">`
    )
  );
}

function cookie () {
const cookie = desserts.filter((item) => item.class.includes("Cookie"));
cookie.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
            <h2>${item.name}</h2> 
            <h3>${item.class}</h3>  
            <img class="display-img" src="${item.img}" alt="">`
  )
);
  }

function icecream () {
const icecream = desserts.filter((item) => item.class.includes("Ice Cream"));
icecream.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
            <h2>${item.name}</h2> 
            <h3>${item.class}</h3>  
            <img class="display-img" src="${item.img}" alt="">`
  )
);
  }

function drink () {
const drink = desserts.filter((item) => item.class.includes("Drink"));
drink.forEach((item) =>
  DOMSelectors.card.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card"> 
            <h2>${item.name}</h2> 
            <h3>${item.class}</h3>  
            <img class="display-img" src="${item.img}" alt="">`
  )
);
}

function remove () {
    all.forEach((item)=> item.remove());
    cake.forEach((item)=> item.remove());
    cookie.forEach((item)=> item.remove());
    icecream.forEach((item)=> item.remove());
    drink.forEach((item)=> item.remove());
}

DOMSelectors.all.addEventListener("click", function (){
all ();
remove ();
});

DOMSelectors.cake.addEventListener("click", function () {
cake ();
remove ();
});

DOMSelectors.cookie.addEventListener("click", function () {
cookie ();
remove ();
});

DOMSelectors.icecream.addEventListener("click", function () {
icecream ();
remove ();
});

DOMSelectors.drink.addEventListener("click", function () {
drink ();
remove ();
});

//fix the remove so that it works
//work on css for the cards 