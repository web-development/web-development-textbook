---
title: Graceful Degradation
order: 15
---

# graceful degradation und progressive enhancement

Die Idee ist dabei immer die Gleich: man baut die Webseite zuerst ohne Javascript, und fügt dann Javascript hinzu (ohne die Verwendbarkeit ohne Javscript zu zerstören). Der Inhalt (Content) der Webseite bleibt auch ohne Javascript zugänglich.

![Abbildung 60: Die Rolle von Content, Darstellung und Programmierung (Unobstrusive Javascript)](/images/image267.png)

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

## Ein praktisches Beispiel

Die Aufgabenstellung: ein einer langen Webseite sind mehrere Anker-Punkte
mit `<a name=...>` gesetzt, über ein Navigationsmenü soll man diese erreichen
können. [Diese Seite](http://brigitte-jellinek.at) zeigt ein funktionierendes
Beispiel (letzte Version).

### Version 1

Wir beginnen mit völlig problemlosem HTML

<htmlcode caption="webseite mit Anker-Punkten, fixe Navigation">
<div id="navigation">
  <a href="#s0">Thema 0</a> 
  <a href="#s1">Thema 1</a> 
  ...
</div>  
<section id="s0">
  <h2>Thema 0</h1> 
  <p>bla bla ...</p>
</section>
<section id="s1">
  <h2>Thema 1</h1> 
  <p>bla bla ...</p>
</section>
...
__|__
#navigation {
  position: fixed;
  z-index: 10;
  bottom: -1px;
}
</htmlcode>

### Version 2

In einem Versuch die Seite zu verbessern ersetzen wir nun die
Links durch den Aufruf einer Javascript-Funktion:

<htmlcode caption="Version 2">
<div id="navigation">
  <a onClick="scrollToMe('#s0')">Thema 0</a> 
  <a onClick="scrollToMe('#s1')">Thema 1</a> 
  ...
</div>    
</htmlcode>

Die Javsacript-Funktion verwendet jQuery und die übergebene
ID um den Ziel des Links ausfindig zu machen, und dann die
jQuery Methode `offset` um die Position des Ziels im Dokument
zu berechnen.

Mit der jQuery-Methode `animate` wird dann eine Animation erzeugt:
binnen 800 Millisekunden wird die Seite durch setzen von `scrollTop`
von der aktuellen Scrollposition in die Scrollposition gebracht,
die das Ziel ganz oben im Fenster anzeigt.

Mit `return false` wird die "normale" Funktion des Links deaktiviert.

<javascript caption="Javascript für Version 1">
function scrollToMe(id) {
  console.log(`link zu ${hash} geclickt. scroll!`);
  document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
  return false;
}
</javascript>

§

Diese Version ist kein Beispiel für gutes Javascript:
in manchen Browsern funktioniert das Scrollen der Seite mit `scrollTop` nicht.

Mit dieser Version haben wir

- die klassischen Links zerstört
- für manche javascript-fähige Browser eine Animation eingefügt
- für manche javascript-fähige Browser keine Animation eingefügt

Wir haben dabei beide Prinzipien gebrochen

- kein Progressive Enhancement: Links funktionieren nicht mehr
- kein Unobstrusive Javascript: Javascript-Code direkt in HTML-Attributen

### Version 3

Im nächsten Versuch werden wir jQuery verwenden, um unobstrusive zu
programmieren:

Die Navigation wird wieder zurück-gestellt auf normale HTML-Links:

<htmlcode caption="Version 3">
<div id="navigation">
  <a href="#s0">Thema 0</a>
  <a href="#s1">Thema 1</a>
  ...
</div>
</htmlcode>

An diese Links wird ein neuer Eventhandler angefügt, abernicht mit `onclick`
im HTML, sondern in JavaScript, nach dem Laden der Seite.

<javascript caption="Version 3">
links = document.querySelectorAll("nav a");
for (let l of links) {
  l.addEventListener("click", scroll_to_link);
}
</javascript>

§

Die Funktion `scroll_to_link` wird als Eventhandler implementiert:
sie erwartet ein Event als Argument und die angeklickte Node
in der Variablen `this`.

Ausserdem verwendet die Funktion
die `preventDefault` um das "normale" Verhalten
des click-events zu unterbinden.

<javascript caption="Version 3">
function scroll_to_link(ev) {
  let hash = this.hash;
  console.log(`link zu ${hash} geclickt. scroll!`);
  document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
  window.history.pushState({}, "", hash);
  ev.preventDefault();
}
</javascript>

§

Diese Variante funktioniert schon besser:

- die klassischen Links funktionier für Browser ohne Javascript
- für manche javascript-fähige Browser eine Animation eingefügt
- für manche javascript-fähige Browser ist die Animation immer noch kaputt

Wir haben damit schon ein Prinzip eingehalten, und sind
beim anderen Prinzipien auf halben Weg

- teilweise progressive enhancement:
  - Links funktionieren für Browser ohne Javascript
  - in der Javascript-Variante bleibt die URL immer gleich
- unobstrusive javascript: erfüllt

### Version 4

Im nächsten Schritt werden wir sicher stellen, dass die Animation
nur in solchen Browsern verwendet wird, wo sie auch funktioniert.

Achtung: hier gibt es einen falschen und einen richtigen Ansatz:

1. Browser Detection: Unterscheidung nach Namen, Versionsnummer, Betriebssystem des Browsers
2. Feature Detection: Unterscheidung nach genau der Fähigkeit, die ich verwenden will

Die erste Variante funktioniert nicht: die Selbstoffenbarung der Browser
kann falsch sein, ich kenne nicht alle Browser und ihre Fähigkeiten.
Siehe auch
[Feature & Browser Detection im jQuery learning center](https://learn.jquery.com/code-organization/feature-browser-detection/)

Die Funktion `scroll_to_link` bleibt unverändert.
Wir testen ob die Funktion `scrollIntoView` wirklich existiert.
Wenn das funktioniert wird
die globale Variable `can_scroll` auf `true` gesetzt,
andernfalls auf `false`.

<javascript caption="Version 4">
window.can_scroll = (typeof document.body.scrollIntoView === 'function');
</javascript>

Diese Herangehensweise - Feature Detection, dann Flags setzen,
die im weiteren Code verwendet werden können - wird von der Library
[modernizr](http://modernizr.com/) für eine lange Liste von Features
angeboten.

§

Diese Variante behebt das Problem mit nicht-funktionierenden
Javascript-Browsern:

- die klassischen Links funktionier für Browser ohne Javascript
- die klassische Version wird auch für "animations-unfähige" Javascript Browser verwendet
- für manche javascript-fähige Browser funktioniert die Animation

Es bleibt aber noch in Problem:

- teilweise progressive enhancement:
  - in der Javascript-Variante bleibt die URL immer gleich
- unobstrusive javascript: erfüllt

### Version 5

In der klassischen Version ändert sich beim navigieren zwischen den
Ankern jeweils die URL im Browser. Wenn ich ein Ziel annavigiere,
und dann die URL kopiere um einen Link zu setzen / mir eine Bookmark setze,
dann verweist die URL die ich verwende wirklich wieder genauf auf das Ziel.

Dieses Verhalten ist erstrebenswert, wird aber von der "animierten" Version
derzeit nicht geliefert.

(Diese "Navigierbarkeit" ist auch ein klassisches Problem von AJAX-Applikationen,
die Lösung die wir hier entwickeln funktioniert auch dort)

In die Funktion `scroll_to_link` wird eine Zeile eingefügt.

<javascript caption="Version 4">
function scroll_to_link(ev) {
  ...
  window.history.pushState({}, "", hash);
  ...
}

</javascript>

Mit dem `window.history` Objekt kann man den Browser von Javascript aus "navigieren":
mit `history.back()` zum Beispiel einen Schritt zurück gehen.

Mit `history.pushState()` kann man zu einer neuen Seite navigieren,
sie wird dabei an die History angefügt - das ist das "normale" Verhalten
des Browsers.

Eine Alternative ist `history.replaceState()` - dabei wird die aktuelle Seite
ersetzt, die Browser-History wird nicht länger.

Beide Methoden erwarten drei Argumente - ein Objekt und zwei Strings -
aber nur das letzte Argument wird derzeit benutzt. Es ist ein String mit der
URL die geladen werden soll.

§

Mit dieser Variante haben wir für die Javascript-Browser
alle Funktionalität der einfachen HTML-Version wiederhergestellt.
Und zusätzlich gibt es eventuell noch eine schöne Animation.

Damit sind beide Prinzipien voll erfüllt:

- progressive enhancement - alle Browser erhalten die maximal mögliche Funktionalität
- unobstrusive javascript - kein Javascript-Code im HTML

## Siehe auch

- Andy Bell(2019)[The “P” in Progressive Enhancement stands for “Pragmatism”](https://hankchizljaw.com/wrote/the-p-in-progressive-enhancement-stands-for-pragmatism/) - mit einem sehr schönen Beispiel
- Stuart Langridge(2019)[Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html)
- Archibald(2013)[Progressive Enhancement is Still Important](http://jakearchibald.com/2013/progressive-enhancement-still-important/)
