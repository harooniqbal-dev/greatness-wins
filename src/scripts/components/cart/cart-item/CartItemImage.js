/**
 * Cart Item Image
 */
import { h } from "preact";
import { memo } from "preact/compat";
import PropTypes from "prop-types"; // ES6

const Image = ({ url, alt }) => (
    <img src={url} alt={alt} className="object-cover w-full h-full" width="96" height="96" />
);

const CartItemImage = memo(Image);

Image.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
};

Image.defaultProps = {
    url: "",
    alt: "",
};

export default CartItemImage;
