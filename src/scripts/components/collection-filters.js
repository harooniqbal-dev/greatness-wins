document.addEventListener("DOMContentLoaded", () => {
    const filterTriggers = document.querySelectorAll(".js-mobile-filter-toggle");
    const filter = document.querySelector(".js-mobile-filter");

    const sortTriggers = document.querySelectorAll(".js-mobile-sort-toggle");
    const sort = document.querySelector(".js-mobile-sort");

    filterTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            if (
                filter.classList.contains("opacity-0") &&
                filter.classList.contains("pointer-events-none")
            ) {
                filter.classList.remove("opacity-0");
                filter.classList.remove("pointer-events-none");
                filter.classList.add("opacity-100");
                filter.classList.add("pointer-events-auto");
            } else {
                filter.classList.add("opacity-0");
                filter.classList.add("pointer-events-none");
                filter.classList.remove("opacity-100");
                filter.classList.remove("pointer-events-auto");
            }
        });
    });

    sortTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();

            if (
                sort.classList.contains("opacity-0") &&
                sort.classList.contains("pointer-events-none")
            ) {
                sort.classList.remove("opacity-0");
                sort.classList.remove("pointer-events-none");
                sort.classList.add("opacity-100");
                sort.classList.add("pointer-events-auto");
            } else {
                sort.classList.add("opacity-0");
                sort.classList.add("pointer-events-none");
                sort.classList.remove("opacity-100");
                sort.classList.remove("pointer-events-auto");
            }
        });
    });
});
