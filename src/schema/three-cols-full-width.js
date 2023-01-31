/**
 * Schema for sections/three-cols-full-width.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Three columns full width",
    max_blocks: 3,
    settings: [...spacingSettings],
    blocks: [
        {
            type: "list",
            name: "Column",
            settings: [
                {
                    type: "image_picker",
                    id: "col_image",
                    label: "Image",
                },
                {
                    type: "text",
                    id: "col_title",
                    label: "Title",
                },
                {
                    type: "richtext",
                    id: "col_desc",
                    label: "Description",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Three columns full width",
            category: "Section",
        },
    ],
};
