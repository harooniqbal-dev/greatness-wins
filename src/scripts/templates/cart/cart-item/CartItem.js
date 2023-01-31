/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/**
 * Cart Item Component
 */
import DOMPurify from "dompurify";
import { h } from "preact";
import { useState } from "preact/hooks";
import PropTypes from "prop-types"; // ES6
import uuid from "react-uuid";
import getCurrencyFormat from "../../../helpers/get-currency-format";
import CartItemImage from "../../../components/cart/cart-item/CartItemImage";
import CartItemLoader from "../../../components/cart/cart-item/CartItemLoader";

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
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    const handleQuantityChange = (newQuantity) => {
        setCurrentQuantity(newQuantity);
    };

    const placeholderImage = document.querySelector(".js-product-placeholder-image").innerHTML;

    return (
        <li className="cart__list-item flex mb-2 mx-2 md:mx-auto lg:mx-2 last:mb-0 pb-2 border-b border-black pr-3 relative max-w-[36rem] js-cart-list-item">
            <a href={url} className="w-24 h-24 bg-alabaster">
                {featured_image.url ? (
                    <CartItemImage url={featured_image.url} alt={featured_image.alt} />
                ) : (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(placeholderImage),
                        }}
                    />
                )}
            </a>
            <div className="flex-1 pt-3 pb-2 ml-6 text-sm flex">
                <div className="flex flex-col w-full items-start">
                    <h3 className="font-semibold">{product_title}</h3>
                    <dl className="flex">
                        {options_with_values.map((option, index) => (
                            <div className="inline-flex text-dove-gray text-xxs mt-1" key={uuid()}>
                                <dt>
                                    {index !== 0 && <span className="px-1">/</span>}
                                    <span className="sr-only">{option.name}</span>
                                </dt>
                                <dd>{option.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <h3 className="font-semibold text-xxs flex justify-center items-center w-1/3 mr-3.5">
                    {formattedPrice && <span>{getCurrencyFormat(price)}</span>}
                </h3>
                <div className="flex justify-center items-center mt-auto h-full">
                    <div
                        data-variant-id={variant_id}
                        className="flex border border-black text-xxs px-2 py-1 js-quantity-wrapper"
                    >
                        <button
                            onClick={(e) =>
                                updateQuantityHandler(
                                    variant_id,
                                    currentQuantity - 1,
                                    e.target.closest(".js-cart-list-item")
                                )
                            }
                            type="button"
                            className="p-0.5 font-semibold link-indicator js-cart-item-quantity-decrease"
                        >
                            &minus;
                        </button>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                updateQuantityHandler(
                                    variant_id,
                                    currentQuantity,
                                    e.target.closest(".js-cart-list-item")
                                );
                            }}
                        >
                            <input
                                id={`product-quantity-${variant_id}-${index + 1}`}
                                type="number"
                                step="1"
                                min="0"
                                value={currentQuantity}
                                onChange={(e) => handleQuantityChange(e.target.valueAsNumber)}
                                className="cart__qunatity-input bg-transparent focus:outline-none text-xxs font-semibold text-black text-center w-7 leading-5"
                            />
                        </form>
                        <button
                            onClick={(e) =>
                                updateQuantityHandler(
                                    variant_id,
                                    currentQuantity + 1,
                                    e.target.closest(".js-cart-list-item")
                                )
                            }
                            type="button"
                            className="p-0.5 font-semibold link-indicator js-cart-item-quantity-increase"
                        >
                            &#43;
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart__list-item-loader flex items-center justify-center pointer-events-none transition-opacity invisible opacity-0 absolute top-0 left-0 w-full h-full bg-mercury/50">
                <CartItemLoader />
            </div>
        </li>
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
