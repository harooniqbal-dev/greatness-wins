/**
 * Skip links scripts
 */

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".skip-links")) {
        const skipLinks = document.querySelectorAll(".js-skip-link");
        const focusableElementsSelector =
            "button, [href]:not(.js-hidden-element), input, select, textarea, [tabindex]:not([tabindex='-1'])";
        const header = document.querySelector(".js-main-header");
        const main = document.querySelector(".js-main-content");
        const footer = document.querySelector(".js-main-footer");

        const focusableElements = {
            header: header.querySelectorAll(focusableElementsSelector),
            main: main.querySelectorAll(focusableElementsSelector),
            footer: footer.querySelectorAll(focusableElementsSelector),
        };

        skipLinks.forEach((link) => {
            link.addEventListener("click", () => {
                const target = link.hash.replace("#", "");
                const elementToFocus = focusableElements[target][0];
                const mediaQuery = window.matchMedia("(min-width: 1024px)");

                if (mediaQuery.matches) {
                    setTimeout(() => {
                        elementToFocus.focus();
                    }, 100);
                }
            });
        });
    }
});
