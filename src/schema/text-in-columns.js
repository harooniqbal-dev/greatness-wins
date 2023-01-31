/**
 * Schema for sections/text-in-columns.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Text in columns",
    settings: [
        {
            type: "text",
            id: "title",
            label: "Title",
        },
        {
            type: "richtext",
            id: "left_column_lead",
            label: "Left column lead",
        },
        {
            type: "richtext",
            id: "left_column",
            label: "Left column",
        },
        {
            type: "richtext",
            id: "right_column",
            label: "Right column",
        },
        ...spacingSettings,
    ],
    presets: [
        {
            name: "Text in columns",
            category: "Section",
        },
    ],
};
