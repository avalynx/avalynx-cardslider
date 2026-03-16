/**
 * AvalynxCardSlider Jest Tests
 */

const AvalynxCardSlider = require('../src/js/avalynx-cardslider.js');

describe('AvalynxCardSlider', () => {
    let track, wrapper, dotsContainer, prevBtn, nextBtn;

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

        // Mock offsetWidth as JSDOM doesn't support layout
        Object.defineProperty(track, 'children', {
            value: Array.from(track.children).map(child => {
                Object.defineProperty(child, 'offsetWidth', { value: 100 });
                return child;
            })
        });
        Object.defineProperty(wrapper, 'offsetWidth', { value: 100 });
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
});
