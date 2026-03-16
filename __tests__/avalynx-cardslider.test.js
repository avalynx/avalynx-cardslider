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

    test('should fallback to default options when null options are passed', () => {
        const slider = new AvalynxCardSlider('track', null);
        expect(slider.options.scrollMode).toBe('single');
    });

    test('should fallback to single mode for invalid scrollMode', () => {
        const slider = new AvalynxCardSlider('track', { scrollMode: 'invalid-mode' });
        expect(slider.options.scrollMode).toBe('single');
    });

    test('should wrap track in a new cardslider wrapper when parent is a container', () => {
        document.body.innerHTML = `
            <div class="container" id="containerWrap">
                <div id="trackWrap">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                </div>
            </div>
        `;

        const trackWrap = document.getElementById('trackWrap');
        const containerWrap = document.getElementById('containerWrap');
        Array.from(trackWrap.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(containerWrap, 200);

        new AvalynxCardSlider('trackWrap');

        expect(trackWrap.parentElement.classList.contains('avalynx-cardslider-wrapper')).toBe(true);
    });

    test('should use floor path for visible items count when ratio is not near integer', () => {
        document.body.innerHTML = `
            <div id="wrapper6">
                <div id="track6b">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                </div>
            </div>
        `;

        const track6b = document.getElementById('track6b');
        const wrapper6 = document.getElementById('wrapper6');
        Array.from(track6b.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper6, 350);

        const slider = new AvalynxCardSlider('track6b');
        expect(slider.visibleItemsCount).toBe(3);
    });

    test('should go to previous page boundary in page mode', () => {
        document.body.innerHTML = `
            <div id="wrapper7">
                <div id="track7">
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
        `;

        const track7 = document.getElementById('track7');
        const wrapper7 = document.getElementById('wrapper7');
        Array.from(track7.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper7, 399);

        const slider = new AvalynxCardSlider('track7', { scrollMode: 'page' });
        slider.currentIndex = 4;
        slider.slide(-1);

        expect(slider.currentIndex).toBe(0);
    });

    test('should set index directly when clicking dot in single mode', () => {
        document.body.innerHTML = `
            <div id="wrapper8">
                <div id="track8">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                </div>
            </div>
            <div id="dots8"></div>
        `;

        const track8 = document.getElementById('track8');
        const wrapper8 = document.getElementById('wrapper8');
        const dots8 = document.getElementById('dots8');
        Array.from(track8.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper8, 100);

        const slider = new AvalynxCardSlider('track8', { scrollMode: 'single', dotsId: 'dots8' });
        const dots = dots8.querySelectorAll('.avalynx-cardslider-dot');
        dots[1].click();

        expect(slider.currentIndex).toBe(1);
    });

    test('should run resize handler logic', () => {
        jest.useFakeTimers();

        document.body.innerHTML = `
            <div id="wrapper9">
                <div id="track9">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                    <div class="col">Slide 3</div>
                    <div class="col">Slide 4</div>
                    <div class="col">Slide 5</div>
                    <div class="col">Slide 6</div>
                    <div class="col">Slide 7</div>
                </div>
            </div>
            <button id="prev9"></button>
            <button id="next9"></button>
            <div id="dots9"></div>
        `;

        const track9 = document.getElementById('track9');
        const wrapper9 = document.getElementById('wrapper9');
        Array.from(track9.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper9, 399);

        const slider = new AvalynxCardSlider('track9', {
            scrollMode: 'page',
            prevBtnId: 'prev9',
            nextBtnId: 'next9',
            dotsId: 'dots9'
        });

        slider.currentIndex = 999;
        window.dispatchEvent(new Event('resize'));
        jest.runAllTimers();

        expect(slider.currentIndex).toBeLessThanOrEqual(slider.maxIndex);
        jest.useRealTimers();
    });

    test('should safely return when track element does not exist', () => {
        const slider = new AvalynxCardSlider('missing-track-id');
        expect(slider.track).toBeUndefined();
    });

    test('should safely return when track has no items', () => {
        document.body.innerHTML = '<div id="emptyTrack"></div>';
        const slider = new AvalynxCardSlider('emptyTrack');
        expect(slider.items.length).toBe(0);
    });

    test('should keep existing wrapper class and flex-nowrap class handling stable', () => {
        document.body.innerHTML = `
            <div id="wrapperExisting" class="avalynx-cardslider-wrapper">
                <div id="trackExisting" class="flex-nowrap">
                    <div class="col">Slide 1</div>
                </div>
            </div>
        `;

        const trackExisting = document.getElementById('trackExisting');
        const wrapperExisting = document.getElementById('wrapperExisting');
        Array.from(trackExisting.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapperExisting, 100);

        new AvalynxCardSlider('trackExisting');
        expect(trackExisting.classList.contains('flex-nowrap')).toBe(true);
        expect(wrapperExisting.classList.contains('avalynx-cardslider-wrapper')).toBe(true);
    });

    test('should fallback to 1 visible item when card width is 0', () => {
        document.body.innerHTML = `
            <div id="wrapper10">
                <div id="track10">
                    <div class="col">Slide 1</div>
                </div>
            </div>
        `;

        const track10 = document.getElementById('track10');
        const wrapper10 = document.getElementById('wrapper10');
        mockRectWidth(track10.children[0], 0);
        mockRectWidth(wrapper10, 100);

        const slider = new AvalynxCardSlider('track10');
        expect(slider.visibleItemsCount).toBe(1);
    });

    test('should clamp currentIndex to zero when below bounds', () => {
        const slider = new AvalynxCardSlider('track');
        slider.currentIndex = -10;
        slider.ensureBounds();
        expect(slider.currentIndex).toBe(0);
    });

    test('should return early in applyTransform when no items exist', () => {
        const slider = new AvalynxCardSlider('track');
        slider.items = [];
        expect(() => slider.applyTransform()).not.toThrow();
    });

    test('should return early in generateDots when all items are visible', () => {
        document.body.innerHTML = `
            <div id="wrapper11">
                <div id="track11">
                    <div class="col">Slide 1</div>
                    <div class="col">Slide 2</div>
                </div>
            </div>
            <div id="dots11"></div>
        `;

        const track11 = document.getElementById('track11');
        const wrapper11 = document.getElementById('wrapper11');
        Array.from(track11.children).forEach(child => mockRectWidth(child, 100));
        mockRectWidth(wrapper11, 250);

        new AvalynxCardSlider('track11', { dotsId: 'dots11' });
        const dots = document.querySelectorAll('#dots11 .avalynx-cardslider-dot');
        expect(dots.length).toBe(0);
    });

    test('should return early in updateControls when dots container has no dots', () => {
        const slider = new AvalynxCardSlider('track');
        slider.dotsContainer = document.createElement('div');
        expect(() => slider.updateControls()).not.toThrow();
    });
});
