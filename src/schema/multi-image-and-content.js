/**
 * Schema for sections/multi-image-and-content.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Multi image and content",
    settings: [...spacingSettings],
    blocks: [
        {
            type: "list",
            name: "Section",
            settings: [
                {
                    label: "Image",
                    id: "image_block",
                    type: "image_picker",
                },
                {
                    label: "Lazy load",
                    id: "lazy_load",
                    type: "select",
                    options: [
                        {
                            value: "true",
                            label: "True",
                        },
                        {
                            value: "false",
                            label: "False",
                        },
                    ],
                    default: "true",
                },
                {
                    label: "Image position",
                    id: "image_position",
                    type: "select",
                    options: [
                        {
                            value: "left",
                            label: "Left",
                        },
                        {
                            value: "right",
                            label: "Right",
                        },
                    ],
                    default: "left",
                },
                {
                    content: "Header",
                    type: "header",
                },
                {
                    label: "Title",
                    id: "title",
                    type: "text",
                },
                {
                    label: "Paragraph",
                    id: "paragraph",
                    type: "richtext",
                },
                {
                    content: "Button",
                    type: "header",
                },
                {
                    label: "Link",
                    id: "link_url",
                    type: "url",
                },
                {
                    label: "Label",
                    id: "link_label",
                    type: "text",
                    default: "READ MORE",
                },
                {
                    content: "Products",
                    type: "header",
                },
                {
                    label: "Lead text",
                    id: "lead_text",
                    type: "text",
                },
                {
                    content: "Products",
                    type: "header",
                },
                {
                    label: "First product",
                    id: "first_product",
                    type: "product",
                },
                {
                    label: "Second product",
                    id: "second_product",
                    type: "product",
                },
                {
                    label: "Third product",
                    id: "third_product",
                    type: "product",
                },
                {
                    label: "Fourth product",
                    id: "fourth_product",
                    type: "product",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Multi image and content",
            category: "Section",
        },
    ],
};
