/**
 * Related articles snippet scripts
 */

import Swiper from "swiper";

// Class counts pages for swiper
class Pager {
    constructor(swiper) {
        this.swiper = swiper;
        this.maxNumPages = this.maxNumPages();
        this.pages = this.pagesWithIndexes();
        this.currentPage = this.currentPage();
    }

    maxNumPages() {
        return Math.ceil(this.swiper.slides.length / this.swiper.params.slidesPerView);
    }

    pagesWithIndexes() {
        const pages = [];

        let indexes = [];
        for (let i = 1; i <= this.swiper.slides.length; i += 1) {
            indexes.push(i - 1);

            if (i % this.swiper.params.slidesPerView === 0) {
                pages.push(indexes);
                indexes = [];
            }
        }

        if (indexes.length > 0) {
            for (let i = this.swiper.slides.length - (indexes.length + 1); i >= 0; i -= 1) {
                indexes.push(i);
                if (indexes.length === this.swiper.params.slidesPerView) {
                    pages.push(indexes);
                    break;
                }
            }
        }

        return pages;
    }

    currentPage() {
        for (let i = this.pages.length - 1; i >= 0; i -= 1) {
            if (this.pages[i].includes(this.swiper.activeIndex)) {
                return i + 1;
            }
        }

        return 1;
    }
}

// Build swiper pagination
const buildRelatedArticlesPagination = (pagerInstance) => {
    let html = "";

    if (pagerInstance.currentPage > 1) {
        html += `<button class="font-family-heading text-lg uppercase mr-1 transition-colors hover:text-orange focus-visible:text-orange js-related-articles-prev">${
            document.querySelector(".js-related-articles").dataset.prev
        }</button>`;
    }

    for (let i = 1; i <= pagerInstance.maxNumPages; i += 1) {
        let current = false;
        if (i === pagerInstance.currentPage) {
            current = true;
        }

        html += `<button class="font-family-heading text-lg uppercase transition-colors hover:text-orange focus-visible:text-orange${
            current ? " text-orange" : ""
        } js-related-articles-page" data-page="${i}">${i}</button>${
            i !== pagerInstance.maxNumPages ? ", " : ""
        }`;
    }

    if (pagerInstance.currentPage !== pagerInstance.maxNumPages) {
        html += `<button class="font-family-heading text-lg uppercase ml-1 transition-colors hover:text-orange focus-visible:text-orange js-related-articles-next">${
            document.querySelector(".js-related-articles").dataset.next
        }</button>`;
    }

    return html;
};

document.addEventListener("DOMContentLoaded", () => {
    const relatedArticlesSelector = ".js-related-articles";
    const relatedArticles = document.querySelector(relatedArticlesSelector);
    const slideSpeed = 150;

    if (relatedArticles) {
        const swiper = new Swiper(relatedArticlesSelector, {
            spaceBetween: 13,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                540: {
                    slidesPerView: 2,
                },
                960: {
                    slidesPerView: 3,
                },
            },
            on: {
                init() {
                    document.querySelector(".js-related-articles-pagination").innerHTML =
                        buildRelatedArticlesPagination(new Pager(this));
                },
                resize() {
                    document.querySelector(".js-related-articles-pagination").innerHTML =
                        buildRelatedArticlesPagination(new Pager(this));
                },
                slideChange() {
                    document.querySelector(".js-related-articles-pagination").innerHTML =
                        buildRelatedArticlesPagination(new Pager(this));
                },
            },
        });

        document.addEventListener("click", (e) => {
            if (e.target) {
                // Change page
                if (e.target.matches(".js-related-articles-page")) {
                    swiper.slideTo(
                        swiper.params.slidesPerView * (e.target.dataset.page - 1),
                        slideSpeed
                    );
                }

                // Prev page
                if (e.target.matches(".js-related-articles-prev")) {
                    swiper.slideTo(swiper.activeIndex - swiper.params.slidesPerView, slideSpeed);
                }

                // Next page
                if (e.target.matches(".js-related-articles-next")) {
                    swiper.slideTo(swiper.activeIndex + swiper.params.slidesPerView, slideSpeed);
                }
            }
        });
    }
});
