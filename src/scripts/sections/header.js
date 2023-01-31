/**
 * Navbar Scripts
 */
import debounce from "../helpers/debounce";
import focusTrap from "../helpers/focus-trap";
import visibleElementAfterScroll from "../helpers/visible-element-after-scroll";
import toggleCSSclasses from "../helpers/toggle-css-classes";

export default class Header {
    constructor() {
        this.mainContent = document.querySelector(".js-main-content");
        this.header = document.querySelector(".js-main-header");
        this.mobileMenu = document.querySelector(".js-mobile-menu");
        this.mobileMenuToggle = document.querySelector(".js-mobile-menu-toggle");
        this.navbarWrapper = document.querySelector(".js-main-navbar");
        this.mainNavbarLinks = document.querySelectorAll(".js-main-navbar-link");
        this.mobileMenuParentItems = document.querySelectorAll(".js-mobile-menu-parent-item");
        this.topBanner = document.querySelector(".js-top-banner");
        this.mobileMenuOpenBodyClass = "mobile-menu-opened";
        this.focusableElementsSelector =
            "button, [href]:not(.js-hidden-element), input, select, textarea, [tabindex]:not([tabindex='-1'])";
    }

    /**
     * Open or close a mobile menu
     * @returns {void}
     */
    toggleMenu = () => {
        if (this.isMenuOpen()) {
            this.mobileMenu.classList.add("-translate-x-full");

            this.mobileMenu.addEventListener(
                "transitionend",
                () => {
                    this.mobileMenu.classList.add("hidden");
                },
                {
                    capture: false,
                    once: true,
                    passive: false,
                }
            );
            this.mobileMenuToggle.setAttribute(
                "aria-label",
                this.mobileMenuToggle.dataset.openLabel
            );
        } else {
            this.mobileMenu.classList.remove("hidden");
            setTimeout(() => {
                this.mobileMenu.classList.remove("-translate-x-full");
            }, 100);

            this.mobileMenuToggle.setAttribute(
                "aria-label",
                this.mobileMenuToggle.dataset.closeLabel
            );
        }

        toggleCSSclasses(document.body, "overflow-y-hidden", this.mobileMenuOpenBodyClass);
    };

    /**
     * Check if mobile menu is already opened
     * @returns {Boolean}
     */
    isMenuOpen = () => document.body.classList.contains(this.mobileMenuOpenBodyClass);

    /**
     * Change state for header
     * @returns {void}
     */
    headerVisibility = () => {
        if (!this.header) return;

        /** Add Class after scroll */
        const debounceVisibleELementAfterScroll = debounce(() => {
            visibleElementAfterScroll(
                this.header,
                this.header.offsetHeight,
                "main-header--is-window-scrolled"
            );
        }, 20);

        /**
         * Hide Header on Scroll Down & Show on Scroll Up
         */
        const toggleHeader = (currentScroll, direction, previousDirection) => {
            if (direction === 2 && currentScroll > this.header.offsetHeight) {
                this.header.classList.add("main-header--hide");
                return direction;
            }

            if (direction === 1) {
                this.header.classList.remove("main-header--hide");
                return direction;
            }

            return previousDirection;
        };

        let previousScroll = window.scrollY || document.documentElement.scrollTop;

        /**
         * Hide or show header after scroll
         */
        // eslint-disable-next-line no-unused-vars
        const hideHeaderDebounce = debounce(() => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            let direction = 0;
            let previousDirection = 0;

            /*
             ** Find the direction of scroll
             ** 0 - initial, 1 - up, 2 - down
             */
            if (currentScroll > previousScroll) {
                /**
                 * scrolled up
                 */
                direction = 2;
            } else if (currentScroll < previousScroll) {
                /**
                 * scrolled down
                 */
                direction = 1;
            }

            previousDirection = toggleHeader(currentScroll, direction, previousDirection);

            if (direction !== previousDirection) {
                toggleHeader(direction, currentScroll);
            }

            previousScroll = currentScroll;
        }, 15);

        /**
         * Show header after focus on logo
         */
        const navbarBrand = document.querySelector(".js-navbar-brand");

        if (navbarBrand && this.mobileMenuToggle) {
            navbarBrand.addEventListener("focus", () => {
                this.header.classList.remove("main-header--hide");
            });

            this.mobileMenuToggle.addEventListener("focus", () => {
                this.header.classList.remove("main-header--hide");
            });
        }

        /**
         * Init Functions
         */
        window.addEventListener("scroll", () => {
            debounceVisibleELementAfterScroll();
            // hideHeaderDebounce();
        });

        this.navbarWrapper.addEventListener("focusin", () => {
            if (this.header.classList.contains("main-header--hide")) {
                this.header.classList.remove("main-header--hide");
            }
        });

        this.navbarWrapper.addEventListener("focusout", () => {
            this.mainNavbarLinks.forEach((item) => {
                item.addEventListener("focus", () => {
                    item.parentElement.classList.remove("is-active");
                });
            });
        });
    };

    /**
     * Handle mobile menu toggle click event
     * @returns {void}
     */
    handleMobileMenuToggleClick = () => {
        if (!this.mobileMenu || !this.mobileMenuToggle) return;

        this.mobileMenuToggle.addEventListener("click", (e) => {
            this.mobileMenuToggle.setAttribute(
                "aria-expanded",
                this.mobileMenuToggle.getAttribute("aria-expanded") === "true" ? "false" : "true"
            );

            this.mobileMenuToggle.setAttribute(
                "aria-label",
                this.mobileMenuToggle.getAttribute("aria-expanded") === "true"
                    ? this.mobileMenuToggle.dataset.closeLabel
                    : this.mobileMenuToggle.dataset.openLabel
            );

            this.toggleMenu();

            if (this.isMenuOpen()) {
                setTimeout(() => {
                    this.focusFirstFocusableMenuItem(e);
                }, 250);
            }
        });
    };

    /**
     * Move focus on a first focusable element inside a mobile menu
     * @param {Event} event
     * @returns {void}
     */
    focusFirstFocusableMenuItem = (event) => {
        if (!this.mobileMenu) return;

        const focusableMenuElements = Array.from(
            this.mobileMenu.querySelectorAll(this.focusableElementsSelector)
        );

        // Check if event was triggered by a keyboard
        if (event.offsetX === 0 || event.offsetY === 0) {
            focusableMenuElements[0].focus();
        }
    };

    /**
     * Expand nested menus
     * @returns {void}
     */
    toggleMobileMenuItems = () => {
        if (!this.mobileMenuParentItems) return;

        this.mobileMenuParentItems.forEach((item) => {
            const button = item.querySelector(".js-mobile-menu-item-button");
            const childList = item.querySelector(".js-mobile-menu-child-list");
            const plusIcon = item.querySelector(".js-icon-plus");
            const minusIcon = item.querySelector(".js-icon-minus");

            if (childList) {
                const focusableChildListElements = childList.querySelectorAll(
                    this.focusableElementsSelector
                );

                button.addEventListener("click", () => {
                    button.classList.toggle("is-open");
                    plusIcon.classList.toggle("hidden");
                    minusIcon.classList.toggle("hidden");
                    button.setAttribute(
                        "aria-expanded",
                        button.getAttribute("aria-expanded") === "true" ? "false" : "true"
                    );
                    toggleCSSclasses(
                        childList,
                        "max-h-0",
                        "max-h-screen",
                        "invisible",
                        "opacity-0"
                    );

                    [...focusableChildListElements].forEach((element) => {
                        element.classList.toggle("js-hidden-element");
                    });
                });
            }
        });
    };

    /**
     * Toggle mega menu visibility on focus
     * @returns {void}
     */
    toggleMegaMenuOnFocus = () => {
        if (!this.mainNavbarLinks) return;

        const classRemover = () => {
            this.mainNavbarLinks.forEach((item) => {
                if (item.parentElement.classList.contains("is-active")) {
                    item.parentElement.classList.remove("is-active");
                }
            });
        };

        this.mainNavbarLinks.forEach((item) => {
            item.addEventListener("focus", () => {
                classRemover();
                item.parentElement.classList.add("is-active");
            });
        });
    };

    /**
     * Close mobile menu on outside click and escape keypress
     * @returns {void}
     */
    handleMenuClosingEvents = () => {
        // Prevent from scrolling the page with spacebar when the target is not a body element
        window.addEventListener("keydown", (e) => {
            if (e.code === "Space" && e.target !== document.body) {
                e.preventDefault();
            }

            if (e.code === "Escape" && e.target !== document.body && this.isMenuOpen()) {
                e.preventDefault();
                this.mobileMenuToggle.focus();
                this.toggleMenu();
            }
        });

        // Close menu on outside click
        window.addEventListener("click", (e) => {
            /**
             * Don't fire this function if clicked on the menu toggle
             */
            if (this.mobileMenuToggle === e.target) {
                return;
            }

            /**
             * Close mobile menu only if:
             * menu is opened
             * clicked element is not the menu panel or any of it's children
             */
            if (
                this.isMenuOpen() &&
                this.mobileMenu !== e.target &&
                !this.mobileMenu.contains(e.target)
            ) {
                this.toggleMenu();
            }
        });
    };

    /**
     * Trap focus inside a mobile menu
     * @returns {void}
     */
    trapFocusInsideMenu = () => {
        if (!this.mobileMenu) return;

        /**
         * Get an array of focusable elements of the mobile menu element only.
         */
        const focusableElements = this.mobileMenu.querySelectorAll(this.focusableElementsSelector);

        if (focusableElements) {
            focusTrap(this.mobileMenu, [...focusableElements]);
        } else {
            throw new Error("No focusable elements found inside a mobile menu.");
        }
    };

    /**
     * Handle top banner click
     * @returns {void}
     */
    handleTopBannerClick = () => {
        // if local storage hide top banner === false -> show
        const topBannerButton = this.topBanner.querySelector(".js-top-banner-button");

        if (!this.topBanner || !topBannerButton) return;

        topBannerButton.addEventListener("click", () => {
            this.topBanner.classList.add("max-h-0");
            this.mainContent.classList.remove("main-content--additional-margin");
        });
    };

    /**
     * Initialize class methods
     * @returns {void}
     */
    init() {
        if (!this.navbarWrapper) return;

        this.headerVisibility();
        this.handleMobileMenuToggleClick();
        this.toggleMegaMenuOnFocus();
        this.toggleMobileMenuItems();
        this.handleMenuClosingEvents();
        this.trapFocusInsideMenu();
        this.handleTopBannerClick();
    }
}

/**
 * Initialize navbar scripts
 */
document.addEventListener("DOMContentLoaded", () => {
    const header = new Header();
    header.init();
});
