const triggerSelector = "data-modal-trigger";

document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(`[${triggerSelector}]`);

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            const targetName = e.currentTarget.getAttribute(triggerSelector);

            const modal = document.querySelector(`[data-modal="${targetName}"]`);

            modal.classList.toggle("modal--visible");

            if (
                !modal.classList.contains("modal--visible") &&
                typeof window.closeModalCb === "function"
            ) {
                window.closeModalCb();
            }
        });
    });
});
