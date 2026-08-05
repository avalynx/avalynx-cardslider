# AvalynxCardSlider

[![npm version](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/version.svg)](https://www.npmjs.com/package/avalynx-cardslider)
[![npm downloads](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/download.svg)](https://www.npmjs.com/package/avalynx-cardslider)
[![jsDelivr](https://jbs-newmedia.de/badge/jsdelivr/avalynx-cardslider/hits.svg)](https://www.jsdelivr.com/package/npm/avalynx-cardslider)
[![License](https://jbs-newmedia.de/badge/npm/avalynx-cardslider/license.svg)](LICENSE)
[![Tests](https://jbs-newmedia.de/badge/github/avalynx/avalynx-cardslider/tests.svg)](https://github.com/avalynx/avalynx-cardslider/actions/workflows/tests.yml)
[![codecov](https://jbs-newmedia.de/badge/codecov/avalynx/avalynx-cardslider/coverage.svg)](https://codecov.io/gh/avalynx/avalynx-cardslider)
[![GitHub stars](https://jbs-newmedia.de/badge/github/avalynx/avalynx-cardslider/stars.svg)](https://github.com/avalynx/avalynx-cardslider)

AvalynxCardSlider ist ein leichtgewichtiger, nativer JavaScript-Slider speziell für das Bootstrap Grid-System. Er nutzt Bootstrap Spalten (ab Version 5.3) und gleitet nahtlos entweder karte für Karte oder seitenweise. Komplett ohne Framework-Abhängigkeiten wie jQuery oder Swiper.

## Funktionen

- **Natives Bootstrap Grid**: Volle Kompatibilität mit `col-12`, `col-md-6`, `col-lg-4` usw. Responsive Breakpoints funktionieren Out-of-the-Box.
- **Scroll Modes**: Wähle zwischen `single` (eine Karte pro Klick) oder `page` (gesamte Bootstrap-Breite überspringen).
- **Page-Modus mit Platzhaltern**: Wenn die letzte Seite nicht vollständig ist, werden im `page`-Modus automatisch leere Platzhalter ergänzt (z. B. `5 6 7 _`), damit das Raster sauber bleibt.
- **Steuerung**: Unterstützt Next/Prev Buttons sowie automatisch generierte Paginierungspunkte (Dots).
- **Performance**: Vanilla ES6, keine Abhängigkeiten, minimales CSS. Responsive durch Window-Resize Listener mit Debouncing.

## Beispiele

Hier ist ein einfaches Beispiel für die Verwendung von AvalynxCardSlider in Ihrem Projekt:

* [Übersicht](https://avalynx-cardslider.jbs-newmedia.de/examples/index.html)
* [Simple cardslider (Single)](https://avalynx-cardslider.jbs-newmedia.de/examples/simple-cardslider.html)
* [Page cardslider (Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/page-cardslider.html)
* [Alignment examples (Button/Bullet)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-examples.html)
* [Alignment examples (Button/Bullet, Page)](https://avalynx-cardslider.jbs-newmedia.de/examples/alignment-page-examples.html)
* [Complex card example](https://avalynx-cardslider.jbs-newmedia.de/examples/complex-card.html)

## Installation

Um AvalynxCardSlider in Ihrem Projekt zu verwenden, können Sie es direkt in Ihre HTML-Datei einbinden. Stellen Sie sicher, dass Bootstrap 5.3 oder höher in Ihrem Projekt enthalten ist, damit AvalynxCardSlider korrekt funktioniert.

Zuerst Bootstrap einbinden:

```html
<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/js/bootstrap.bundle.min.js"></script>
```

Dann AvalynxCardSlider einbinden:

```html
<link href="pfad/zu/avalynx-cardslider.css" rel="stylesheet">
<script src="pfad/zu/avalynx-cardslider.js"></script>
```

Ersetzen Sie `pfad/zu/avalynx-cardslider.*` durch den tatsächlichen Pfad zu den Dateien in Ihrem Projekt.

## Installation via jsDelivr ([Link](https://cdn.jsdelivr.net/npm/avalynx-cardslider/))

AvalynxCardSlider ist auch über [jsDelivr](https://www.jsdelivr.com/) verfügbar. Sie können es wie folgt in Ihr Projekt einbinden:

```html
<link href="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.1/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/avalynx-cardslider@1.0.1/dist/js/avalynx-cardslider.js"></script>
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxCardSlider zu gewährleisten.

## Installation via NPM ([Link](https://www.npmjs.com/package/avalynx-cardslider))

AvalynxCardSlider ist auch als NPM-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
npm install avalynx-cardslider
```

Nach der Installation können Sie AvalynxCardSlider wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxCardSlider zu gewährleisten.

## Installation via Symfony AssetMapper

```bash
php bin/console importmap:require avalynx-cardslider
```

Nach der Installation können Sie AvalynxCardSlider wie folgt in Ihre JavaScript-Datei importieren:

```javascript
import { AvalynxCardSlider } from 'avalynx-cardslider';
import 'avalynx-cardslider/dist/css/avalynx-cardslider.css';
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxCardSlider zu gewährleisten.

## Installation via Symfony AssetComposer

Weitere Informationen zum Symfony AssetComposer Bundle finden Sie [hier](https://github.com/jbsnewmedia/asset-composer-bundle).

```twig
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css') %}
{% do addAssetComposer('avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js') %}
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxCardSlider zu gewährleisten.

## Installation via Composer ([Link](https://packagist.org/packages/avalynx/avalynx-cardslider))

AvalynxCardSlider ist auch als Composer-Paket verfügbar. Sie können es mit dem folgenden Befehl zu Ihrem Projekt hinzufügen:

```bash
composer require avalynx/avalynx-cardslider
```

Nach der Installation können Sie AvalynxCardSlider wie folgt in Ihre HTML-Datei einbinden:

```html
<link href="vendor/avalynx/avalynx-cardslider/dist/css/avalynx-cardslider.css" rel="stylesheet">
<script src="vendor/avalynx/avalynx-cardslider/dist/js/avalynx-cardslider.js"></script>
```

Stellen Sie sicher, dass Sie auch Bootstrap JS/CSS in Ihr Projekt einbinden, um eine korrekte Anzeige von AvalynxCardSlider zu gewährleisten.

## Verwendung

HTML-Struktur (Standard Bootstrap Grid mit der ID auf der `.row`):

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

AvalynxCardSlider ermöglicht die folgenden Optionen zur Anpassung:

- `trackId`: (string) ID des `.row` Containers, in dem sich die Spalten (Karten) befinden. Gleiche Logik wie der erste Parameter.
- `options`: Ein Objekt, das die folgenden Schlüssel enthält:
    - `scrollMode`: (string) Bestimmt das Scrollverhalten. `single` scrollt immer eine Spalte weiter, `page` scrollt so viele Spalten weiter, wie gerade im Viewport sichtbar sind (Standard: `single`).
    - `prevBtnId`: (string) ID für den "Zurück"-Button (Standard: `null`).
    - `nextBtnId`: (string) ID für den "Vor"-Button (Standard: `null`).
    - `dotsId`: (string) ID des Containers, in dem die dynamischen Paginierungs-Punkte erzeugt werden sollen (Standard: `null`).

## Beitragen

Beiträge sind willkommen! Wenn Sie etwas beitragen möchten, forken Sie bitte das Repository und senden Sie einen Pull-Request mit Ihren Änderungen oder Verbesserungen. Wir suchen Beiträge in den folgenden Bereichen:

- Fehlerbehebungen (Bug fixes)
- Funktionserweiterungen
- Dokumentationsverbesserungen

Bevor Sie Ihren Pull-Request einreichen, stellen Sie bitte sicher, dass Ihre Änderungen gut dokumentiert sind und dem bestehenden Codestil des Projekts entsprechen.

## Lizenz

AvalynxCardSlider steht unter der [MIT-Lizenz](LICENSE).

## Kontakt

Wenn Sie Fragen, Funktionswünsche oder Probleme haben, eröffnen Sie bitte ein Issue in unserem [GitHub-Repository](https://github.com/avalynx/avalynx-cardslider/issues) oder reichen Sie einen Pull-Request ein.

Vielen Dank, dass Sie AvalynxCardSlider für Ihr Projekt in Betracht ziehen!