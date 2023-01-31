/**
 * Images slider section scripts
 */
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".js-splide")) {
        new Splide(".js-splide", {
            type: "loop",
            arrows: true,
            arrowPath: "",
            pagination: false,
        }).mount();
    }
});
