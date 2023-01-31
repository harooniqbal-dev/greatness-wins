/**
 * Schema for sections/video.liquid
 */
const spacingSettings = require("./partials/spacing");

module.exports = {
    name: "Video",
    settings: [
        {
            type: "image_picker",
            id: "poster",
            label: "Poster",
        },
        {
            type: "url",
            id: "url",
            label: "Video URL",
        },
        ...spacingSettings,
    ],
    blocks: [
        {
            type: "subtitles",
            name: "Subtitles",
            settings: [
                {
                    type: "url",
                    id: "subtitles",
                    label: "Subtitles URL",
                },
                {
                    type: "text",
                    id: "label",
                    label: "Language label",
                },
                {
                    type: "text",
                    id: "lang",
                    label: "Language ISO code",
                },
                {
                    type: "checkbox",
                    id: "default",
                    label: "Default",
                    default: false,
                },
            ],
        },
    ],
    presets: [
        {
            name: "Video",
            category: "Section",
        },
    ],
};
