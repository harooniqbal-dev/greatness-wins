const containers = document.querySelectorAll(".js-athlete-section-container");

containers.forEach((container) => {
    const button = container.querySelector(".js-show-more-button");

    const showMore = () => {
        const pastiles = container.querySelectorAll(".js-athletes-hidden-pastile");
        const limiter = pastiles.length < 3 ? pastiles.length : 3;

        for (let i = 0; i < limiter; i += 1) {
            pastiles[i].classList.remove("hidden");
            pastiles[i].classList.remove("js-athletes-hidden-pastile");

            if (i === 0) {
                pastiles[i].tabIndex = 0;
                pastiles[i].focus();
            }
        }

        if (pastiles.length <= 3) {
            button.classList.add("hidden");
        }
    };

    button.addEventListener("click", showMore);
});
