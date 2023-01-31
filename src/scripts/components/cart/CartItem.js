/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/**
 * Cart Item Component
 */
import { h, Fragment } from "preact";
import PropTypes from "prop-types"; // ES6
import uuid from "react-uuid";
import getCurrencyFormat from "../../helpers/get-currency-format";

const CartItem = ({
    index,
    url,
    featured_image,
    product_title,
    options_with_values,
    price,
    variant_id,
    quantity,
    updateQuantityHandler,
}) => {
    const formattedPrice = getCurrencyFormat(price);

    return (
        <Fragment>
            <a href={url} className="min-w-[5.1875rem] w-[5.1875rem] h-[5.1875rem]">
                <img
                    src={featured_image.url}
                    alt={featured_image.alt}
                    className="lazypreload object-cover w-full h-full"
                    width="83"
                    height="83"
                    loading="lazy"
                />
            </a>
            <div className="ml-4 text-sm">
                <h3 className="font-normal">{product_title}</h3>
                <dl>
                    {options_with_values.map((option) => (
                        <div className="flex" key={uuid()}>
                            <dt>{option.name}:&nbsp;</dt>
                            <dd>{option.value}</dd>
                        </div>
                    ))}
                </dl>
                <div className="flex justify-between items-center">
                    <div
                        data-variant-id={variant_id}
                        className="flex border border-black text-xxs p-[0.6125rem] js-quantity-wrapper"
                    >
                        <label
                            htmlFor={`product-quantity-${variant_id}-${index + 1}`}
                            className="sr-only"
                        >
                            label
                        </label>
                        <button
                            onClick={() => updateQuantityHandler(variant_id, quantity, false)}
                            type="button"
                            className="p-0.5 font-semibold js-cart-item-quantity-decrease"
                        >
                            &minus;
                        </button>
                        <input
                            id={`product-quantity-${variant_id}-${index + 1}`}
                            type="number"
                            step="1"
                            min="0"
                            value={quantity}
                            className="cart__qunatity-input bg-transparent focus:outline-none text-xxs font-semibold text-black text-center w-7 leading-5"
                        />
                        <button
                            onClick={() => updateQuantityHandler(variant_id, quantity, true)}
                            type="button"
                            className="p-0.5 font-semibold js-cart-item-quantity-increase"
                        >
                            &#43;
                        </button>
                    </div>
                    {formattedPrice && <p>{getCurrencyFormat(price)}</p>}
                </div>
            </div>
        </Fragment>
    );
};

CartItem.propTypes = {
    index: PropTypes.number,
    url: PropTypes.string,
    featured_image: PropTypes.object,
    product_title: PropTypes.string,
    options_with_values: PropTypes.object,
    price: PropTypes.number,
    variant_id: PropTypes.number,
    quantity: PropTypes.number,
    updateQuantityHandler: PropTypes.func,
};

CartItem.defaultProps = {
    index: 0,
    url: "",
    featured_image: {},
    product_title: "",
    options_with_values: {},
    price: 0,
    variant_id: 0,
    quantity: 0,
    updateQuantityHandler: () => {},
};

export default CartItem;
