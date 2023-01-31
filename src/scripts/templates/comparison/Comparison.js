/* eslint-disable */
import axios from "axios";
import { h } from "preact";
import uuid from "react-uuid";
import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";
import CollectionButton from "./Primitives/CollectionButton";
import ProductPastile from "./ProductPastile";
import Chevron from "./Primitives/Chevron";

const Comparison = () => {
    const [collection, setCollection] = useState([]);
    const [products, setProducts] = useState([]);
    const [collectionIndex, setCollectionIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [prodTitle, setProdTitle] = useState("change product");

    const collectionIds = [
        "391869169910",
        "391869104374",
        "391869006070",
        "391868940534",
        "391869235446",
    ];

    const showList = () => {
        setShow(!show);
    }

    const fetchData = async (collectionId) => {
        try {
            const { data: collectionData } = await axios.get(
                `/admin/api/2021-10/collections/${collectionId}.json`
            );
            const { data: productsData } = await axios.get(
                `/admin/api/2021-10/collections/${collectionId}/products.json`
            );
            const { collection: collectionObj } = collectionData;
            setCollection((prevCollection) => [...prevCollection, collectionObj]);
            setProducts((prevProducts) => [...prevProducts, productsData.products]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (index) => {
        setCollectionIndex(index);
        setProdTitle(collection[index].title);
        setShow(false);
    };

    useEffect(() => {
        collectionIds.map((collectionId) => fetchData(collectionId));
    }, []);

    useEffect(() => collection.length && setProdTitle(collection[0].title), [collection]);

    return (
        <div className="max-w-[65.125rem] mx-auto mb-12">
            <div className="hidden lg:block">
                <div className="comparison-section">
                    {collection &&
                        collection.map((collection, index) => {
                            const { title } = collection;
                            return (
                                <CollectionButton
                                    key={uuid()}
                                    title={title}
                                    index={index}
                                    collectionIndex={collectionIndex}
                                    setCollectionIndex={setCollectionIndex}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="block lg:hidden">
                <div className="flex w-full mx-auto py-4 uppercase text-base justify-center">
                    <div className="flex items-center justify-center relative pt-16">
                        <span
                            className={clsx(
                                "flex flex-col z-10 bg-white absolute top-2 transition-all duration-300 ease-linear border border-black w-[20rem] font-semibold",
                                show && "shadow-lg opacity-1"
                            )}
                        >
                            <button
                                onClick={showList}
                                className="uppercase w-full text-lg py-2 active:bg-orange active:text-white"
                                type="button"
                            >
                                <div className="flex flex-row justify-between items-center px-2 font-semibold">{prodTitle} <Chevron /></div>
                            </button>
                            {show && (
                                <div className="flex flex-col w-full items-center justify-center mt-2">
                                    {collection &&
                                        collection.map((collection, index) => {
                                            const { title } = collection;
                                            return (
                                                <button
                                                    key={uuid()}
                                                    type="button"
                                                    onClick={() => handleChange(index)}
                                                    className="uppercase text-lg text-left h-12 px-2 py-4 w-full flex items-center justify-start cursor-pointer hover:bg-orange hover:text-white active:bg-orange active:text-white"
                                                >{title}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <div className="overflow-scroll lg:overflow-hidden custom-scrollbar">
                <div className="w-auto flex flex-row items-start justify-start lg:justify-center">
                    <ProductPastile productsList={products} collectionIndex={collectionIndex} />
                    <ProductPastile productsList={products} collectionIndex={collectionIndex} />
                    <ProductPastile productsList={products} collectionIndex={collectionIndex} />
                </div>
            </div>
        </div>
    );
};

export default Comparison;
