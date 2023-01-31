/**
 * Schema for sections/articles.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Articles",
    settings: [
        {
            label: "Heading",
            id: "heading",
            type: "text",
        },
        {
            content: "Articles",
            type: "header",
        },
        {
            type: "blog",
            id: "blog",
            label: "Blog",
        },
        {
            label: "Article CTA label",
            id: "article_cta_label",
            type: "text",
            default: "Read more",
        },
        {
            content: "Button",
            type: "header",
        },
        {
            label: "CTA label",
            id: "cta_label",
            type: "text",
            default: "Read more",
        },
        {
            label: "CTA url",
            id: "cta_url",
            type: "url",
        },
        ...spacingSettings,
    ],
    presets: [
        {
            name: "Articles",
            category: "Section",
        },
    ],
};
