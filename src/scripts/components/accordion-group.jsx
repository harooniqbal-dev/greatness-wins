/**
 * Accordion Group template part scripts
 */
/* eslint-disable */
import { h, render } from "preact";
import uuid from "react-uuid";
import AccordionGroupItem from "./accordion-group-item";
// Component
const AccordionGroup = (props) => {
    let itemsFiltered = [];

    // Loop looks for props with 'headline[number]' or 'content[number]' schema
    Object.keys(props).forEach((prop) => {
        let test = prop.match(/(headline|description)([0-9])/);

        // If prop matches schema, push to itemsFiltered
        if (test !== null) {
            // Retrieve number from prop name
            let lastIndex = test[parseInt(test.length, 10) - 1];
            // Retrieve headline or content from prop name
            let preLastIndex = test[parseInt(test.length, 10) - 2];

            if (itemsFiltered[lastIndex] === undefined) {
                itemsFiltered[lastIndex] = {};
            }
            // Push to itemsFiltered
            itemsFiltered[lastIndex][preLastIndex] = props[prop];
        }
    });

    // Filter through items and get rid of empty items
    itemsFiltered = itemsFiltered.filter((item) => {
        if (item.headline !== "" && item.description !== "") {
            return item;
        }
    });

    // Build group items
    const items = itemsFiltered.map((item) => (
        <AccordionGroupItem headline={item.headline} description={item.description} key={uuid()} />
    ));

    return <div className="mt-3">{items}</div>;
};

// Initialize and pass variales to component if element exists
window.addEventListener("load", () => {
    const accordionGroupElement = document.getElementById("accordion-group");
    if (accordionGroupElement) {
        render(
            <AccordionGroup
                headline1={accordionGroupElement.dataset.headline1}
                description1={accordionGroupElement.dataset.description1}
                headline2={accordionGroupElement.dataset.headline2}
                description2={accordionGroupElement.dataset.description2}
                headline3={accordionGroupElement.dataset.headline3}
                description3={accordionGroupElement.dataset.description3}
                headline4={accordionGroupElement.dataset.headline4}
                description4={accordionGroupElement.dataset.description4}
                headline5={accordionGroupElement.dataset.headline5}
                description5={accordionGroupElement.dataset.description5}
                headline6={accordionGroupElement.dataset.headline6}
                description6={accordionGroupElement.dataset.description6}
            />,
            accordionGroupElement
        );
    }
});
