const inputs = document.querySelectorAll(".js-input-tel");

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach((input) => {
        input.addEventListener("keypress", (e) => {
            const key = String.fromCharCode(e.which);
            const allowed = "0123456789+-/";

            if (allowed.indexOf(key) === -1) {
                e.preventDefault();
            }
        });
    });
});
