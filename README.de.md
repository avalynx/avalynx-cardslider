# AvalynxCardSlider

[![npm Version](https://img.shields.io/npm/v/avalynx-cardslider)](https://www.npmjs.com/package/avalynx-cardslider)
[![npm Downloads](https://img.shields.io/npm/dt/avalynx-cardslider)](https://www.npmjs.com/package/avalynx-cardslider)
[![jsDelivr](https://img.shields.io/jsdelivr/npm/hm/avalynx-cardslider)](https://www.jsdelivr.com/package/npm/avalynx-cardslider)
[![Lizenz](https://img.shields.io/npm/l/avalynx-cardslider)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/avalynx/avalynx-cardslider?style=flat&logo=github)](https://github.com/avalynx/avalynx-cardslider)

AvalynxCardSlider ist ein leichtgewichtiger, nativer JavaScript-Slider speziell für das Bootstrap Grid-System. Er nutzt Bootstrap Spalten (ab Version 5.3) und gleitet nahtlos entweder karte für Karte oder seitenweise. Komplett ohne Framework-Abhängigkeiten wie jQuery oder Swiper.

## Funktionen

- **Natives Bootstrap Grid**: Volle Kompatibilität mit `col-12`, `col-md-6`, `col-lg-4` usw. Responsive Breakpoints funktionieren Out-of-the-Box.
- **Scroll Modes**: Wähle zwischen `single` (eine Karte pro Klick) oder `page` (gesamte Bootstrap-Breite überspringen).
- **Page-Modus mit Platzhaltern**: Wenn die letzte Seite nicht vollständig ist, werden im `page`-Modus automatisch leere Platzhalter ergänzt (z. B. `5 6 7 _`), damit das Raster sauber bleibt.
- **Steuerung**: Unterstützt Next/Prev Buttons sowie automatisch generierte Paginierungspunkte (Dots).
- **Performance**: Vanilla ES6, keine Abhängigkeiten, minimales CSS. Responsive durch Window-Resize Listener mit Debouncing.

## Beispiele

- [Übersicht](https://avalynx-cardslider.jbs-newmedia.de/examples/index.html)
- [Simple cardslider (Single)](https://avalynx-cardslider.jbs-newmedia.de/examples/simple-cardslider.html)
- [Page cardslider (Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/page-cardslider.html)
- [Alignment examples (Button/Bullet)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-examples.html)
- [Alignment examples (Button/Bullet, Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-page-examples.html)
- [Complex card example](https://avalynx-cardslider.jbs-newmedia.de/examples/complex-card.html)

## Einbindung (direkt im HTML)

Stellen Sie sicher, dass Bootstrap 5.3 (oder neuer) eingebunden ist.

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- AvalynxCardSlider -->
<link href="path/to/avalynx-cardslider.css" rel="stylesheet">
<script src="path/to/avalynx-cardslider.js"></script>
```

## Einbindung via jsDelivr (CDN)

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.0/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.0/dist/js/avalynx-cardslider.js"></script>
```

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-cardslider))

```bash
npm install avalynx-cardslider
```

Danach in JavaScript importieren:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-cardslider
```

Danach in JavaScript importieren:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

## Installation via Symfony AssetComposer

Weitere Informationen zum Symfony AssetComposer Bundle finden Sie [hier](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css') %}
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js') %}
```

## Installation via Composer (PHP) ([Link](https://packagist.org/packages/avalynx/avalynx-cardslider))

```bash
composer require avalynx/avalynx-cardslider
```

Einbindung in HTML:

```html
<link href="vendor/avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js"></script>
```

## Verwendung

HTML Struktur (Standard Bootstrap Grid mit der ID auf der `.row`):

```html
<div class="container">
    <!-- Wrapper ist optional, wird automatisch vom JS ergänzt, falls nicht vorhanden -->
    <div class="avalynx-cardslider-wrapper">
        <div class="row" id="myCardTrack">
            <!-- Nutzen Sie beliebige Bootstrap Breakpoints -->
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">Inhalt 1</div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">Inhalt 2</div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card">Inhalt 3</div>
            </div>
        </div>
    </div>

    <!-- Optionale Steuerelemente außerhalb des Wrappers für freie Positionierung -->
    <div class="mt-3 text-center">
        <button id="btnPrev" class="btn btn-secondary">Zurück</button>
        <button id="btnNext" class="btn btn-primary">Vor</button>
    </div>
    <div id="sliderDots" class="mt-3 text-center"></div>
</div>
```

Initialisierung im JavaScript:

```javascript
new AvalynxCardSlider('myCardTrack', {
  scrollMode: 'page',     // 'single' oder 'page'
  prevBtnId: 'btnPrev',   // Optional
  nextBtnId: 'btnNext',   // Optional
  dotsId: 'sliderDots'    // Optional
});
```

## Optionen

- `trackId` (string, required): ID des `.row` Containers, in dem sich die Cols (Karten) befinden. *Gleiche Logik wie der Erste Parameter*.
- `options` (object):
    - `scrollMode` (string): Bestimmt das Scrollverhalten. `single` scrollt immer eine Spalte weiter, `page` scrollt so viele Spalten weiter, wie gerade im Viewport sichtbar sind (Standard: `single`).
    - `prevBtnId` (string): ID für den "Zurück"-Button (Standard: `null`).
    - `nextBtnId` (string): ID für den "Vor"-Button (Standard: `null`).
    - `dotsId` (string): ID des Containers, in dem die dynamischen Paginierungs-Punkte erzeugt werden sollen (Standard: `null`).

## Mitwirken

Beiträge sind willkommen! Bitte erstellen Sie einen Fork und senden Sie einen Pull Request. Achten Sie dabei auf konsistenten Code‑Stil und ausreichende Dokumentation.

## Lizenz

AvalynxCardSlider steht unter der [MIT‑Lizenz](LICENSE).

## Kontakt

Fragen, Feature‑Wünsche oder Probleme? Bitte ein Issue im [GitHub‑Repository](https://github.com/avalynx/avalynx-cardslider/issues) eröffnen oder einen Pull Request stellen.
