window.addEventListener("load", () => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (mediaQuery.matches) {
        [...document.querySelectorAll(".js-zoom-image")].forEach(() => {});
    }
});
