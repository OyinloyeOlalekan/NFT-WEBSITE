var t = document.querySelector("#toggle-btn");
var m = document.querySelector(".nav-menu");
t.addEventListener("click", () => {
    m.classList.toggle("open")
    t.classList.toggle("bar")
})