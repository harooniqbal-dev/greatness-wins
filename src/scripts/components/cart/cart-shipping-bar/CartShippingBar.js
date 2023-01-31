/**
 * Cart Item Component
 */
import { h } from "preact";
import PropTypes from "prop-types";
import replacePlaceholdersWithStrings from "../../../helpers/replace-placeholders-with-strings";
import getCurrencyFormat from "../../../helpers/get-currency-format";

const calculateCostAway = (freeShippingFrom, cartTotal) => freeShippingFrom - cartTotal;
const getBarWidth = (freeShippingFrom, cartTotal) => {
    if (cartTotal > freeShippingFrom) return 100;

    return (cartTotal * 100) / freeShippingFrom;
};

const CartShippingBar = ({ content, freeShipping, total }) => {
    const costAwayFreeShipping = calculateCostAway(freeShipping, total);
    const barWidth = `${getBarWidth(freeShipping, total)}%`;

    if (total && total > 0) {
        return (
            <div className="flex flex-col items-center text-center">
                <div className="relative w-full h-[0.375rem] bg-[#9A9898] mb-2">
                    <div
                        style={{ width: barWidth }}
                        className="absolute top-0 left-0 h-[0.375rem] bg-black transition-[width]"
                    />
                </div>
                <p className="leading-7 text-sm font-normal">
                    {(() => {
                        if (costAwayFreeShipping > 0) {
                            return replacePlaceholdersWithStrings(content.away, [
                                getCurrencyFormat(costAwayFreeShipping),
                            ]);
                        }

                        return content.unlocked;
                    })()}
                </p>
            </div>
        );
    }
    return "";
};

CartShippingBar.propTypes = {
    content: PropTypes.string,
    freeShipping: PropTypes.number,
    total: PropTypes.number,
};

CartShippingBar.defaultProps = {
    content: "",
    freeShipping: 0,
    total: 0,
};

export default CartShippingBar;
