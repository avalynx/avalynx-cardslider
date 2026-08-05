# AvalynxCardSlider

[![npm version](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/version.svg)](https://www.npmjs.com/package/avalynx-cardslider)
[![npm downloads](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/download.svg)](https://www.npmjs.com/package/avalynx-cardslider)
[![Composer version](https://jbs-newmedia.de/badge/composer/avalynx/avalynx-cardslider/version.svg)](https://packagist.org/packages/avalynx/avalynx-cardslider)
[![Composer downloads](https://jbs-newmedia.de/badge/composer/avalynx/avalynx-cardslider/download.svg)](https://packagist.org/packages/avalynx/avalynx-cardslider)
[![jsDelivr](https://jbs-newmedia.de/badge/jsdelivr/avalynx-cardslider/hits.svg)](https://www.jsdelivr.com/package/npm/avalynx-cardslider)
[![License](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/license.svg)](LICENSE)
[![Tests](https://jbs-newmedia.de/badge/github/avalynx/avalynx-cardslider/tests.svg)](https://github.com/avalynx/avalynx-cardslider/actions/workflows/tests.yml)
[![codecov](https://jbs-newmedia.de/badge/codecov/avalynx/avalynx-cardslider/coverage.svg)](https://codecov.io/gh/avalynx/avalynx-cardslider)
[![GitHub stars](https://jbs-newmedia.de/badge/github/avalynx/avalynx-cardslider/stars.svg)](https://github.com/avalynx/avalynx-cardslider)

AvalynxCardSlider is a lightweight, native JavaScript slider designed specifically for the Bootstrap grid system. It uses Bootstrap columns (version 5.3+) and slides smoothly either card by card or page by page. No framework dependencies such as jQuery or Swiper.

## Features

- **Native Bootstrap grid**: Full compatibility with `col-12`, `col-md-6`, `col-lg-4`, etc. Responsive breakpoints work out of the box.
- **Scroll modes**: Choose between `single` (one card per click) or `page` (advance by full visible page width).
- **Page mode placeholders**: If the last page is incomplete, `page` mode automatically adds empty placeholders (e.g. `5 6 7 _`) to keep the grid layout clean and consistent.
- **Controls**: Supports Next/Prev buttons and auto-generated pagination dots.
- **Performance**: Vanilla ES6, no dependencies, minimal CSS. Responsive via debounced window resize listener.

## Examples

Here's a simple example of how to use AvalynxCardSlider in your project:

* [Overview](https://avalynx-cardslider.jbs-newmedia.de/examples/index.html)
* [Simple cardslider (Single)](https://avalynx-cardslider.jbs-newmedia.de/examples/simple-cardslider.html)
* [Page cardslider (Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/page-cardslider.html)
* [Alignment examples (Button/Dot)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-examples.html)
* [Alignment examples (Button/Dot, Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-page-examples.html)
* [Complex card example](https://avalynx-cardslider.jbs-newmedia.de/examples/complex-card.html)

## Installation

To use AvalynxCardSlider in your project, you can directly include it in your HTML file. Ensure you have Bootstrap 5.3 or higher included in your project for AvalynxCardSlider to work correctly.

First, include Bootstrap:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Then, include AvalynxCardSlider:

```html
<link href="path/to/avalynx-cardslider.css" rel="stylesheet">
<script src="path/to/avalynx-cardslider.js"></script>
```

Replace `path/to/avalynx-cardslider.*` with the actual path to the files in your project.

## Installation via jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-cardslider/))

AvalynxCardSlider is also available via [jsDelivr](https://www.jsdelivr.com/). You can include it in your project like this:

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.1/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.1/dist/js/avalynx-cardslider.js"></script>
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxCardSlider displays correctly.

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-cardslider))

AvalynxCardSlider is also available as a npm package. You can add it to your project with the following command:

```bash
npm install avalynx-cardslider
```

After installing, you can import AvalynxCardSlider into your JavaScript file like this:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxCardSlider displays correctly.

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-cardslider
```

After installing, you can import AvalynxCardSlider into your JavaScript file like this:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxCardSlider displays correctly.

## Installation via Symfony AssetComposer

More information about the Symfony AssetComposer Bundle can be found [here](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css') %}
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js') %}
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxCardSlider displays correctly.

## Installation via Composer ([Link](https://packagist.org/packages/avalynx/avalynx-cardslider))

AvalynxCardSlider is also available as a Composer package. You can add it to your project with the following command:

```bash
composer require avalynx/avalynx-cardslider
```

After installing, you can import AvalynxCardSlider into your HTML file like this:

```html
<link href="vendor/avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js"></script>
```

Make sure to also include Bootstrap's JS/CSS in your project to ensure AvalynxCardSlider displays correctly.

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

AvalynxCardSlider allows the following options for customization:

- `trackId`: (string) ID of the `.row` container that holds the card columns.
- `options`: An object containing the following keys:
    - `scrollMode`: (string) Controls scrolling behavior. `single` advances one column at a time, `page` advances by the number of currently visible columns (default: `single`).
    - `prevBtnId`: (string) ID of the "Back" button (default: `null`).
    - `nextBtnId`: (string) ID of the "Next" button (default: `null`).
    - `dotsId`: (string) ID of the container where dynamic pagination dots are rendered (default: `null`).

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes or improvements. We're looking for contributions in the following areas:

- Bug fixes
- Feature enhancements
- Documentation improvements

Before submitting your pull request, please ensure your changes are well-documented and follow the existing coding style of the project.

## License

AvalynxCardSlider is open-sourced software licensed under the [MIT license](LICENSE).

## Contact

If you have any questions, feature requests, or issues, please open an issue on our [GitHub repository](https://github.com/avalynx/avalynx-cardslider/issues) or submit a pull request.

Thank you for considering AvalynxCardSlider for your project!