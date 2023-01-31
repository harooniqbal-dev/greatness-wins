/**
 * Schema for sections/footer.liquid
 */

module.exports = {
    name: "Footer",
    settings: [
        {
            id: "logo",
            type: "image_picker",
            label: "Logo",
        },
        {
            type: "range",
            id: "logo_width",
            min: 150,
            max: 315,
            step: 5,
            unit: "px",
            label: "Logo width",
            default: 315,
        },
    ],
    blocks: [
        {
            type: "menu",
            name: "Menu",
            settings: [
                {
                    label: "Menu",
                    id: "menu",
                    type: "link_list",
                },
            ],
        },
    ],
};
