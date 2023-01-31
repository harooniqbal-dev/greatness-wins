import { h } from "preact";
import PropTypes from "prop-types";

const Image = ({ source, alt }) => (
    <img src={source} alt={alt} className="min-h-[25rem] object-cover" />
);

Image.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;
