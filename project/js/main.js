import "../css/style.css";
import "../js/desserts.js";

function card (dessert) {
    document.querySelector(".display").insertAdjacentHTML(
        "beforeend",
        `<div class="display-card"> 
        <h2>${pokemon.name.value}</h2> 
        <h3>${pokemon.type.value}</h3>  
        <img class="display-img" src="${pokemon.url.value}" alt="">` 
        );
}