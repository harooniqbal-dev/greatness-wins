/**
 * Schema for sections/images-slider.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Images slider",
    settings: [...spacingSettings],
    blocks: [
        {
            type: "image_slider_item",
            name: "Image slider item",
            settings: [
                {
                    type: "image_picker",
                    label: "Image",
                    id: "image_slider_item_image",
                },
                {
                    type: "text",
                    label: "Title",
                    id: "image_slider_item_title",
                },
                {
                    type: "url",
                    label: "URL",
                    id: "image_slider_item_url",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Images Slider",
            category: "Section",
        },
    ],
};
