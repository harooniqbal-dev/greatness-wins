/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable quote-props */
/**
 * Cart Events helper functions
 */

import axios from "axios";

/**
 * Add
 * @param {string} eventType
 * @param {function} listener
 */
const on = (eventType, listener) => {
    document.addEventListener(eventType, listener);
};

const off = (eventType, listener) => {
    document.removeEventListener(eventType, listener);
};

const once = (eventType, listener) => {
    const handleEventOnce = (event) => {
        listener(event);
        off(eventType, handleEventOnce);
    };

    on(eventType, handleEventOnce);
};

/**
 * Trigger custom event
 * @param {string} eventType
 * @param {object} data
 */
const trigger = (eventType, data) => {
    const event = new CustomEvent(eventType, { detail: data });
    document.dispatchEvent(event);
};

/**
 * Add item to a cart
 * @param {variantId} number - Variant ID of product that will be added to cart
 * @returns {void}
 */
const updateQuantity = (variantId, newQuantity, line) => {
    const formData = {
        quantity: newQuantity,
        id: variantId.toString(),
    };

    line.classList.add("cart__list-item--loading");

    axios({
        method: "post",
        url: "/cart/change.js",
        data: formData,
    })
        .then(() => {
            trigger("refreshShoppingCart");
            setTimeout(() => {
                line.classList.remove("cart__list-item--loading");
            }, 1000);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};

/**
 * Handle cart close when clicking outside the cart or use escape
 * @param {HTMLElement} cartRoot
 * @param {HTMLElement} cartToggleButton
 */
const handleCartClosingEvents = (cartRoot, cartToggleButton) => {
    // Close cart on Escape keydown
    window.addEventListener("keydown", (e) => {
        if (
            e.code === "Escape" &&
            e.target !== document.body &&
            !cartRoot.classList.contains("translate-x-full")
        ) {
            e.preventDefault();
            document.body.classList.remove("overflow-hidden");
            cartRoot.classList.add("translate-x-full");
        }
    });

    // Close cart on outside click
    window.addEventListener("click", (e) => {
        if (cartToggleButton === e.target) return;

        if (
            cartRoot !== e.target &&
            !cartRoot.classList.contains("translate-x-full") &&
            !cartRoot.contains(e.target)
        ) {
            cartRoot.classList.add("translate-x-full");
            document.body.classList.remove("overflow-hidden");
        }
    });
};

export { on, once, off, trigger, updateQuantity, handleCartClosingEvents };
