/**
 * Schema fot sections/featured-post.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "featured-post",
    settings: [
        {
            type: "article",
            id: "article_pick",
            label: "Article pick",
        },
        ...spacingSettings,
    ],
    presets: [
        {
            name: "Featured-post",
            category: "Section",
        },
    ],
};
