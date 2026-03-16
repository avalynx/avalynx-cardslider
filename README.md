# AvalynxCardSlider

[![npm Version](https://img.shields.io/npm/v/avalynx-cardslider)](https://www.npmjs.com/package/avalynx-cardslider)
[![npm Downloads](https://img.shields.io/npm/dt/avalynx-cardslider)](https://www.npmjs.com/package/avalynx-cardslider)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/avalynx-cardslider)](https://www.jsdelivr.com/package/npm/avalynx-cardslider)
[![License](https://img.shields.io/npm/l/avalynx-cardslider)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/avalynx/avalynx-cardslider?style=flat&logo=github)](https://github.com/avalynx/avalynx-cardslider)

AvalynxCardSlider is a lightweight, native JavaScript slider designed specifically for
the Bootstrap grid system. It uses Bootstrap columns (version 5.3+) and slides smoothly
either card by card or page by page. No framework dependencies such as jQuery or Swiper.

## Features

- **Native Bootstrap grid**: Full compatibility with `col-12`, `col-md-6`, `col-lg-4`, etc.
  Responsive breakpoints work out of the box.
- **Scroll modes**: Choose between `single` (one card per click) or `page`
  (advance by full visible page width).
- **Page mode placeholders**: If the last page is incomplete, `page` mode automatically
  adds empty placeholders (e.g. `5 6 7 _`) to keep the grid layout clean and consistent.
- **Controls**: Supports Next/Prev buttons and auto-generated pagination dots.
- **Performance**: Vanilla ES6, no dependencies, minimal CSS. Responsive via debounced
  window resize listener.

## Examples

- Overview: https://avalynx-cardslider.jbs-newmedia.de/examples/index.html
- Simple cardslider (Single): https://avalynx-cardslider.jbs-newmedia.de/examples/simple-cardslider.html
- Page cardslider (Page): https://avalynx-cardslider.jbs-newmedia.de/examples/page-cardslider.html
- Alignment examples (Button/Dot): https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-examples.html
- Alignment examples (Button/Dot, Page): https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-page-examples.html
- Complex card example: https://avalynx-cardslider.jbs-newmedia.de/examples/complex-card.html

## Include directly in HTML

Make sure Bootstrap 5.3 (or newer) is included.

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- AvalynxCardSlider -->
<link href="path/to/avalynx-cardslider.css" rel="stylesheet">
<script src="path/to/avalynx-cardslider.js"></script>
```

## Include via jsDelivr (CDN)

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.0/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.0/dist/js/avalynx-cardslider.js"></script>
```

## Install via NPM (https://www.npmjs.com/package/avalynx-cardslider)

```bash
npm install avalynx-cardslider
```

Then import in JavaScript:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

## Install via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-cardslider
```

Then import in JavaScript:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

## Install via Symfony AssetComposer

More information: https://github.com/jbsnewmedia/asset-composer-bundle

```twig
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css') %}
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js') %}
```

## Install via Composer (PHP) (https://packagist.org/packages/avalynx/avalynx-cardslider)

```bash
composer require avalynx/avalynx-cardslider
```

Include in HTML:

```html
<link href="vendor/avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js"></script>
```

## Usage

HTML structure (standard Bootstrap grid with ID on `.row`):

```html
<div class="container">
  <!-- Wrapper is optional and is added automatically by JS if missing -->
  <div class="avalynx-cardslider-wrapper">
    <div class="row" id="myCardTrack">
      <!-- Use any Bootstrap breakpoints -->
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">Content 1</div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">Content 2</div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card">Content 3</div>
      </div>
    </div>
  </div>

  <!-- Optional controls outside wrapper for free positioning -->
  <div class="mt-3 text-center">
    <button id="btnPrev" class="btn btn-secondary">Back</button>
    <button id="btnNext" class="btn btn-primary">Next</button>
  </div>
  <div id="sliderDots" class="mt-3 text-center"></div>
</div>
```

JavaScript initialization:

```javascript
new AvalynxCardSlider('myCardTrack', {
  scrollMode: 'page',
  prevBtnId: 'btnPrev',
  nextBtnId: 'btnNext',
  dotsId: 'sliderDots'
});
```

## Options

- `trackId` (string, required): ID of the `.row` container that holds the card columns.
- `options` (object):
  - `scrollMode` (string): Controls scrolling behavior. `single` advances one column at a
    time, `page` advances by the number of currently visible columns (default: `single`).
  - `prevBtnId` (string): ID of the "Back" button (default: `null`).
  - `nextBtnId` (string): ID of the "Next" button (default: `null`).
  - `dotsId` (string): ID of the container where dynamic pagination dots are rendered
    (default: `null`).

## Contributing

Contributions are welcome! Please create a fork and submit a pull request. Keep code style
consistent and include sufficient documentation.

## License

AvalynxCardSlider is licensed under the [MIT License](LICENSE).

## Contact

Questions, feature requests, or issues? Please open an issue in the
[GitHub repository](https://github.com/avalynx/avalynx-cardslider/issues)
or submit a pull request.
