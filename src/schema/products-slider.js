/**
 * Schema for sections/text-in-columns.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Products slider",
    settings: [
        {
            label: "Heading",
            id: "heading",
            type: "text",
        },
        {
            content: "Products",
            type: "header",
        },
        {
            type: "collection",
            id: "collection",
            label: "Collection",
        },
        {
            content: "Button",
            type: "header",
        },
        {
            label: "CTA label",
            id: "cta_label",
            type: "text",
            default: "View all",
        },
        ...spacingSettings,
    ],
    presets: [
        {
            name: "Products slider",
            category: "Section",
        },
    ],
};
