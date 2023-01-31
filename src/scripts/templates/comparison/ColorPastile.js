import { h } from "preact";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import clsx from "clsx";

const ColorPicker = ({ title, colorObject }) => {
    const { colors } = colorObject;

    return (
        <div className="mt-4">
            <h4 className="uppercase font-semibold text-md">{title}</h4>
            <div className="flex flex-row">
                {colors.length &&
                    colors.map((clr, index) => {
                        const { color } = clr;
                        return (
                            <div key={uuid()} className={clsx("w-8 h-8 mr-2", `square${index}`)}>
                                <style jsx>{`
                                    .square${index} {
                                        background: ${color};
                                    }
                                `}</style>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

ColorPicker.propTypes = {
    title: PropTypes.string.isRequired,
    colorObject: PropTypes.string.isRequired,
};

export default ColorPicker;
