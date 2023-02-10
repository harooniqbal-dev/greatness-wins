/* eslint-disable */
var entityMap = {
    "&": "",
    "<": "",
    ">": "",
    '"': "",
    "'": "",
    "/": "",
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

jQuery(document).ready(function () {
    var hide_banner = [
        "Basketball Graphic Tee",
        "Badge Graphic Tee",
        "Baselayer Short",
        "Baselayer Tee",
        "Baselayer Muscle Tank",
    ];

    ProductList.prototype.afterRender = function () {
        console.log("ProductList");

        // The product list data returned from API
        var data = this.data;
        // Your code here

        var seen = {};
        $("*[data-product-type]:not(.already-loaded)").each(function () {
            var type = $(this).attr("data-product-type");

            if (jQuery.inArray(type, hide_banner) === -1) {
                $(this).show();

                var promotitle = $(this).attr("data-promo-title");
                var promodesc = $(this).attr("data-promo-description");

                if (promotitle) {
                    $(this).find("h2").text(promotitle);
                }

                var txt = type;
                if (seen[txt]) {
                    $(this).remove();
                } else {
                    seen[txt] = true;
                }
            } else {
                $(this).remove();
            }
        });

        var item = $(".collection-item-wrapper > .collection-item-wrapper");
        item.unwrap();

        $(".collection__grid_wrap > *").each(function () {
            var title = escapeHtml($(this).attr("data-product-title"));
            $(this).attr("data-product-title", title);
        });

        $(".collection__grid_wrap > *").each(function () {
            var title = $(this).attr("data-product-title");

            if (jQuery.inArray(title, hide_banner) === -1) {
                if (!$(this).parent().hasClass("collection-item-wrapper")) {
                    $(".collection__grid_wrap > *[data-product-title='" + title + "']").wrapAll(
                        '<div class="collection-item-wrapper ' +
                            title.replaceAll(" ", "-").toLowerCase() +
                            ' grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products" />'
                    );
                }
            } else {
                $(".collection__grid_wrap > *[data-product-title='" + title + "']").appendTo(
                    ".collection-item-wrapper:last-of-type"
                );
            }
        });

        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

    Filter.prototype.afterRender = function () {
        console.log("Filter");

        // The product list data returned from API
        var data = this.data;
        // Your code here

        var seen = {};

        var item = $(".collection-item-wrapper > .collection-item-wrapper");
        item.unwrap();

        $("*[data-product-type]:not(.already-loaded)").each(function () {
            var type = $(this).attr("data-product-type");

            var txt = type;
            if (seen[txt]) $(this).remove();
            else seen[txt] = true;
        });

        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

    FilterResult.prototype.afterRender = function () {
        console.log("filter result");
        document.dispatchEvent(new Event("reloadQuickBuy"));
    }

    // Your code here

    var seen = {};
    $(".already-loaded").each(function () {
        var type = $(this).attr("data-product-type");

        if (jQuery.inArray(type, hide_banner) === -1) {
            $(this).show();

            var promotitle = $(this).attr("data-promo-title");
            var promodesc = $(this).attr("data-promo-description");

            if (promotitle) {
                $(this).find("h2").text(promotitle);
            }

            var txt = type;
            if (seen[txt]) $(this).remove();
            else seen[txt] = true;
        } else {
            $(this).remove();
        }
    });

    $(".collection__grid_wrap > *").each(function () {
        var title = escapeHtml($(this).attr("data-product-title"));
        $(this).attr("data-product-title", title);
    });

    $(".collection__grid_wrap > *").each(function () {
        var title = $(this).attr("data-product-title");

        if (jQuery.inArray(title, hide_banner) === -1) {
            if (!$(this).parent().hasClass("collection-item-wrapper")) {
                $(".collection__grid_wrap > *[data-product-title='" + title + "']").wrapAll(
                    '<div class="collection-item-wrapper ' +
                        title.replaceAll(" ", "-").toLowerCase() +
                        ' grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products" />'
                );
            }
        }
    });
});
