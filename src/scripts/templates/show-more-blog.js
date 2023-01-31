const container = document.querySelector(".js-blog-archive-section");

if (container) {
    const button = container.querySelector(".js-blog-more-button");

    const showMore = () => {
        if (!button) return;

        const pastiles = container.querySelectorAll(".js-blog-archive-hidden-pastile");
        const limiter = pastiles.length < 6 ? pastiles.length : 6;

        for (let i = 0; i < limiter; i += 1) {
            pastiles[i].classList.remove("hidden");
            pastiles[i].classList.remove("js-blog-archive-hidden-section");

            if (i === 0) {
                pastiles[i].tabIndex = 0;
                pastiles[i].focus();
            }
        }

        if (pastiles.length <= 6) {
            button.classList.add("hidden");
        }
    };

    button.addEventListener("click", () => showMore());
}
