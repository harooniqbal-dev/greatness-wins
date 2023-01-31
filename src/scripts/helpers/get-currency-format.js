/**
 * The function returns formatted price with a currency sign
 * @param {number} amount Price to be formatted
 * @param {string} locales String with langauge tag, default "en-US"
 * @param {string} style Formatting style
 * @param {string} currency Formatting style
 * @param {String[]} params Array of strings that replace the placeholders
 * @returns {string}
 */
export default (amount, locales = "en-US", style = "currency", currency = "USD") => {
    if (!amount) return undefined;

    return new Intl.NumberFormat(locales, {
        style,
        currency,
    })
        .format(amount)
        .replace(/\D00(?=\D*$)/, "");
};
