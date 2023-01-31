/**
 * Login section scripts
 */
document.addEventListener("DOMContentLoaded", () => {
    const login = document.querySelector(".js-login-section");
    const recover = document.querySelector(".js-recover-section");

    if (login && recover) {
        const params = new URLSearchParams(window.location.search);

        if (params.get("restore_password") !== null) {
            recover.classList.remove("hidden");
        } else {
            login.classList.remove("hidden");
        }
    }
});
