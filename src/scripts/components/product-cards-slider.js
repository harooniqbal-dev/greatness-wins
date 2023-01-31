/**
 * Images slider section scripts
 */
import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".js-swiper-product-cards");

    sliders.forEach((slider) => {
        new Swiper(slider, {
            loop: true,
            slidesPerView: 2,
            slidesOffsetBefore: 100,
            spaceBetween: 26,
            navigation: {
                nextEl: slider.getAttribute("data-button-next"),
                prevEl: slider.getAttribute("data-button-prev"),
            },
            breakpoints: {
                640: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 5,
                },
                1280: {
                    slidesPerView: "auto",
                },
            },
        });
    });
});
