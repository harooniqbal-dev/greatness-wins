import { h, render } from "preact";
import CartComponent from "./CartComponent";

const cartRoot = document.querySelector(".js-cart-root");

if (cartRoot) {
    render(<CartComponent />, cartRoot);
}
