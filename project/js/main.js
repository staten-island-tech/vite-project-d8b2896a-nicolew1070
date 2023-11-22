import "../css/style.css";
import "../js/desserts.js";
import "../js/dom.js";

function x () {
 desserts.forEach((desserts)=> DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card"> 
        <h2>${desserts.name.value}</h2> 
        <h3>${desserts.instock.value}</h3>  
        <img class="display-img" src="${desserts.img.value}" alt="">`)
        );
}

document.querySelector(".change-theme").addEventListener("click", function () {
    if(document.body.classList.contains("freshy")) {
        document.body.classList.add("minty");
        document.body.classList.remove("freshy");
    } else {
        document.body.classList.add("freshy");
        document.body.classList.remove("minty");
    }
}
);