// Define function to check existing of elements
// Can declare elements first, then click event
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener("click", () => {
            // SHOW MENU
            navbar.classList.toggle("show")
            // ROTATE TOGGLE
            toggle.classList.toggle("rotate")
            // PADDING BODY
            bodypadding.classList.toggle("expander")
        })
    }
}
showMenu("nav-toggle", "navbar", "body")

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll(".nav__link")
// remove all active classes, then apply to clicked item (this.)
function colorLink() {
    linkColor.forEach((l) => l.classList.remove("active"))
    this.classList.add("active")
}

linkColor.forEach((l) => l.addEventListener("click", colorLink))
