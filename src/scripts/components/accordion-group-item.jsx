/**
 * Accordion Group Item template part scripts
 */
/* eslint-disable */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import uuid from "react-uuid";

// Component
const AccordionGroupItem = (props) => {
    const { headline, description } = props;

    const [isActive, setIsActive] = useState(false);
    const _uuid = uuid();
    const itemContentClassName = `transition-[height,padding-top] duration-200 ease-in-out overflow-hidden px-5 text-xs js-accordion-group-item js-accordion-group-item-${_uuid}`;

    useEffect(() => {
        const itemContent = document.querySelector(`.js-accordion-group-item-${_uuid}`);
        if (itemContent) {
            if (!isActive) {
                itemContent.dataset.targetHeight = itemContent.clientHeight + 20;
                itemContent.style.height = "0px";
                setTimeout(() => {
                    itemContent.style.paddingTop = "0px";
                    itemContent.style.display = "none";
                }, 200);
            } else {
                itemContent.style.display = "block";
                setTimeout(() => {
                    itemContent.style.paddingTop = "1.25rem";
                    itemContent.style.height = `${itemContent.dataset.targetHeight}px`;
                }, 50);
            }
        }
    }, [isActive]);

    const toggle = (e) => {
        setIsActive(!isActive);
    };

    return (
        <div className="border-t border-t-px border-t-solid border-t-black last:border-b last:border-b-px last:border-b-solid last:border-b-black transition-[padding-bottom] duration-200 ease-in-out pb-5">
            <button className={`pt-4 px-5 w-full flex flex-row justify-between`} onClick={toggle}>
                <span className="font-family-heading text-sm">{headline}</span>
                <span className="text-xl leading-[1.1]">{isActive ? "-" : "+"}</span>
            </button>
            <div className={itemContentClassName}>{description}</div>
        </div>
    );
};

export default AccordionGroupItem;
