/* eslint-disable */
import { h } from "preact";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import DOMPurify from "dompurify";
import locales from "../../../locales/en.default.json";
import ColorPicker from "./ColorPastile";

const MetafieldsParser = ({ metafields }) => {

    const { comparison } = locales;
    const { best_for: bestFor } = comparison;

    return (
    <div className="text-sm mt-4">
        {metafields.map((metafield) => {
            const { key, value } = metafield;
            switch (key) {
                case "bonuses":
                case "liner":
                case "features":
                    return (
                        <div className="mt-4">
                            <h4 className="uppercase">{key}</h4>
                            <div>
                                {value.split("\n").map((content) => (
                                    <p key={uuid()}>{content}</p>
                                ))}
                            </div>
                        </div>
                    );
                case "shell_fabric":
                case "inseam":
                    return (
                        <div className="mt-4">
                            <h4 className="uppercase">{key}</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(value),
                                }}
                            />
                        </div>
                    );
                case "best_for":
                    return (
                        <div className="mt-4">
                            <h4 className="uppercase">{bestFor}</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(value),
                                }}
                            />
                        </div>
                    );
                case "colors":
                    return <ColorPicker title={key} colorObject={JSON.parse(value)} />;
                default:
                    break;
            }
        })}
    </div>
)};

MetafieldsParser.propTypes = {
    metafields: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MetafieldsParser;
