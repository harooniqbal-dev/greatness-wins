/**
 * Schema for sections/navbar.liquid
 */

module.exports = {
    name: "Navbar",
    settings: [
        {
            content: "Layout",
            type: "header",
        },
        {
            content: "Content",
            type: "header",
        },
        {
            id: "menu_left",
            type: "link_list",
            label: "Left menu",
        },
        {
            id: "menu_right",
            type: "link_list",
            label: "Right menu",
        },
    ],
    presets: [
        {
            name: "Navbar",
            category: "Section",
        },
    ],
};
