/**
 * Schema for sections/athletes.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Athletes",
    settings: [
        {
            type: "text",
            id: "title",
            label: "Title",
        },
        {
            type: "text",
            id: "description",
            label: "Description",
        },
        {
            type: "text",
            id: "button_label",
            label: "Button text",
            default: "show more",
        },
        {
            type: "text",
            id: "button_aria_label",
            label: "Button aria label",
            default: "Show more sponsored athletes cards",
        },
        ...spacingSettings,
    ],
    blocks: [
        {
            type: "athlete_card",
            name: "Card",
            settings: [
                {
                    type: "image_picker",
                    label: "Image",
                    id: "image_block",
                },
                {
                    type: "text",
                    id: "title",
                    label: "Title",
                },
                {
                    type: "text",
                    id: "subtitle",
                    label: "Subtitle",
                },
                {
                    type: "text",
                    id: "products_heading",
                    label: "Products heading",
                },
                {
                    type: "product",
                    id: "first_product_pick",
                    label: "First product pick",
                },
                {
                    type: "product",
                    id: "second_product_pick",
                    label: "Second product pick",
                },
                {
                    type: "product",
                    id: "third_product_pick",
                    label: "Third product pick",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Athletes",
            category: "Section",
        },
    ],
};
