import { h } from "preact";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import clsx from "clsx";
import Chevron from "./Primitives/Chevron";

const ProductPicker = ({
    show,
    showList,
    prodTitle,
    productsList,
    collectionIndex,
    handleChange,
}) => (
    <div className="flex w-full items-center justify-center relative pt-16">
        <span
            className={clsx(
                "flex flex-col py-2 z-6 bg-white absolute top-2 transition-all duration-300 ease-linear",
                show && "shadow-lg opacity-1"
            )}
        >
            <button onClick={showList} className="comparison-section__title" type="button">
                <div className="flex flex-row justify-between items-center">
                    <p className="mr-2">{prodTitle}</p>
                    <Chevron />
                </div>
            </button>
            {show && (
                <div className="flex flex-col w-full items-center justify-center mt-2 z-6">
                    {productsList[collectionIndex].map((product, index) => (
                        <button
                            key={uuid()}
                            type="button"
                            onClick={() => handleChange(index)}
                            className="text-lg lg:text-sm h-12 lg:h-8 px-2 w-full flex items-center justify-center cursor-pointer hover:bg-orange hover:text-white"
                        >
                            {product.title}
                        </button>
                    ))}
                </div>
            )}
        </span>
    </div>
);

ProductPicker.propTypes = {
    show: PropTypes.bool.isRequired,
    showList: PropTypes.func.isRequired,
    prodTitle: PropTypes.string.isRequired,
    productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
    collectionIndex: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ProductPicker;
