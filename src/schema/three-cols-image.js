/**
 * Schema for sections/three-cols-image.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Three columns image",
    settings: [
        {
            content: "Header",
            type: "header",
        },
        {
            type: "text",
            id: "title",
            label: "Title",
        },
        {
            type: "richtext",
            id: "description",
            label: "Description",
        },
        ...spacingSettings,
    ],
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
            name: "Three column image",
            category: "Section",
        },
    ],
};
