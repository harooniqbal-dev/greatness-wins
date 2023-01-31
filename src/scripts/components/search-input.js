/**
 * Images slider section scripts
 */

document.addEventListener("DOMContentLoaded", () => {
    const searchInputWrapper = document.querySelector(".js-search-input-wrapper");
    const searchInputButton = document.querySelector(".js-search-input-button");
    if (!searchInputWrapper) return;

    const searchInput = searchInputWrapper.querySelector(".js-search-input");
    const searchInputSubmit = searchInputWrapper.querySelector(".js-search-input-submit");

    const isSearchBarOpen = () => !searchInputWrapper.classList.contains("hidden");

    const closeSearchBar = () => {
        ["lg:w-[15rem]", "xl:w-[19.125rem]"].map((e) => searchInput.classList.remove(e));
        setTimeout(() => {
            searchInputWrapper.classList.add("hidden");
            searchInputButton.focus();
        }, 10);
    };

    const openSearchBar = () => {
        searchInputWrapper.classList.remove("hidden");
        setTimeout(() => {
            ["lg:w-[15rem]", "xl:w-[19.125rem]"].map((e) => searchInput.classList.add(e));
            searchInput.focus();
        }, 10);
    };

    searchInputButton.addEventListener("click", () => {
        openSearchBar();
    });

    searchInputSubmit.addEventListener("keydown", (e) => {
        if (!e.shiftKey && e.key === "Tab") {
            closeSearchBar();
        }
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            closeSearchBar();
        }
    });

    window.addEventListener("keydown", (e) => {
        // Prevent from scrolling the page with spacebar when the target is not a body element
        if (e.code === "Space" && e.target !== document.body) {
            e.preventDefault();
        }

        if (e.code === "Escape" && e.target !== document.body && isSearchBarOpen()) {
            e.preventDefault();
            closeSearchBar();
        }
    });

    // Close serach input on outside click
    window.addEventListener("click", (e) => {
        if (searchInputButton === e.target) {
            return;
        }

        if (
            isSearchBarOpen() &&
            searchInputWrapper !== e.target &&
            !searchInputWrapper.contains(e.target)
        ) {
            closeSearchBar();
        }
    });
});
