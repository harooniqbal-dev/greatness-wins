/* eslint-disable */
import { h } from "preact";
import clsx from "clsx";
import PropTypes from "prop-types";

const CollectionButton = ({ title, index, collectionIndex, setCollectionIndex }) => {
    return (
        <button
            className={clsx(
                "border-b border-black w-full pt-2 pb-2 m-0 uppercase font-semibold text-base text-[#00000055] transition-all duration-300 ease-in-out hover:text-black focus:border-b-2 focus:text-black focus:pb-2",
                collectionIndex === index &&
                    "transition-all duration-300 ease-in-out text-[#000000FF] border-b-2 border-black pb-2"
            )}
            type="button"
            onClick={() => {
                setCollectionIndex(index);
            }}
        >
            {title}
        </button>
    );
};

CollectionButton.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    collectionIndex: PropTypes.number.isRequired,
    setCollectionIndex: PropTypes.func.isRequired,
};

export default CollectionButton;
