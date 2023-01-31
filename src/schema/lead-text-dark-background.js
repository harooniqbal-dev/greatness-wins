/**
 * Schema for sections/video.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Lead text",
    settings: [
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
        ...spacingSettings,
    ],
   
    presets: [
        {
            name: "Lead text",
            category: "Section",
        },
    ],
};
