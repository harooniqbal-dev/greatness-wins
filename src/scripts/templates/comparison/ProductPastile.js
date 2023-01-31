import { h } from "preact";
import axios from "axios";
import { useEffect, useState, useMemo } from "preact/hooks";
import clsx from "clsx";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import locales from "../../../locales/en.default.json";
import ComparisonItemLoader from "./Primitives/ComparisonItemLoader";
import ProductPicker from "./ProductPicker";
import Image from "./Primitives/Image";
import MetafieldsParser from "./MetafieldsParser";

const ProductPastile = ({ productsList, collectionIndex }) => {
    const [productItem, setProductItem] = useState(null);
    const [prodTitle, setProdTitle] = useState("change product");
    const [variants, setVariants] = useState([0]);
    const [metafields, setMetafields] = useState([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [collectionId, setCollectionId] = useState("");
    const { comparison } = locales;
    const { shop_now: shopNow, price } = comparison;

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setLoading(true);
            setVariants([]);
            try {
                const { data: variantsObj } = await axios.get(
                    `/admin/api/2021-10/products/${collectionId}/variants.json`
                );

                const { data: meta } = await axios.get(
                    `/admin/products/${collectionId}/metafields.json`
                );

                setMetafields(meta.metafields);

                const filtered = variantsObj.variants.filter(
                    (v, i, a) => a.findIndex((v2) => v2.price === v.price) === i
                );
                filtered.map((variant) =>
                    setVariants((prevVariants) => [...prevVariants, parseFloat(variant.price)])
                );
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }

            setLoading(false);
        };

        if (productsList.length) {
            fetchData(collectionId);
        }
    }, [productItem]);

    const handleChange = (index) => {
        setProductItem(productsList[collectionIndex][index]);
        setProdTitle(productsList[collectionIndex][index].title);
        setShow(false);
        setCollectionId(productsList[collectionIndex][index].id);
    };

    const showList = () => {
        setShow(!show);
    };

    useEffect(() => {
        setLoading(true);
        if (productsList.length) {
            setProductItem(productsList[collectionIndex][0]);
            setProdTitle(productsList[collectionIndex][0].title);
            handleChange(0);
        }
        setShow(false);
    }, [collectionIndex]);

    useMemo(() => {
        setLoading(true);
        if (productsList.length) {
            setProductItem(productsList[collectionIndex][0]);
            setProdTitle(productsList[collectionIndex][0].title);
            handleChange(0);
        }
        setShow(false);
    }, [productsList]);

    useEffect(() => {
        if (variants.length) {
            setMin(Math.min(...variants));
            setMax(Math.max(...variants));
        } else {
            setMin(0);
            setMax(0);
        }
    }, [variants]);

    return (
        <div className="w-[20.75rem] block relative before:even:absolute before:even:border-r before:even:border-l before:even:border-[#C4C4C4] before:even:border-dotted before:even:h-[96%] before:even:w-full before:even:right-0 before:even:top-16 before:even:z-0">
            <div
                className={clsx(
                    "z-10 flex items-center justify-center pointer-events-none transition-opacity absolute top-0 left-0 w-full h-full bg-mercury/50",
                    loading ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                <ComparisonItemLoader />
            </div>
            <div className="w-[20.75rem]">
                {productsList[collectionIndex] && (
                    <ProductPicker
                        show={show}
                        showList={showList}
                        prodTitle={prodTitle}
                        productsList={productsList}
                        collectionIndex={collectionIndex}
                        handleChange={handleChange}
                    />
                )}
                {productItem && (
                    <div className="min-h-[18rem] font-sans z-1 px-4 pb-6">
                        {productItem.image && (
                            <Image source={productItem.image.src} alt="product" />
                        )}
                        <h2 className="my-4 text-[1.75rem] leading-7 font-semibold">
                            {productItem.title}
                        </h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(productItem.body_html),
                            }}
                        />
                        <MetafieldsParser metafields={metafields} />
                        <div className="mt-4">
                            <h4 className="uppercase font-semibold">{price}</h4>
                            <p>
                                {min}-{max}
                            </p>
                        </div>
                        <a
                            className="flex items-center justify-center uppercase w-full py-3 my-3 rounded-full bg-black text-white font-bold"
                            href={`/products/${productItem.id}`}
                        >
                            {shopNow}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

ProductPastile.propTypes = {
    productsList: PropTypes.array.isRequired,
    collectionIndex: PropTypes.number.isRequired,
};

export default ProductPastile;
