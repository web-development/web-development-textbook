---
title: Neue Tags und Web Components
order: 10
---

Wie entstehen neue HTML-Tags?  Und kann man sie auch selbst bauen?


## Der HTML Standard

Es klingt ganz einfach: eine Arbeitsgruppe entwickelt HTML weiter, die Browser bauen dann die Tags ein. Die Arbeitsgruppe hat den Namen WHATWG (Web Hypertext Application Technology Working Group). Sie veröffentlichen den HTML Standard auf https://html.spec.whatwg.org/

In der Arbeitsgruppe wird diskutiert, es werden Implementierungen ausprobiert, ... diesen Teil der Arbeit kann man teilweise als [github issues](https://github.com/whatwg/html/issues) und dann als [pull requests](https://github.com/whatwg/html/pulls) mitverfolgen.
Die Entscheidungen erfolgen im Konsens, die wichtigsten Kriterien sind:

* Ein Vorschlag muss technisch ausgereift sein und die Bedürfnisse von Web-Entwicklern sowie Browser-Herstellern gleichermaßen abdecken.
* mindestens zwei unabhängige Browser-Engines (z. B. Chromium/Blink und Gecko) signalisieren, dass sie das Feature implementieren wollen oder es bereits experimentell unterstützen.
* Ein neuer Standard darf niemals dazu führen, dass existierende Webseiten nicht mehr funktionieren. ("Don't break the Web")

## Baseline

Für die Webprogrammierung relevant werden neue HTML Tags, wenn sie in den gängigen Browsern funktionieren. Das kann man im Mozilla Deverloper Network Wiki nachlesen, z.B. hier am Ende der Seite über den &lt;menu&gt; Tag: [Browser-Kompatibilität](https://developer.mozilla.org/de/docs/Web/HTML/Reference/Elements/menu#browser-kompatibilit%C3%A4t). Dieselbe Information findet man auch in [caniuse.com](https://caniuse.com/mdn-html_elements_menu).

Jedes Jahr wird eine Liste von neuen Tags, CSS-Eigenschaften, Javascript-Features zusammen gestellt, die in allen Browsern gelandet sind: die Baseline. Siehe z.B. [Baseline 2025](https://web.dev/baseline/2025)

## Custom Elements

Man kann auch eigene HTML-Tags mit JavaScript und CSS programmieren. Diese Tags müssen ein Minus-Zeichen enthalten. In der [Demo Seite](/images/html/web-components.html) ist es der Tag &lt;youtube-lite&gt; der verwendet wird.


