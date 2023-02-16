/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * Product Form template part scripts
 */
import axios from "axios";
import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import uuid from "react-uuid";
import slugify from "slugify";

// Component
const ProductForm = (props) => {
    var product = props.product,
        productType = props.productType,
        optionsWithValues = props.optionsWithValues,
        productFormId = props.productFormId,
        relatedItems = props.relatedItems,
        relatedItemsColors = props.relatedItemsColors,
        relatedItemsUrls = props.relatedItemsUrls,
        relatedItemsTitles = props.relatedItemsTitles,
        relatedItemsMultiColors = props.relatedItemsMultiColors,
        relatedColor = props.relatedColor,
        relatedMultiColor = props.relatedMultiColor,
        type = props.type,
        action = props.action,
        beforeAddToCartDescription = props.beforeAddToCartDescription,
        variantColors = props.variantColors,
        langAddToCart = props.langAddToCart,
        langColors = props.langColors,
        langProductUnavailable = props.langProductUnavailable,
        variantImages = props.variantImages;
    var cartDrawerElement = document.querySelector(".js-cart-drawer");
    var description = product.description;

    const [selectedOptionsHistory, setSelectedOptionsHistory] = useState([]);
    const [currentVariant, setCurrentVariant] = useState(null);
    let defaultcolor = '';
    if (optionsWithValues.length > 0) {
        optionsWithValues.forEach(element => {
            if (element.name.toLowerCase() == "color") {
                defaultcolor = element.values[0];
            }
        })
    }

    // In case variants are not set, set default variant
    useEffect(() => {
        if (product.variants.length === 1) {
            setCurrentVariant(product.variants[0]);
        }
        var initColorPosition = getColorPosition(optionsWithValues);
        var initColorValue = "";
        if (productType !== "Gift Cards") {
            initColorValue = relatedColor.trim().split("|")[1];
        }
        setSelectedOptionsHistory((prevSelectedOptionsHistory) => [
            ...prevSelectedOptionsHistory,
            {
                position: initColorPosition,
                value: initColorValue
            },
        ]);
    }, []);

    // Call assign variant based on selected options
    useEffect(() => {
        assignVariant();
    }, [selectedOptionsHistory]);

    // Assign variant based on selected options
    const assignVariant = () => {
        const selectedOptionsSorted = optionsWithValues.map((optionWithValues) =>
            getCurrentOptionValue(optionWithValues.position)
        );

        product.variants.forEach((variant) => {
            if (JSON.stringify(variant.options) === JSON.stringify(selectedOptionsSorted)) {
                setCurrentVariant(variant);
            }
        });
    };

    // Get position of color options
    const getColorPosition = (optionsWithValues) => {
        let position = null;

        optionsWithValues.forEach((option) => {
            if (option.name.toLowerCase() === "color") {
                position = option.position;
            }
        });

        return position;
    };

    // Options have only names of colors. We are not able to use it to display color box.
    // Instead of that we are looking for assigned as metafield color valuies from variants.
    const assignVariantColors = (colorPosition, _variantColors, productVariants) => {
        const filteredVariantColors = [];

        _variantColors.forEach((variantColor) => {
            if (variantColor.color) {
                productVariants.forEach((productVariant) => {
                    if (productVariant.id === parseInt(variantColor.variant_id, 10)) {
                        filteredVariantColors[productVariant[`option${colorPosition}`]] =
                            variantColor.color;
                    }
                });
            }
        });

        return filteredVariantColors;
    };

    // Color display string
    const getCurrentColorDisplay = (currentColor) => {
        if (currentColor) {
            return <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;{currentColor}</span>;
        }

        return "";
    };

    // On option value change add to selected options history
    const handleValueChange = (e) => {
        const checkedEl = document.querySelector(`input[name="${e.target.name}"]:checked`);
        const { value } = checkedEl;
        const position = parseInt(checkedEl.dataset.position, 10);
        const fproductVariant = product.variants.find((variant) => JSON.stringify([defaultcolor, value]) === JSON.stringify(variant.options));
        setCurrentVariant(fproductVariant);
        // product.variants.forEach(variant => {
        //     if (JSON.stringify([defaultcolor, value]) === JSON.stringify(variant.options)) {
        //         setCurrentVariant(variant);
        //     }
        // })
        setSelectedOptionsHistory((prevSelectedOptionsHistory) => [
            ...prevSelectedOptionsHistory,
            {
                position,
                value,
            },
        ]);


        if (e.target.name.toLowerCase() === "option_color") {
            const variantSubsetToUse = variantImages.find((variant) =>
                variant.options.includes(value)
            );
            if (!variantSubsetToUse) return;

            const variantImagesArr = variantSubsetToUse.images;
            replaceProductImages(variantImagesArr);
        }
    };

    const replaceProductImages = (newImages) => {
        if (!newImages) return;

        const imagesWrapper = document.querySelector(".js-product-images-set");
        const imageFigures = imagesWrapper.querySelectorAll(".js-product-image-figure");

        [...imageFigures].forEach((figure, index) => {
            figure.firstElementChild.src = newImages[index];
            figure.style.backgroundImage = `url(${newImages[index]})`;
        });
    };

    // Get current selected option value
    const getCurrentOptionValue = (position) => {
        const _selectedOptionsHistory = selectedOptionsHistory.slice();
        const option = _selectedOptionsHistory
            .reverse()
            .find((option) => option.position === parseInt(position, 10));
        if (option) {
            return option.value;
        }

        return null;
    };

    // Add to cart on click
    const handleAddToCart = (e) => {
        const { target } = e;

        if (target.disabled) {
            return;
        }

        const formData = {
            items: [
                {
                    id: currentVariant.id,
                    quantity: 1,
                },
            ],
        };

        axios
            .post(`${window.Shopify.routes.root}cart/add.js`, JSON.stringify(formData), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    document.dispatchEvent(new CustomEvent("refreshShoppingCart"));
                    document.dispatchEvent(new CustomEvent("openShoppingCart"));
                }
            });
    };

    // Price display
    const getPriceDisplay = () => {
        if (currentVariant === null) {
            return (product.price / 100).toFixed(2);
        }

        return (currentVariant.price / 100).toFixed(2);
    };

    const colorPosition = getColorPosition(optionsWithValues);
    let variantColorsProcessed = [];

    if (colorPosition !== null) {
        variantColorsProcessed = assignVariantColors(
            colorPosition,
            variantColors,
            product.variants
        );
    }

    const relatedItemsBoxes = () => {
        if (!relatedItems) return;
        var itemsIds = relatedItems.split(",");
        var itemsColors = relatedItemsColors.split(",");
        var itemsMultiColors = relatedItemsMultiColors.split("|");
        var itemsUrls = relatedItemsUrls.split(",");
        var itemsTitles = relatedItemsTitles.split(",");
        if (!itemsColors) return;
        var items = [];
        itemsIds.forEach(function (item, index) {
            const pushobject = {
                color: itemsColors[index] ? itemsColors[index].replace(/\s+$/, "") : "rgba(0,0,0, 0.5)",
                multiColor: itemsMultiColors[index] ? itemsMultiColors[index] : false,
                url: itemsUrls[index] ? itemsUrls[index] : "#",
                title: itemsTitles[index] ? itemsTitles[index] : product.title
            }
            items.push(pushobject);
        });

        return items;
    }

    // Options display in case of available variants
    const optionsDisplay = optionsWithValues.map((option, index) => {
        const wrapperClassName = parseInt(option.position, 10) === 1 ? "mt-1" : "mt-3";
        const optionNameSlug = `option_${slugify(option.name.toLowerCase(), "_")}`;
        let relatedItemsObj = relatedItemsBoxes();

        if (product.variants.length > 1) {
            if (option.name.toLowerCase() === "color") {
                // Color options
                if (relatedItemsObj && relatedItemsObj.length > 0) {
                    return (
                        <div className={wrapperClassName}>
                            <span className={"block text-xxs font-family-heading uppercase"}>
                                {langColors}
                                {getCurrentColorDisplay(getCurrentOptionValue(index + 1))}
                                <div className={"mt-2 flex flex-row flex-wrap -mx-[0.125rem]"}>
                                    {relatedItemsObj.map((itemObj) => {
                                        var styles = { marginRight: "4px" };
                                        if (itemObj.multiColor === undefined || itemObj.multiColor === false || itemObj.multiColor === "") {
                                            styles.backgroundColor = itemObj.color;
                                        } else {
                                            styles.backgroundImage = `linear-gradient(to top left, ${itemObj.multiColor.trim().split(",")[0]} 50%,${itemObj.multiColor.trim().split(",")[1]} 50%`;
                                            styles.border = "none";
                                        }
                                        return (
                                            <a
                                                key={uuid()}
                                                href={itemObj.url}
                                                className={"mt-1 mx-[0.125rem] w-1/6 sm:w-1/8 lg:w-1/6 block bg-mercury border border-solid border-transparent hover:border-pomegranate aspect-square"}
                                                style={styles} data-test-2={JSON.stringify(itemObj.multiColorz)}>
                                                <span className="sr-only">{itemObj.title}</span>
                                            </a>)
                                    })}
                                </div>
                            </span>
                        </div>
                    )
                }
                return (
                    <div className={wrapperClassName}>
                        <span className="block text-xxs font-family-heading uppercase">
                            {langColors}
                            {getCurrentColorDisplay(getCurrentOptionValue(index + 1))}
                        </span>
                        <div className="mt-2 flex flex-row flex-wrap -mx-[0.125rem]">
                            <a
                                href="#"
                                disabled={true}
                                data-colors-multi="false"
                                className="mt-1 mx-[0.125rem] w-1/6 sm:w-1/8 lg:w-1/6 block bg-mercury border border-solid border-transparent hover:border-pomegranate aspect-square"
                                style={relatedColor.trim().split("|")[0].trim()}>
                                <span className="sr-only">{product.title}</span>
                            </a>
                        </div>
                    </div>
                );
            }
            // Default options
            return (
                <div className={wrapperClassName}>
                    <div className="flex justify-between items-center">
                        <span className="text-xxs font-family-heading uppercase">
                            {option.name}
                        </span>
                        {option.name.toLowerCase() === "size" && (<button className="text-xxs font-family-heading uppercase underline transition-colors hover:text-orange" type="button" data-modal-toggle="largeModal">Size Chart</button>)}
                    </div>
                    <div className="mt-[0.4375rem] flex flex-row flex-wrap -mx-[0.125rem]">
                        {option.values.map((value) => {
                            const valueSlug = slugify(value, "_");
                            return (
                                <div className="mt-1 px-[0.125rem] w-full sm:w-1/2" key={uuid()}>
                                    <input
                                        type="radio"
                                        className="absolute h-0 w-0 opacity-0 invisible peer"
                                        name={optionNameSlug}
                                        id={`${optionNameSlug}_${valueSlug}`}
                                        value={value}
                                        data-position={option.position}
                                        onChange={handleValueChange}
                                        checked={getCurrentOptionValue(index + 1) === value}
                                    />
                                    <label
                                        htmlFor={`${optionNameSlug}_${valueSlug}`}
                                        className="block bg-mercury text-center px-1 py-2 text-xxs leading-5 font-family-heading cursor-pointer border border-solid border-transparent peer-checked:border-black hover:border-pomegranate"
                                    >
                                        {value}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        return "";
    });

    return (
        <div className="mt-3">
            <span className="block text-sm">${getPriceDisplay()}</span>

            <div
                className="entry-content mt-3 text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mt-5">{optionsDisplay}</div>

            <p className="mt-6 uppercase text-xxs leading-5">{beforeAddToCartDescription}</p>

            <p
                id="BIS_trigger"
                className={
                    currentVariant !== null && !currentVariant.available
                        ? "mt-6 text-sm leading-5 text-pomegranate"
                        : "hidden"
                }
            >
                {langProductUnavailable}
                <br/>
                Click here to notify me when available
            </p>

            <button
                type="button"
                className={`text-center font-family-heading text-xxs py-5 px-5 uppercase leading-none rounded-3xl border border-solid tracking-widest focus-visible:outline-none transition-colors focus:outline focus:outline-2 focus:outline-orange focus:outline-offset-2 text-white border-black bg-black hover:text-black hover:bg-transparent focus:text-black focus:bg-transparent block w-full mt-5${currentVariant === null || !currentVariant.available ? " opacity-50" : ""
                    }`}
                disabled={currentVariant === null || !currentVariant.available}
                onClick={handleAddToCart}
            >
                {langAddToCart}
            </button>
        </div>
    );
};

// Initialize and pass variales to component if element exists
const productFormElement = document.getElementById("product-form");
if (productFormElement) {
    // Assign variant colors from metafields
    const variantColors = [];
    // let variantImges = [];

    Object.keys(productFormElement.dataset).forEach((index) => {
        const variantColorTest = index.match(/(variantColor-)([0-9]+)/);

        if (variantColorTest) {
            variantColors.push({
                variant_id: variantColorTest[variantColorTest.length - 1],
                color: productFormElement.dataset[index],
            });
        }
    });

    const variantImages = JSON.parse(`${productFormElement.dataset.variantImages.slice(0, -2)}]`);
    const filteredVariantImages = variantImages.filter((el) => el.images.length !== 0);

    // Render component
    render(
        <ProductForm
            variantImages={filteredVariantImages}
            product={JSON.parse(productFormElement.dataset.product)}
            productType={productFormElement.dataset.productType}
            relatedItems={productFormElement.dataset.relatedItems}
            relatedItemsColors={productFormElement.dataset.relatedItemsColors}
            relatedItemsUrls={productFormElement.dataset.relatedItemsUrls}
            relatedItemsTitles={productFormElement.dataset.relatedItemsTitles}
            relatedItemsMultiColors={productFormElement.dataset.relatedItemsMultiColors}
            relatedColor={productFormElement.dataset.relatedColor}
            relatedMultiColor={productFormElement.dataset.relatedMultiColor}
            optionsWithValues={JSON.parse(productFormElement.dataset.optionsWithValues)}
            productFormId={productFormElement.dataset.productFormId}
            type={productFormElement.dataset.type}
            action={productFormElement.dataset.action}
            beforeAddToCartDescription={productFormElement.dataset.beforeAddToCartDescription}
            variantColors={variantColors}
            langAddToCart={productFormElement.dataset.langAddToCart}
            langColors={productFormElement.dataset.langColors}
            langProductUnavailable={productFormElement.dataset.langProductUnavailable}
        />,
        productFormElement
    );
}
