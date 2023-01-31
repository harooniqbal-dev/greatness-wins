const themeKit = require("@shopify/themekit");

require("dotenv").config();

themeKit.command("deploy", {
    store: process.env.STORE,
    themeid: process.env.THEME_ID,
    password: process.env.PASSWORD,
});
