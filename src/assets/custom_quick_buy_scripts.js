/* eslint-disable */
jQuery(document).ready(function () {
    ProductList.prototype.afterRender = function () {
        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

    Filter.prototype.afterRender = function () {
        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

    FilterResult.prototype.afterRender = function () {
        document.dispatchEvent(new Event("reloadQuickBuy"));
    }
});
