/**
 * Schema for section/hear-about-us.liquid
 */

module.exports = {
    name: "Hear about us",
    settings: [
        {
            type: "text",
            id: "title",
            label: "Title",
        },
    ],
    blocks: [
        {
            type: "answer",
            name: "Answer",
            limit: 6,
            settings: [
                {
                    type: "text",
                    id: "title",
                    label: "Title",
                },
            ],
        },
    ],
    presets: [
        {
            name: "Hear about us",
            category: "Section",
        },
    ],
};
