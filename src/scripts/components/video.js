/**
 * Video section scripts
 */

/* eslint-disable no-lonely-if */

class Player {
    /**
     * Constructor
     *
     * @param {*} player
     */
    constructor(player) {
        this.player = player;
        this.video = this.player.querySelector(".js-video");

        const playerControls = this.player.querySelector(".js-player-controls");
        playerControls.setAttribute("data-state", "visible");

        this.showAndInitSubtitlesDropdown();
        this.initControlsDropdownMenuItems();
        this.initControlsPlay();
        this.initControlsPlayPause();
        this.initControlsMute();
        this.initControlsFullscreen();
        this.eventOnEndVideo();

        this.isFullScreen = false;
    }

    /**
     * Hide player controls dropdown menu
     */
    hidePlayerControlsDropdownMenu() {
        const playerControlsSubtitlesDropdownMenu = this.player.querySelector(
            ".js-player-controls-subtitles-dropdown-menu"
        );

        if (!playerControlsSubtitlesDropdownMenu) return;

        playerControlsSubtitlesDropdownMenu.classList.add("hidden");

        document.removeEventListener("click", this.clickHandler);
    }

    /**
     * Show player controls dropdown menu if subtitles exists
     */
    showAndInitSubtitlesDropdown() {
        const playerControlsSubtitlesDropdownMenu = this.player.querySelector(
            ".js-player-controls-subtitles-dropdown-menu"
        );

        if (playerControlsSubtitlesDropdownMenu.children.length) {
            const playerControlsSubtitlesDropdown = this.player.querySelector(
                ".js-player-controls-subtitles-dropdown"
            );
            const playerControlsSubtitlesDropdownButton = this.player.querySelector(
                ".js-player-controls-subtitles-dropdown-button"
            );

            playerControlsSubtitlesDropdown.classList.remove("hidden");

            playerControlsSubtitlesDropdownButton.addEventListener("click", () => {
                playerControlsSubtitlesDropdownMenu.classList.toggle("hidden");

                const clicked = () => {
                    this.hidePlayerControlsDropdownMenu();
                };
                this.clickHandler = clicked.bind(this);

                setTimeout(() => {
                    document.addEventListener("click", this.clickHandler);
                }, 100);
            });
        }
    }

    /**
     * Init player controls dropdown menu items
     */
    initControlsDropdownMenuItems() {
        for (let i = 0; i < this.video.textTracks.length; i += 1) {
            this.video.textTracks[i].mode = "hidden";
        }

        const playerControlsSubtitlesDropdownMenuItems = this.player.querySelectorAll(
            ".js-player-controls-subtitles-dropdown-menu-item"
        );
        if (playerControlsSubtitlesDropdownMenuItems.length) {
            [...playerControlsSubtitlesDropdownMenuItems].forEach((item) => {
                item.addEventListener("click", (e) => {
                    const { target } = e;

                    for (let i = 0; i < this.video.textTracks.length; i += 1) {
                        if (
                            this.video.textTracks[i].language === target.dataset.srclang &&
                            this.video.textTracks[i].kind === "subtitles"
                        ) {
                            this.video.textTracks[i].mode = "showing";
                        }
                    }
                });
            });
        }
    }

    /**
     * Init player controls play button
     */
    initControlsPlay() {
        const playerControlsPlay = this.player.querySelector(".js-player-controls-play");

        if (!playerControlsPlay) return;

        playerControlsPlay.addEventListener("click", () => {
            this.video.play();
            playerControlsPlay.classList.add("hidden");
            const playerControlsBottom = this.player.querySelector(".js-player-controls-bottom");

            if (playerControlsBottom) {
                playerControlsBottom.classList.remove("hidden");
            }

            const playerControlsPlayPause = this.player.querySelector(
                ".js-player-controls-playpause"
            );

            if (playerControlsPlayPause) {
                playerControlsPlayPause.setAttribute("data-state", "pause");
            }
        });
    }

    /**
     * Init player controls play/pause button
     */
    initControlsPlayPause() {
        const playerControlsPlayPause = this.player.querySelector(".js-player-controls-playpause");

        if (!playerControlsPlayPause) return;

        playerControlsPlayPause.addEventListener("click", () => {
            if (playerControlsPlayPause.getAttribute("data-state") === "play") {
                this.video.play();
                playerControlsPlayPause.setAttribute("data-state", "pause");
            } else {
                this.video.pause();
                playerControlsPlayPause.setAttribute("data-state", "play");
            }
        });
    }

    /**
     * Init player controls mute button
     */
    initControlsMute() {
        const playerControlsMute = this.player.querySelector(".js-player-controls-mute");

        if (!playerControlsMute) return;

        playerControlsMute.addEventListener("click", () => {
            if (playerControlsMute.getAttribute("data-state") === "mute") {
                this.video.muted = true;
                playerControlsMute.setAttribute("data-state", "unmute");
            } else {
                this.video.muted = false;
                playerControlsMute.setAttribute("data-state", "mute");
            }
        });
    }

    /**
     * Init player controls fullscreen button
     */
    initControlsFullscreen() {
        const playerControlsFullscreen = this.player.querySelector(
            ".js-player-controls-fullscreen"
        );

        if (!playerControlsFullscreen) return;

        playerControlsFullscreen.addEventListener("click", () => {
            if (!this.isFullScreen) {
                if (this.player.requestFullScreen) {
                    this.player.requestFullScreen();
                    this.isFullScreen = true;
                } else if (this.player.mozRequestFullScreen) {
                    this.player.mozRequestFullScreen();
                    this.isFullScreen = true;
                } else if (this.player.webkitRequestFullScreen) {
                    this.player.webkitRequestFullScreen();
                    this.isFullScreen = true;
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.isFullScreen = false;
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                    this.isFullScreen = false;
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                    this.isFullScreen = false;
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                    this.isFullScreen = false;
                }
            }
        });
    }

    /**
     * Event on end video
     */
    eventOnEndVideo() {
        this.video.addEventListener("ended", () => {
            const playerControlsPlayPause = this.player.querySelector(
                ".js-player-controls-playpause"
            );

            if (!playerControlsPlayPause) return;

            playerControlsPlayPause.setAttribute("data-state", "play");
        });
    }
}

/**
 * Init video section
 */
document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".js-player");

    if (players.length) {
        [...players].forEach((player) => {
            new Player(player);
        });
    }
});
