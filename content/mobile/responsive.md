---
title: Responsive Design
order: 10
---

Wie wir im Kapitel [CSS Layout - Responsive Design](/css-layout/responsive-design/) gelernt
haben kann man mit CSS Mediaqueries auf die Größe und Pixeldichte das Ausgabegeräts reagieren
und die Webseite verschieden formatieren.

## Wiederholung: Mediaqueries

Mediaqueries erlauben eine "Verzweigung" in CSS.

<css caption="CSS mit Mediaqueries">
@media screen and (max-width: 480px) {
  .column {
    width: 100px;
  }
  /* weitere Regeln für kleine Screens */
}
/* allgemein gültige Regeln */
</css>

Auch die Eingabemethode kann mit Mediaqueries abgefragt werden.
Ein Smartphone oder Tablet ist meist ein Gerät ohne `hover` und
mit einem groben Cursor (`pointer: coarse`).

<css caption="CSS Medaqueries für color-scheme">
/* smartphones, touchscreens */
@media (hover: none) and (pointer: coarse) {
    /* ... */
}/* stylus-based screens */
@media (hover: none) and (pointer: fine) {
    /* ... */
}/* Nintendo Wii controller, Microsoft Kinect */
@media (hover: hover) and (pointer: coarse) {
    /* ... */
}/* mouse, touch pad */
@media (hover: hover) and (pointer: fine) {
    /* ... */
}
</css>

siehe auch [MDN: media features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) und [MDN: features queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

[Demo: Mediaqueries](/images/content/mobile/responsive/mediaqueries.html)

### Wiederholung: Vektor-Grafik

Das Format SVG ist für mobile Geräte sehr gut geeignet, wie wir schon in
[CSS Layout - Responsive Design](/css-layout/responsive/#slide-9) und
[Grafik - SVG](/grafik/svg/) gelernt haben. Die Einbindung erfolgt mit dem img-Tag oder direkt im HTML.

    <img src="circle.svg">

![Abbildung: Kreis in SVG-Darstelllung](/images/circle.svg)
