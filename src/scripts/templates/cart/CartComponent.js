/**
 * Dynamic Store Cart Component
 */

/* eslint-disable camelcase */
import axios from "axios";
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import locales from "../../../locales/en.default.json";

// Import Cart components and helper functions
import CartBox from "./CartBox";
import { updateQuantity } from "../../components/cart/cart-utils/CartEvents";
import {
    updateTotalPrice,
    toggleCartWrapperVisibility,
} from "../../components/cart/cart-utils/CartUIHelpers";

// Set of HTML elements
const cartRoot = document.querySelector(".js-cart-root");
const cartTotalCost = document.querySelector(".js-cart-subtotal-cost");
const cartWrapperHasItems = document.querySelector(".js-cart-box--has-items");
const cartWrapperNoItems = document.querySelector(".js-cart-box--no-items");

/**
 * Cart Component
 */
const CartComponent = () => {
    // Set of useState variables
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState({});

    // Set of content data
    const { cart } = locales;
    const { head, shipping, free_shipping_heading, items_subtotal_price, checkout_link } = cart;
    const { away, unlocked } = shipping;

    /**
     * Mutation observer which is used to listen to class attribute changes on a given element
     * In that case it checks if a cart was opened, if so it update isOpen to fetch cart data
     */
    // eslint-disable-next-line no-unused-vars
    const attrObserver = (mutationsList, observer) => {
        mutationsList.forEach((mutation) => {
            if (mutation.attributeName === "class") {
                setIsOpen(!isOpen);
            }
        });
    };
    const mutationObserver = new MutationObserver(attrObserver);
    mutationObserver.observe(cartRoot, { attributes: true });

    // Content mapping object
    const content = {
        head,
        shipping: {
            away,
            unlocked,
        },
        freeShippingFrom: cartRoot.dataset.freeShippingFrom,
        freeShippingHeading: free_shipping_heading,
        totalPrice: items_subtotal_price,
        checkoutLink: checkout_link,
    };

    /**
     * A handler function to trigger updateQuantity method from CartEvents.js
     * @param {number} variantId
     * @param {number} currentQuantity
     */
    const updateQuantityHandler = (variantId, currentQuantity, line) => {
        if (!variantId) throw new Error("No variant ID provided");
        if (!currentQuantity && currentQuantity !== 0)
            throw new Error("No current quantity provided");

        updateQuantity(variantId, currentQuantity, line);
    };

    /**
     * Fetching cart data function
     */
    const fetchData = async () => {
        try {
            const { data: cartData } = await axios.get("/cart.js");
            setData(cartData);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    /**
     * Attach custom refreshShoppingCart event listener and run fetchData function as a callback
     */
    useEffect(() => {
        document.addEventListener("refreshShoppingCart", fetchData);

        return () => {
            document.removeEventListener("refreshShoppingCart", fetchData);
        };
    }, []);

    /**
     * Update cart UI elements on data change
     */
    useEffect(() => {
        const updateCartUI = () => {
            updateTotalPrice(data, cartTotalCost);
            toggleCartWrapperVisibility(data, cartWrapperHasItems, cartWrapperNoItems);
        };

        updateCartUI();
    }, [data]);

    // Returns a Cart Drawer component
    return <CartBox content={content} data={data} updateQuantity={updateQuantityHandler} />;
};

export default CartComponent;
