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

$.fn.combine = function (selector) {
    var parent = $(this[0]);
    this.each(function (i) {
        parent.append($(this).children(selector));
        if (i > 0) $(this).remove();
    });
};

jQuery(document).ready(function () {
    var hide_banner = [
        "Basketball Graphic Tee",
        "Badge Graphic Tee",
        "Logo Graphic Tee",
        "Baselayer Short",
        "Baselayer Tee",
        "Baselayer Muscle Tank",
    ];

    ProductList.prototype.afterRender = function () {
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
            }
        });

        $("[data-product-title]").each(function () {
            var title = $(this).attr("data-product-title");

            if (
                title == "Basketball Graphic Tee" ||
                title == "Badge Graphic Tee" ||
                title == "Logo Graphic Tee"
            ) {
                if ($(".logo-graphic-tee").length) {
                    $(this).appendTo(".logo-graphic-tee");
                } else {
                    $(this).wrap(
                        '<div class="collection-item-wrapper logo-graphic-tee grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                    );
                    $(
                        '<div class="product-type-promo" style="" data-product-title="Logo Graphic Tee" data-product-type="Logo Graphic Tee" data-promo-title="Graphic Tees" data-promo-description="Breathability of cotton with the moisture wicking and durability attributes of recycled polyester." data-id="7259728249023" data-page="1"> <h2>Graphic Tees</h2> <p>Breathability of cotton with the moisture wicking and durability attributes of recycled polyester.</p></div>'
                    ).prependTo(".logo-graphic-tee");
                }
            } else if (title == "Baselayer Tee" || title == "Baselayer Muscle Tank") {
                if ($(".baselayer-long-sleeve-tee").length) {
                    $(this).appendTo(".baselayer-long-sleeve-tee");
                } else {
                    $(this).wrap(
                        '<div class="collection-item-wrapper baselayer-long-sleeve-tee grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                    );
                    $(
                        '<div class="product-type-promo" style="" data-product-title="Baselayer Long Sleeve Tee" data-product-type="Baselayer Long Sleeve Tee" data-promo-title="Baselayer Tops" data-promo-description="Super lightweight fabric, helps you feel cool and dry at all times. " data-id="7187818152127" data-page="2"> <h2>Baselayer Tops</h2> <p>Super lightweight fabric, helps you feel cool and dry at all times. </p></div>'
                    ).prependTo(".logo-graphic-tee");
                }
            } else {
                if (title == "Baselayer Short") {
                    if ($(".baselayer-34-legging").length) {
                        $(this).appendTo(".baselayer-34-legging");
                    } else {
                        $(this).wrap(
                            '<div class="collection-item-wrapper baselayer-34-legging grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                        );
                        $(
                            '<div class="product-type-promo" style="" data-product-title="Baselayer 34 Legging" data-product-type="Baselayer 3/4 Legging" data-promo-title="Baselayer Bottoms" data-promo-description="Super lightweight fabric, helps you feel cool and dry at all times." data-id="7187818315967" data-page="1"> <h2>Baselayer Bottoms</h2> <p>Super lightweight fabric, helps you feel cool and dry at all times.</p></div>'
                        ).prependTo(".logo-graphic-tee");
                    }
                }
            }
        });

        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

    Filter.prototype.afterRender = function () {
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

        $(".performance-training-tank").combine("[data-product-title]");

        document.dispatchEvent(new Event("reloadQuickBuy"));
    };

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

    $("[data-product-title]").each(function () {
        var title = $(this).attr("data-product-title");

        if (
            title == "Basketball Graphic Tee" ||
            title == "Badge Graphic Tee" ||
            title == "Logo Graphic Tee"
        ) {
            if ($(".logo-graphic-tee").length) {
                $(this).appendTo(".logo-graphic-tee");
            } else {
                $(this).wrap(
                    '<div class="collection-item-wrapper logo-graphic-tee grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                );
                $(
                    '<div class="product-type-promo" style="" data-product-title="Logo Graphic Tee" data-product-type="Logo Graphic Tee" data-promo-title="Graphic Tees" data-promo-description="Breathability of cotton with the moisture wicking and durability attributes of recycled polyester." data-id="7259728249023" data-page="1"> <h2>Graphic Tees</h2> <p>Breathability of cotton with the moisture wicking and durability attributes of recycled polyester.</p></div>'
                ).prependTo(".logo-graphic-tee");
            }
        } else if (title == "Baselayer Tee" || title == "Baselayer Muscle Tank") {
            if ($(".baselayer-long-sleeve-tee").length) {
                $(this).appendTo(".baselayer-long-sleeve-tee");
            } else {
                $(this).wrap(
                    '<div class="collection-item-wrapper baselayer-long-sleeve-tee grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                );
                $(
                    '<div class="product-type-promo" style="" data-product-title="Baselayer Long Sleeve Tee" data-product-type="Baselayer Long Sleeve Tee" data-promo-title="Baselayer Tops" data-promo-description="Super lightweight fabric, helps you feel cool and dry at all times. " data-id="7187818152127" data-page="2"> <h2>Baselayer Tops</h2> <p>Super lightweight fabric, helps you feel cool and dry at all times. </p></div>'
                ).prependTo(".logo-graphic-tee");
            }
        } else {
            if (title == "Baselayer Short") {
                if ($(".baselayer-34-legging").length) {
                    $(this).appendTo(".baselayer-34-legging");
                } else {
                    $(this).wrap(
                        '<div class="collection-item-wrapper baselayer-34-legging grid gap-4 lg:gap-8 lg:pl-16 collection__grid boost-pfs-filter-products"></div>'
                    );
                    $(
                        '<div class="product-type-promo" style="" data-product-title="Baselayer 34 Legging" data-product-type="Baselayer 3/4 Legging" data-promo-title="Baselayer Bottoms" data-promo-description="Super lightweight fabric, helps you feel cool and dry at all times." data-id="7187818315967" data-page="1"> <h2>Baselayer Bottoms</h2> <p>Super lightweight fabric, helps you feel cool and dry at all times.</p></div>'
                    ).prependTo(".logo-graphic-tee");
                }
            }
        }
    });
});
