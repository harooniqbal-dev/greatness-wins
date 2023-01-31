/**
 * Full Width Image Boxes Block Scripts
 */

window.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll(".js-full-width-image-box"));

    if (sections.length !== 0) {
        sections.forEach((section) => {
            const inner = section.querySelector(".js-full-width-image-box-inner");
            if (!inner) return;

            const content = inner.firstElementChild;

            // If hieght of content is greater than a parent element it means that there is a overflowing content and we should adjust css classes
            if (content.clientHeight > inner.clientHeight) {
                inner.classList.add("overflow-y-auto");
                content.classList.add(
                    "lg:group-hover:top-0",
                    "lg:group-hover:translate-y-0",
                    "lg:group-hover:lg:pt-8",
                    "lg:group-focus-visible:top-0",
                    "lg:group-focus-visible:translate-y-0",
                    "lg:group-focus-visible:lg:pt-8"
                );
            }
        });
    }
});
