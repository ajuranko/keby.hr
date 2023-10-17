//
const mobileMenuPanel = document.querySelector("#mobile-menu-panel");

//
const mobileMenuButtonClose = document.querySelector("#mobile-menu-button-close");
mobileMenuButtonClose.addEventListener("click", () => {
    mobileMenuPanel.classList.add("hidden");
});

//
const mobileMenuButtonOpen = document.querySelector("#mobile-menu-button-open");
mobileMenuButtonOpen.addEventListener("click", () => {
    mobileMenuPanel.classList.remove("hidden");
});

//
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
mobileMenuLinks.forEach((element) => {
    element.addEventListener("click", () => {
        mobileMenuPanel.classList.add("hidden");
    });
});

setTimeout(() => {
    //
    const leaflet = document.querySelector(".leaflet-attribution-flag");
    leaflet.remove()
}, 1000);
