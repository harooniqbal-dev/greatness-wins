/**
 * Schema for sections/hero.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Hero Banner",
    settings: [
        {
            type: "image_picker",
            id: "image",
            label: "Image",
        },
        {
            label: "Lazyload the image?",
            id: "lazyload",
            type: "checkbox",
            default: false,
        },
        ...spacingSettings,
    ],
    presets: [
        {
            name: "Hero Banner",
            category: "Section",
        },
    ],
};
