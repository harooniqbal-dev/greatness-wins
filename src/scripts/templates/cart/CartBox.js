/* eslint-disable camelcase */
/**
 * Cart Box Component
 */
import { h, render } from "preact";
import PropTypes from "prop-types";
import uuid from "react-uuid";

// Import Cart Box child components
import CartItem from "./cart-item/CartItem";
import CartShippingBar from "../../components/cart/cart-shipping-bar/CartShippingBar";

const freeShipComponent = document.querySelector(".js-cart-box-free-ship");
/**
 * Cart Box Component
 */
const CartBox = ({ content, data, updateQuantity }) => {
    // Get content
    const { shipping, freeShippingFrom } = content;
    // render free shipping bar
    if (freeShipComponent) {
        render(
            <CartShippingBar
                content={shipping}
                freeShipping={freeShippingFrom}
                total={data.items_subtotal_price / 100}
            />,
            freeShipComponent
        );
    }

    return (
        <div className="js-cart-drawer-component">
            {data.items && (
                <div className="flex flex-col pb-10">
                    <ul className="custom-scrollbar md:max-h-[26.5rem] overflow-y-auto">
                        {data.items.map((item) => {
                            const {
                                index,
                                url,
                                featured_image,
                                product_title,
                                options_with_values,
                                final_line_price,
                                variant_id,
                                quantity,
                            } = item;

                            return (
                                <CartItem
                                    index={index}
                                    url={url}
                                    featured_image={featured_image}
                                    product_title={product_title}
                                    options_with_values={options_with_values}
                                    price={final_line_price / 100}
                                    variant_id={variant_id}
                                    quantity={quantity}
                                    updateQuantityHandler={updateQuantity}
                                    key={uuid()}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

CartBox.propTypes = {
    data: PropTypes.object,
    content: PropTypes.object,
    updateQuantity: PropTypes.func,
};

CartBox.defaultProps = {
    data: {},
    content: {},
    updateQuantity: () => {},
};

export default CartBox;
