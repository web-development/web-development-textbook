---
title: Graceful Degradation
order: 15
---

# graceful degradation und progressive enhancement

Die Idee ist dabei immer die Gleich: man baut die Webseite zuerst ohne Javascript, und fügt dann Javascript hinzu (ohne die Verwendbarkeit ohne Javscript zu zerstören). Der Inhalt (Content) der Webseite bleibt auch ohne Javascript zugänglich.

![Abbildung 60: Die Rolle von Content, Darstellung und Programmierung (Unobstrusive Javascript)](/images/image267.png)

§

Die Motivation dahinter ist, die Zugänglichkeit für Alle Leser*innen, alle Browser zu
gewährleisten.  Im Artikel [The unreasonable effectiveness of simple HTML](https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/) schreibt Terence Eden dazu eine Geschichte.

§

Von dieser Herangehensweise profitieren nicht nur Blinde, Menschen mit veralteten Browsern oder exotischen Ausgabegeräte. Auch für Suchmaschinen wie Google oder andere Programme die die Information aus den Webseiten weiter verarbeiten ist dieses Prinzip hilfreich.

Um zu testen, ob das wirkliche funktioniert kann man ganz einfach mit dem AddOn [Disable JavaScript](https://addons.mozilla.org/de/firefox/addon/disable-javascript/) (in Firefox und Chrome) testen. Wie hier gezeigt kann Javascript mit einem Klick deaktiviert werden.

![Disable JavaScript - die Icons](/images/javascript-dom/js-toggle.png)

## Grenzen von Graceful Degradation

Es gibt Websites, bei denen dieser Ansatz nicht funktionieren kann.
z.B. für einen Shooter als Browsergame kann man nicht nicht eine
Alternative ohne Javascript anbieten.

Für viele Apps funktioniert das aber. Probieren Sie z.B. gmail ohne javascript
aus, oder das Webmail der FH (zimbra). Die Interaktion ist etwas
umständlicher, aber man kann alle Features der Mail benutzen.


## Siehe auch

- Andy Bell(2019)[The “P” in Progressive Enhancement stands for “Pragmatism”](https://hankchizljaw.com/wrote/the-p-in-progressive-enhancement-stands-for-pragmatism/) - mit einem sehr schönen Beispiel
- Stuart Langridge(2019)[Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html)
- Archibald(2013)[Progressive Enhancement is Still Important](http://jakearchibald.com/2013/progressive-enhancement-still-important/)
