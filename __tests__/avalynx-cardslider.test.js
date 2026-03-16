/**
 * AvalynxCardSlider Jest Tests
 */

const AvalynxCardSlider = require('../src/js/avalynx-cardslider.js');

describe('AvalynxCardSlider', () => {
    let track, wrapper, dotsContainer, prevBtn, nextBtn;

    const mockRectWidth = (element, width) => {
        Object.defineProperty(element, 'getBoundingClientRect', {
            value: () => ({ width }),
            configurable: true
        });
    };

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="wrapper">
                <div id="track">
                    <div class="col" style="width: 100px;">Slide 1</div>
                    <div class="col" style="width: 100px;">Slide 2</div>
                    <div class="col" style="width: 100px;">Slide 3</div>
                </div>
            </div>
            <button id="prevBtn"></button>
            <button id="nextBtn"></button>
            <div id="dots"></div>
        `;

        track = document.getElementById('track');
        wrapper = document.getElementById('wrapper');
        dotsContainer = document.getElementById('dots');
        prevBtn = document.getElementById('prevBtn');
        nextBtn = document.getElementById('nextBtn');

        Array.from(track.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper, 100);
    });

    test('should initialize with default options', () => {
        const slider = new AvalynxCardSlider('track');
        expect(slider.options.scrollMode).toBe('single');
        expect(track.classList.contains('avalynx-cardslider-track')).toBe(true);
        expect(wrapper.classList.contains('avalynx-cardslider-wrapper')).toBe(true);
    });

    test('should respect scrollMode option', () => {
        const slider = new AvalynxCardSlider('track', { scrollMode: 'page' });
        expect(slider.options.scrollMode).toBe('page');
    });

    test('should disable prev button on start', () => {
        new AvalynxCardSlider('track', { prevBtnId: 'prevBtn' });
        expect(prevBtn.disabled).toBe(true);
    });

    test('should generate dots if dotsId is provided', () => {
        new AvalynxCardSlider('track', { dotsId: 'dots' });
        const dots = dotsContainer.querySelectorAll('.avalynx-cardslider-dot');
        expect(dots.length).toBeGreaterThan(0);
    });

    test('should slide when next button is clicked', () => {
        const slider = new AvalynxCardSlider('track', { nextBtnId: 'nextBtn' });
        nextBtn.click();
        expect(slider.currentIndex).toBe(1);
    });

    test('should not slide past bounds', () => {
        const slider = new AvalynxCardSlider('track', { nextBtnId: 'nextBtn' });
        slider.currentIndex = 2; // Last possible index with 3 items and 1 visible
        slider.slide(1);
        expect(slider.currentIndex).toBe(2);
    });

    test('should advance page mode in non-overlapping pages with subpixel rounding', () => {
        document.body.innerHTML = `
            <div id="wrapper2">
                <div id="track2">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                    <div class="col">Slide 5</div>
                    <div class="col">Slide 6</div>
                    <div class="col">Slide 7</div>
                    <div class="col">Slide 8</div>
                </div>
            </div>
            <button id="nextBtn2"></button>
        `;

        const track2 = document.getElementById('track2');
        const wrapper2 = document.getElementById('wrapper2');
        const nextBtn2 = document.getElementById('nextBtn2');

        Array.from(track2.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper2, 399);

        const slider = new AvalynxCardSlider('track2', {
            scrollMode: 'page',
            nextBtnId: 'nextBtn2'
        });

        expect(slider.visibleItemsCount).toBe(4);

        nextBtn2.click();
        expect(slider.currentIndex).toBe(4);
    });

    test('should create two dots and jump to second page in page mode', () => {
        document.body.innerHTML = `
            <div id="wrapper3">
                <div id="track3">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                    <div class="col">Slide 5</div>
                    <div class="col">Slide 6</div>
                    <div class="col">Slide 7</div>
                    <div class="col">Slide 8</div>
                </div>
            </div>
            <div id="dots3"></div>
        `;

        const track3 = document.getElementById('track3');
        const wrapper3 = document.getElementById('wrapper3');
        const dots3 = document.getElementById('dots3');

        Array.from(track3.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper3, 399);

        const slider = new AvalynxCardSlider('track3', {
            scrollMode: 'page',
            dotsId: 'dots3'
        });

        const dots = dots3.querySelectorAll('.avalynx-cardslider-dot');
        expect(dots.length).toBe(2);

        dots[1].click();
        expect(slider.currentIndex).toBe(4);
        expect(dots[1].classList.contains('active')).toBe(true);
    });

    test('should add one placeholder in page mode when last page is incomplete', () => {
        document.body.innerHTML = `
            <div id="wrapper4">
                <div id="track4">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                    <div class="col">Slide 5</div>
                    <div class="col">Slide 6</div>
                    <div class="col">Slide 7</div>
                </div>
            </div>
        `;

        const track4 = document.getElementById('track4');
        const wrapper4 = document.getElementById('wrapper4');

        Array.from(track4.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper4, 399);

        new AvalynxCardSlider('track4', { scrollMode: 'page' });

        const placeholders = track4.querySelectorAll('.avalynx-cardslider-item-placeholder');
        expect(placeholders.length).toBe(1);
    });

    test('should not add placeholders in single mode', () => {
        document.body.innerHTML = `
            <div id="wrapper5">
                <div id="track5">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                    <div class="col">Slide 5</div>
                    <div class="col">Slide 6</div>
                    <div class="col">Slide 7</div>
                </div>
            </div>
        `;

        const track5 = document.getElementById('track5');
        const wrapper5 = document.getElementById('wrapper5');

        Array.from(track5.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper5, 399);

        new AvalynxCardSlider('track5', { scrollMode: 'single' });

        const placeholders = track5.querySelectorAll('.avalynx-cardslider-item-placeholder');
        expect(placeholders.length).toBe(0);
    });
});
