const path = require("path");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const LiquidSchemaPlugin = require("liquid-schema-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        default_page: path.resolve(
            __dirname,
            "./src/scripts/theme.js"
        ),
        product_page: path.resolve(
            __dirname,
            "./src/scripts/templates/product-page/index.js"
        ),
        blog_page: path.resolve(
            __dirname,
            "./src/scripts/templates/blog-page/index.js"
        ),
        collection_page: path.resolve(
            __dirname,
            "./src/scripts/templates/collection-page/index.js"
        )

    },
    output: {
        path: path.resolve(__dirname, "dist/assets"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Extract and save the final CSS.
                    MiniCssExtractPlugin.loader,
                    // Load the CSS, set url = false to prevent following urls to fonts and images.
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            importLoaders: 1,
                            sourceMap: true,
                        },
                    },
                    // Add browser prefixes and minify CSS.
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins:
                                    process.env.NODE_ENV === "production"
                                        ? [autoprefixer(), cssnano()]
                                        : [],
                            },
                        },
                    },
                    // Load the SCSS/SASS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new ESLintPlugin(),
        new StyleLintPlugin({
            context: "src",
        }),
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    context: "src",
                    from: "assets/",
                    to: path.resolve(__dirname, "dist/assets"),
                },
                {
                    context: "src",
                    from: "layout/*.liquid",
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    context: "src/",
                    from: "config/*.json",
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    context: "src/",
                    from: "locales/*.json",
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    context: "src/",
                    from: "snippets/*.liquid",
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    context: "src/",
                    from: "templates/**/*.json",
                    to: path.resolve(__dirname, "dist"),
                },
                {
                    context: "src/",
                    from: "templates/**/*.liquid",
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
        new LiquidSchemaPlugin({
            from: {
                liquid: path.resolve(__dirname, "./src/sections"),
                schema: path.resolve(__dirname, "./src/schema"),
            },
            to: path.resolve(__dirname, "./dist/sections"),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
