/**
 * Schema for sections/letter.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Letter",
    max_blocks: 6,
    settings: [
        {
            type: "text",
            id: "title",
            label: "Test title",
        },
        {
            type: "richtext",
            id: "content",
            label: "Content",
        },
        ...spacingSettings,
    ],
    blocks: [
        {
            type: "image_slider_item",
            name: "Image slider item",
            settings: [
                {
                    type: "image_picker",
                    label: "Image",
                    id: "image_block",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Letter",
            category: "Section",
        },
    ],
};
