/**
 * Schema for sections/full-width-image-boxes.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Full Width Image Boxes",
    settings: [
        {
            type: "select",
            id: "styling",
            label: "Styling",
            options: [
                {
                    value: "simple",
                    label: "Simple",
                },
                {
                    value: "with_description",
                    label: "With description",
                },
            ],
        },
        ...spacingSettings,
    ],
    blocks: [
        {
            type: "item",
            name: "Item",
            settings: [
                {
                    type: "image_picker",
                    id: "image",
                    label: "Image",
                },
                {
                    type: "url",
                    id: "url",
                    label: "URL",
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
            ],
        },
    ],
    presets: [
        {
            name: "Full Width Image Boxes",
            category: "Section",
        },
    ],
};
