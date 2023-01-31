/**
 * Toggle multiple classes on a given element
 * @param {DOMElement} element - An element to toggle classes on
 * @param {String} classes - A list of classes to be toggled
 * @return void
 */

export default (element, ...classes) => classes.map((cl) => element.classList.toggle(cl));
