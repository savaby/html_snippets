const menu = document.getElementById("nav-menu")
const openMenu = document.getElementById("nav-toggle")
const closeMenu = document.getElementById("nav-close")

const menuItems = document.querySelectorAll(".nav__link")

openMenu.addEventListener("click", () => {
    menu.classList.add("show")
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show")
})

// Using function declaration to use this - linked to click target
function activateItem() {
    menuItems.forEach((i) => {
        i.classList.remove("active")
    })
    this.classList.add("active")

    menu.classList.remove("show")
}

menuItems.forEach((item) => {
    item.addEventListener("click", activateItem)
})
