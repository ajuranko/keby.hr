const mobileMenuPanel = document.querySelector("#mobile-menu-panel");
const mobileMenuButtonClose = document.querySelector("#mobile-menu-button-close");
mobileMenuButtonClose.addEventListener("click", (event) => {
    mobileMenuPanel.classList.add("hidden");
});

const mobileMenuButtonOpen = document.querySelector("#mobile-menu-button-open");
mobileMenuButtonOpen.addEventListener("click", (event) => {
    mobileMenuPanel.classList.remove("hidden");
});

