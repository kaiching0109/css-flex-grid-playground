const nav = document.querySelector(".nav-links");
const burder = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burder.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burder.classList.toggle("toggle");
});


links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burder.classList.toggle("toggle");
    })
})