/**
 * Schema for sections/triple-boxes-full-width.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Triple boxes full width",
    settings: [
        {
            type: "text",
            id: "title",
            label: "Title",
        },
        ...spacingSettings,
    ],
};
