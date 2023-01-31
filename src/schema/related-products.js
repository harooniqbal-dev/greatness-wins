/**
 * Schema for sections/related-products.liquid
 */

const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Related Products",
    settings: [
        ...spacingSettings,
        {
            type: "text",
            id: "heading",
            label: "Heading"
        },
        {
            type: "number",
            id: "max_products",
            label: "Max items in section",
            default: 4
        },
        {
            type: "select",
            id: "related_by",
            label: "Related by:",
            options: [
                {
                    value: "tags",
                    label: "Tags"
                },
                {
                    value: "vendor",
                    label: "Vendor"
                }
            ],
            default: "tags"
        }
    ]
}