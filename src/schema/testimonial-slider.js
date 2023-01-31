/**
 * Schema for sections/testimonial-slider.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Testimonial slider",
    settings: [...spacingSettings],
    blocks: [
        {
            type: "testimonial_slider_item",
            name: "Testimonial slider item",
            limit: 10,
            settings: [
                {
                    type: "image_picker",
                    label: "Image",
                    id: "testimonial_slider_item_image",
                },
                {
                    type: "richtext",
                    label: "Quote",
                    id: "testimonial_slider_item_quote",
                },
                {
                    type: "text",
                    label: "Author",
                    id: "testimonial_slider_item_author",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Testimonial slider",
            category: "Section",
        },
    ],
};
