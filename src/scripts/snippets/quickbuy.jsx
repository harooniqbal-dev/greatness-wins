/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "preact/hooks";
import { h, render } from "preact";
import axios from "axios";
const ProductQuickAddToCart = (props) => {
    const {
        productAvailable,
        productproductid,
        boostFilterItem,
        productData1,
        productVariants,
        optionsWithValues,
        defaultVariantId,
        langQuickBuy,
        langProductUnavailable,
    } = props;
    var hasSizeOption = false;
    var defaultVariantOptions = [];
    var isAvailable = productAvailable;

    const cartDrawerElement = document.querySelector(".js-cart-drawer");
    optionsWithValues.forEach((element) => {
        if (element.name.toLowerCase() === "size") {
            hasSizeOption = true;
        }
    })
    if (defaultVariantId) {
        productVariants.forEach((element, key) => {
            if (parseInt(defaultVariantId, 10) === element.id) {
                optionsWithValues.forEach((optionItem, optionsKey) => {
                    if (optionItem.name.toLowerCase() !== "size") {
                        defaultVariantOptions.push({
                            option: optionsWithValues[optionsKey].name,
                            value: productVariants[key].options[optionsKey]
                        });
                    }
                })
            }
        })
    } else {
        productVariants.forEach((element, key) => {
            if (element.available && !defaultVariantOptions.length) {
                optionsWithValues.forEach((optionItem, optionsKey) => {
                    if (optionItem.name.toLowerCase() !== "size") {
                        defaultVariantOptions.push({
                            option: optionsWithValues[optionsKey].name,
                            value: productVariants[key].options[optionsKey]
                        });
                    }
                })
            }
        })
    }
    var handleHoverInOut = function handleHoverInOut(e) {
        var target = e.target,
            type = e.type;

        if (!target.matches(".product-quick-add-to-cart--with-size-option")) {
            return;
        }

        var button = target.querySelector(".js-product-quick-add-to-cart-button");
        var sizeSelector = target.querySelector(".js-product-quick-add-to-cart-size-selector");

        if (type === "mouseenter") {
            button.classList.add("opacity-0");
            setTimeout(function () {
                button.classList.remove("block");
                button.classList.add("hidden");
                sizeSelector.classList.remove("hidden");
                sizeSelector.classList.add("flex");
                sizeSelector.classList.remove("opacity-0");
            }, 150);
        } else if (type === "mouseleave") {
            sizeSelector.classList.add("opacity-0");
            setTimeout(function () {
                sizeSelector.classList.remove("flex");
                sizeSelector.classList.add("hidden");
                button.classList.remove("hidden");
                button.classList.add("block");
                button.classList.remove("opacity-0");
            }, 150);
        }
    };

    var getOptionWithValuesByName = function getOptionWithValuesByName(name) {
        return optionsWithValues.filter((option) => option.name.toLowerCase() === name);
    };

    var getProductVariantOptions = function getProductVariantOptions(size) {
        var options = [];
        optionsWithValues.forEach((item, key) => {
            if (optionsWithValues[key].name.toLowerCase() !== "size") {
                var foundDefaultVariantOption = defaultVariantOptions.find((defaultVariantOption) => {
                    return defaultVariantOption.option.toLowerCase() === optionsWithValues[key].name.toLowerCase();
                })
                options.push(foundDefaultVariantOption.value);
            } else {
                options.push(size);
            }
        })
        return options;
    };

    var getProductVariantByOptions = function getProductVariantByOptions(options) {
        var productVariant = null;
        productVariants.forEach((item, key) => {
            if (JSON.stringify(options) === JSON.stringify(item.options)) {
                productVariant = productVariants[key];
            }
        })

        return productVariant;
    };

    var isVariantBySizeAvailable = function isVariantBySizeAvailable(size) {
        var isAvailable = false;
        var productVariant = getProductVariantByOptions(getProductVariantOptions(size));
        if (productVariant) {
            isAvailable = productVariant.available;
        }
        return isAvailable;
    };


    var handleOnClick = function handleOnClick(e) {
        e.preventDefault();
        var target = e.target;
        var formData = {
            items: []
        };

        if (target.disabled) {
            return;
        }

        if (target.classList.contains("js-product-quick-add-to-cart-size-selector-button")) {
            // Size variant
            var productVariant = getProductVariantByOptions(getProductVariantOptions(target.dataset.value));

            if (productVariant) {
                formData.items.push({
                    id: productVariant.id,
                    quantity: 1
                });
            }
        } else if (target.classList.contains("js-product-quick-add-to-cart-button")) {
            // Default variant
            formData.items.push({
                id: productVariants[0].id,
                quantity: 1
            });
        }

        axios.post(`${window.Shopify.routes.root}cart/add.js`, JSON.stringify(formData), {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response) {
            if (response.status === 200) {
                document.dispatchEvent(new CustomEvent("refreshShoppingCart"));
                document.dispatchEvent(new CustomEvent("openShoppingCart"));
            }
        });
    };

    var sizeSelector = function sizeSelector() {
        if (hasSizeOption) {
            var _context;
            var optionWithValues = getOptionWithValuesByName("size");
            return (<div className="hidden opacity-0 transition-opacity flex-row flex-wrap justify-center content-center mx-[0.3125rem] w-full js-product-quick-add-to-cart-size-selector">
                {optionWithValues[0].values.map(value => {
                    var optionValue = boostFilterItem ? value.title : value;
                    var isAvailable = isVariantBySizeAvailable(optionValue);
                    return (
                        <div className="px-[0.3125rem] mt-[0.625rem]" style={{ marginLeft: '10px' }} key={optionValue}>
                            <button type="button" disabled={!isAvailable} onClick={handleOnClick} className={"block min-w-[2rem] h-11 lg:min-w-[2.75rem] lg:h-11 px-3 border border-black uppercase text-black bg-white text-center ".concat(isAvailable ? "hover:text-white hover:bg-black focus-visible:text-white focus-visible:bg-black" : "cursor-not-allowed line-through", " js-product-quick-add-to-cart-size-selector-button")} data-value={optionValue}>{optionValue}</button>
                        </div>
                    )
                })}
            </div>);
        }
    }

    var openNotify = function handleOnClick(e) {
        e.preventDefault();
    }

    if (!isAvailable || isAvailable === "false") {
        if (productproductid) {
            const parentDocument = document.getElementById('product_' + productproductid);
            parentDocument.classList.remove('opacity-0');
        }
        return (
            <div><a href="#" onClick={openNotify} data-product-data={productData1} className="font-family-heading text-xxs p-3 uppercase leading-loose border border-solid tracking-widest text-white border-black bg-black block w-full text-center BIS_trigger" >{langProductUnavailable}</a></div>
        )

    }

    return (<div className={"hidden md:block ".concat(hasSizeOption ? "product-quick-add-to-cart--with-size-option" : "")} onMouseEnter={handleHoverInOut}
        onMouseLeave={handleHoverInOut}>
        <button type="button" className="font-family-heading text-xxs py-3 px-5 uppercase leading-loose border border-solid tracking-widest focus-visible:outline-none transition-[color,background-color,opacity] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-2 text-white border-black bg-black hover:text-black hover:bg-white focus-visible:text-black focus-visible:bg-white block w-full js-product-quick-add-to-cart-button">{langQuickBuy}</button>
        {sizeSelector()}
    </div>);
};
window.addEventListener("DOMContentLoaded", () => {
    const jsProductQuickAddToCart = document.querySelectorAll(".js-product-quick-add-to-cart");
    Array.from(jsProductQuickAddToCart).forEach((productQuickAddToCartElement) => {
        // eslint-disable-next-line no-undef
        render(
            <ProductQuickAddToCart
                productData1={productQuickAddToCartElement.dataset.product}
                productproductid={productQuickAddToCartElement.dataset.productid}
                boostFilterItem={productQuickAddToCartElement.dataset.boostFilterItem}
                productAvailable={productQuickAddToCartElement.dataset.productIsAvailable}
                productVariants={JSON.parse(productQuickAddToCartElement.dataset.productVariants)}
                optionsWithValues={JSON.parse(
                    productQuickAddToCartElement.dataset.optionsWithValues
                )}
                defaultVariantId={productQuickAddToCartElement.dataset.defaultVariantId}
                langQuickBuy={productQuickAddToCartElement.dataset.langQuickBuy}
                langProductUnavailable={productQuickAddToCartElement.dataset.langProductUnavailable}
            />,
            productQuickAddToCartElement
        );
    });
});
