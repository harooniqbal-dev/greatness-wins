import { h, render } from "preact";

import Cart from "./Cart";
import { trigger, handleCartClosingEvents } from "./cart-utils/CartEvents";

const cartDrawerInner = document.querySelector(".js-cart-drawer-inner");
const cartToggleButton = document.querySelector(".js-cart-button");
const cartRoot = document.querySelector(".js-cart-drawer-root");
const cartCloseButton = document.querySelector(".js-close-cart");

if (cartDrawerInner) {
    render(<Cart />, cartDrawerInner);
}

if (cartToggleButton && cartCloseButton) {
    [cartCloseButton, cartToggleButton].forEach((button) => {
        button.addEventListener("click", () => {
            trigger("refreshShoppingCart");
            cartRoot.classList.toggle("translate-x-full");
            document.body.classList.toggle("overflow-hidden");
        });
    });
}

window.addEventListener("load", () => {
    trigger("refreshShoppingCart");
    handleCartClosingEvents(cartRoot, cartToggleButton);
});
