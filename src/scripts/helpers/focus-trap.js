/**
 * Trap a focus inside given element.
 *
 * @param {HTMLElement} element - The parent element which the focus should be trapped inside
 * @param {[HTMLElement]} focusableElements - An array of focusable elements
 */

const DEFAULT_FOCUSABLE = document.querySelectorAll(
    "a[href], button, input, textarea, select, details,[tabindex]:not([tabindex='-1'])"
);

export default (element, focusableElements = DEFAULT_FOCUSABLE) => {
    if (!element) throw new Error("Element to trap focus inside not found");
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const keyboardHandler = (e) => {
        // Using e.key because KeyboardEvent.keyCode is deprecated
        if (e.key === "Tab") {
            // Rotate focus between first and last focusable elements
            if (e.shiftKey && document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    };

    element.addEventListener("keydown", keyboardHandler);
};
