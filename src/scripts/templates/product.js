/**
 * Product template scripts
 */

window.addEventListener("load", () => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (mediaQuery.matches) {
        [...document.querySelectorAll(".js-zoom-image")].forEach((zoomImage) => {
            zoomImage.addEventListener("mousemove", (e) => {
                const zoomer = e.currentTarget;
                let offsetX;
                let offsetY;
                if (e.offsetX) {
                    offsetX = e.offsetX;
                } else {
                    offsetX = e.touches !== undefined ? e.touches[0].pageX : 0;
                }
                if (e.offsetY) {
                    offsetY = e.offsetY;
                } else {
                    offsetX = e.touches !== undefined ? e.touches[0].pageX : 0;
                }
                const x = (offsetX / zoomer.offsetWidth) * 100;
                const y = (offsetY / zoomer.offsetHeight) * 100;
                zoomer.style.backgroundPosition = `${x}% ${y}%`;
            });
        });
    }
});
