/**
 * AvalynxCardSlider
 *
 * A simple grid card slider for web applications. Based on Bootstrap >=5.3 without any framework dependencies.
 *
 * @version 1.0.0
 * @license MIT
 * @author https://github.com/avalynx/avalynx-cardslider/graphs/contributors
 * @website https://github.com/avalynx/
 * @repository https://github.com/avalynx/avalynx-cardslider.git
 * @bugs https://github.com/avalynx/avalynx-cardslider/issues
 *
 * @param {string} trackId - The ID of the flex-nowrap row containing the cards (required).
 * @param {object} options - An object containing the following keys:
 * @param {string} options.scrollMode - Scroll mode. One of 'single', 'page' (default: 'single').
 * @param {string} options.prevBtnId - ID of the previous button (default: null).
 * @param {string} options.nextBtnId - ID of the next button (default: null).
 * @param {string} options.dotsId - ID of the container for pagination dots (default: null).
 *
 */

import * as bootstrap from 'bootstrap';

export class AvalynxCardSlider {
    constructor(trackId, options = {}) {
        this.trackId = trackId;

        if (options === null || typeof options !== 'object') {
            options = {};
        }

        this.options = {
            scrollMode: options.scrollMode || 'single',
            prevBtnId: options.prevBtnId || null,
            nextBtnId: options.nextBtnId || null,
            dotsId: options.dotsId || null,
            ...options
        };

        if (!['single', 'page'].includes(this.options.scrollMode)) {
            this.options.scrollMode = 'single';
        }

        this.init();
    }

    init() {
        this.track = document.getElementById(this.trackId);
        if (!this.track) return;

        this.items = Array.from(this.track.children);
        if (this.items.length === 0) return;

        this.originalItems = [...this.items];

        this.prevBtn = this.options.prevBtnId ? document.getElementById(this.options.prevBtnId) : null;
        this.nextBtn = this.options.nextBtnId ? document.getElementById(this.options.nextBtnId) : null;
        this.dotsContainer = this.options.dotsId ? document.getElementById(this.options.dotsId) : null;

        this.totalItems = this.items.length;
        this.currentIndex = 0;

        this.setupDOM();
        this.syncPagePlaceholders();
        this.bindEvents();

        this.generateDots();
        this.updateControls();
    }

    setupDOM() {
        if (!this.track.classList.contains('flex-nowrap')) {
            this.track.classList.add('flex-nowrap');
        }
        this.track.classList.add('avalynx-cardslider-track');

        let wrapper = this.track.parentElement;
        if (wrapper && !wrapper.classList.contains('avalynx-cardslider-wrapper')) {
            // Only add the wrapper class if it's not a common layout container like 'container' or 'container-fluid'
            const isLayoutContainer = Array.from(wrapper.classList).some(cls => cls.startsWith('container'));
            if (!isLayoutContainer) {
                wrapper.classList.add('avalynx-cardslider-wrapper');
            } else {
                // If it is a container, wrap the track in a new div with the wrapper class
                const newWrapper = document.createElement('div');
                newWrapper.className = 'avalynx-cardslider-wrapper';
                this.track.parentNode.insertBefore(newWrapper, this.track);
                newWrapper.appendChild(this.track);
            }
        }
    }

    bindEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.slide(-1));
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.slide(1));
        }

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.syncPagePlaceholders();
                this.ensureBounds();
                this.generateDots();
                this.applyTransform();
            }, 100);
        });
    }

    syncPagePlaceholders() {
        const placeholderClass = 'avalynx-cardslider-item-placeholder';

        this.track.querySelectorAll(`.${placeholderClass}`).forEach(node => node.remove());
        this.items = Array.from(this.track.children);

        if (this.options.scrollMode !== 'page') {
            this.totalItems = this.items.length;
            return;
        }

        const realItemCount = this.items.length;
        const visibleCount = this.visibleItemsCount;
        const placeholdersNeeded = (visibleCount - (realItemCount % visibleCount)) % visibleCount;

        for (let i = 0; i < placeholdersNeeded; i++) {
            const baseItem = this.originalItems[0];
            const placeholder = document.createElement(baseItem.tagName);
            placeholder.className = baseItem.className;
            placeholder.classList.add(placeholderClass);
            placeholder.setAttribute('aria-hidden', 'true');
            placeholder.setAttribute('role', 'presentation');
            this.track.appendChild(placeholder);
        }

        this.items = Array.from(this.track.children);
        this.totalItems = this.items.length;
    }

    get visibleItemsCount() {
        if (!this.items || this.items.length === 0) return 1;
        const itemWidth = this.items[0].getBoundingClientRect().width;
        if (itemWidth <= 0) return 1;
        const trackContainerWidth = this.track.parentElement.getBoundingClientRect().width;

        const ratio = trackContainerWidth / itemWidth;
        const nearestInteger = Math.round(ratio);

        // Handle Bootstrap subpixel rounding around breakpoints (e.g. 3.99 should become 4)
        if (Math.abs(ratio - nearestInteger) < 0.2) {
            return Math.max(1, nearestInteger);
        }

        return Math.max(1, Math.floor(ratio));
    }

    get maxIndex() {
        return Math.max(0, this.totalItems - this.visibleItemsCount);
    }

    ensureBounds() {
        if (this.currentIndex > this.maxIndex) this.currentIndex = this.maxIndex;
        if (this.currentIndex < 0) this.currentIndex = 0;
    }

    slide(direction) {
        if (this.options.scrollMode === 'page') {
            const step = this.visibleItemsCount;
            if (direction === 1) {
                // Next: Jump to the next multiple of step, or maxIndex
                let nextIndex = Math.ceil((this.currentIndex + 1) / step) * step;
                this.currentIndex = Math.min(this.maxIndex, nextIndex);
            } else {
                // Prev: Jump to the previous multiple of step, or 0
                let prevIndex = Math.floor((this.currentIndex - 1) / step) * step;
                this.currentIndex = Math.max(0, prevIndex);
            }
        } else {
            this.currentIndex += direction;
        }

        this.ensureBounds();
        this.applyTransform();
    }

    applyTransform() {
        if (!this.items || this.items.length === 0) return;
        const itemWidth = this.items[0].getBoundingClientRect().width;
        const translateX = -(this.currentIndex * itemWidth);

        this.track.style.transform = `translateX(${translateX}px)`;
        this.updateControls();
    }

    generateDots() {
        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = '';
        const visibleCount = this.visibleItemsCount;

        if (this.totalItems <= visibleCount) return;

        let dotCount;
        if (this.options.scrollMode === 'page') {
            dotCount = Math.ceil(this.totalItems / visibleCount);
        } else {
            dotCount = this.maxIndex + 1;
        }

        for (let i = 0; i < dotCount; i++) {
            const btn = document.createElement('button');
            btn.className = 'avalynx-cardslider-dot';
            btn.setAttribute('type', 'button');
            btn.setAttribute('aria-label', `Gehe zu Slide ${i + 1}`);

            btn.addEventListener('click', () => {
                if (this.options.scrollMode === 'page') {
                    this.currentIndex = Math.min(i * visibleCount, this.maxIndex);
                } else {
                    this.currentIndex = i;
                }
                this.ensureBounds();
                this.applyTransform();
            });

            this.dotsContainer.appendChild(btn);
        }
    }

    updateControls() {
        if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0;
        if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= this.maxIndex;

        if (!this.dotsContainer) return;
        const dots = this.dotsContainer.querySelectorAll('.avalynx-cardslider-dot');
        if (dots.length === 0) return;

        let activeIndex = 0;
        if (this.options.scrollMode === 'page') {
            const visibleCount = this.visibleItemsCount;
            activeIndex = Math.floor(this.currentIndex / visibleCount);
            if (this.currentIndex === this.maxIndex) {
                activeIndex = dots.length - 1;
            }
        } else {
            activeIndex = this.currentIndex;
        }

        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AvalynxCardSlider;
}
