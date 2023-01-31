/*!
 * Get all direct descendant elements that match a selector
 * Dependency: the matches() polyfill: https://vanillajstoolkit.com/polyfills/matches/
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element to get direct descendants for
 * @param  {String} selector The selector to match against
 * @return {Array}           The matching direct descendants
 */
const childrenMatches = (elem, selector) =>
    Array.prototype.filter.call(elem.children, (child) => child.matches(selector));

const $accordions = document.querySelectorAll("[data-accordion='container']");

const Accordion = ($accordion) => {
    let isOpen = false;

    const $trigger = $accordion.querySelector("[data-accordion='trigger']");
    const $content = childrenMatches($accordion, "[data-accordion='content']")[0];

    const toggle = () => {
        isOpen = !isOpen;

        if (isOpen) {
            $content.style.maxHeight = `${$content.scrollHeight}px`;
            $trigger.classList.add("rotate-90");
        } else {
            $content.style.maxHeight = null;
            $trigger.classList.remove("rotate-90");
        }
    };

    $trigger.addEventListener("click", (event) => {
        event.preventDefault();
        toggle();
    });

    $content.addEventListener("transitionend", () => {
        if (isOpen) {
            $content.style.maxHeight = "none";
        }
    });

    if ($accordion.querySelector(".js-active")) {
        toggle();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $accordions.forEach(($element) => Accordion($element));
});
