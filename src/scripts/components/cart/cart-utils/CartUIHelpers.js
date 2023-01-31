/**
 * Cart UI helper functions
 */
import getCurrencyFormat from "../../../helpers/get-currency-format";

/**
 * Update total cart price element
 * @param {object} cartData
 * @param {HTMLElement} totalCostElement
 * @returns {number}
 */
const updateTotalPrice = (cartData, totalCostElement) => {
    if (!totalCostElement) return;

    totalCostElement.textContent = getCurrencyFormat(
        cartData.items_subtotal_price > 0 ? cartData.items_subtotal_price / 100 : 0
    );
};

/**
 * Show empty cart content or cart items depends on the cartData entry
 * @param {object} cartData
 * @param {HTMLElement} itemsWrapper
 * @param {HTMLElement} emptyWrapper
 */
const toggleCartWrapperVisibility = (cartData, itemsWrapper, emptyWrapper) => {
    if (cartData.items && cartData.items.length > 0) {
        if (itemsWrapper.classList.contains("hidden")) {
            itemsWrapper.classList.remove("hidden");
            emptyWrapper.classList.add("hidden");
        }
    } else {
        itemsWrapper.classList.add("hidden");
        emptyWrapper.classList.remove("hidden");
    }
};

export { updateTotalPrice, toggleCartWrapperVisibility };
