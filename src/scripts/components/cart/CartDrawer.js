/* eslint-disable camelcase */
/**
 * Cart Drawer Component
 */
import { h } from "preact";
import PropTypes from "prop-types"; // ES6
import uuid from "react-uuid";

// Import Cart Drawer child components
import CartItem from "./cart-item/CartItem";
import CartShippingBar from "./cart-shipping-bar/CartShippingBar";

/**
 * Cart Drawer Component
 */
const CartDrawer = ({ content, data, updateQuantity }) => {
    // Get content
    const { shipping, freeShippingFrom } = content;

    return (
        <div className="js-cart-drawer-component">
            <CartShippingBar
                content={shipping}
                freeShipping={freeShippingFrom}
                total={data.items_subtotal_price / 100}
            />

            {data.items && data.items.length > 0 && (
                <div className="flex flex-col pt-12 pb-10 test">
                    <ul className="custom-scrollbar md:max-h-[19.5rem] overflow-y-auto">
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

CartDrawer.propTypes = {
    data: PropTypes.object,
    content: PropTypes.object,
    updateQuantity: PropTypes.func,
};

CartDrawer.defaultProps = {
    data: {},
    content: {},
    updateQuantity: () => {},
};

export default CartDrawer;
