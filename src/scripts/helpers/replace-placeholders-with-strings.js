/**
 * The function replaces all occurencies of the variable placeholder - {0}, {1}, {2} and so on - in the JSON declared string.
 * @param {string} source Source string
 * @param {String[]} params Array of strings that replace the placeholders
 * @returns {string}
 */
export default (source, params) => {
    if (!source || !params) throw new Error("No paramters found");

    params.forEach((n, i) => {
        source = source.replace(new RegExp(`\\{${i}\\}`, "g"), n);
    });

    return source;
};
