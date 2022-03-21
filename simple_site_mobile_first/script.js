const toggler = document.getElementById("nav-toggle")
const menu = document.getElementById("nav-menu")

toggler.addEventListener("click", () => {
    menu.classList.toggle("show")
})
