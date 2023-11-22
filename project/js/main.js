import "../css/style.css";
import "../js/desserts.js";
import "../js/dom.js";

document.querySelector(".change-theme").addEventListener("click", function () {
    if(document.body.classList.contains("light")) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}
);

function card () {
 desserts.forEach((desserts)=> DOMSelectors.display.insertAdjacentHTML(
        "beforeend",
        `<div class="display-card"> 
        <h2>${desserts.name.value}</h2> 
        <h3>${desserts.instock.value}</h3>  
        <img class="display-img" src="${desserts.img.value}" alt="">`)
        );
}