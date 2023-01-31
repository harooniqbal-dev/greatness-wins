/**
 * Schema for sections/page-not-found.liquid
 */

module.exports = {
    name: "404 Page content",
    settings: [
        {
            content: "Image",
            type: "header",
        },
        {
            type: "image_picker",
            id: "image",
            label: "Background image",
        },
        {
            content: "Button",
            type: "header",
        },
        {
            type: "url",
            id: "button_url",
            label: "URL",
            default: "/",
        },
        {
            type: "text",
            id: "button_title",
            label: "Title",
            default: "Return to home",
        },
    ],
    presets: [
        {
            name: "Page not found",
            category: "Section",
        },
    ],
};
