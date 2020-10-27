---
title: Fixe Kopfzeile mit Animation
order: 20
---

Beim Scrollen einer Webseite soll der Header fix am oberen
Rand des Fenster bleiben. In der Ausgangsposition darf er etwas
mehr Platz vebrauchen, sobald er fixiert ist soll er aber kleiner werden.

In folgendem Bild sind drei Zustände beim Scrollen
untereinander abgebildet:

![screenshot](/images/pizza-phases.jpg)

Um diesen Effekt zu erreichen brauchen wir eine Briese CSS Animation
und ein Event, das mit Javascript behandelt wird.

## Header fixieren

Um den Header am oberen Fensterrand fix zu positionieren
verwenden wir die CSS-Anweisung `position: fixed`.

<css>
header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  color: #fff;
  height: 70px;
  background-color: transparent;
  padding-top: 0px;  
}
</css>

## Style verändern? Nein Danke!

Nun könnten wir mit Javascript
direkt den stype des headers verändern

vorher:

`<header style="padding-top: 35px;">`

nachher:

`<header style="padding-top: 0px;">`

Das ist aber unpraktisch. Einfacher ist
es, die CSS-Details im Stylesheet zu belassen, und
nur eine Klasse zu setzen:

vorher:

`<header>`

nachher:

`<header class="shrunk">`

## Klasse vorbereiten

Der zweite Zustand des Headers
wird mit einer Klasse `.shrunk` dargestellt:

<css>
header.shrunk {
  height: 70px;
  background-color: black;
  padding-top: 35px;  
}
</css>

Diese Klasse wird aber nicht im HTML gesetzt,
sondern erst später.

## Klasse anwenden

In der Konsole der Developer Tools können wir nun testen
ob die Anwendung der Klasse das gewünschte Ergebnis erzielt:

<javascript>
    let h = ... /* richtige DOM Node auswählen */
    h.classList.add("shrunk");
    h.classList.remove("shrunk");
</javascript>

## Transition vorbereiten

Der Übergang zwischen den beiden Zuständen soll nicht plötzlich, sondern
als Animation erfolgen: über zwei Sekunden wird der Header von Schwarz auf
transparent umgestellt.

Die effizienteste Art so eine Animation in einer Webseite umzusetzen ist
mit CSS: der Browser weiss alles über den Ablauf der Animation und kann
(eventuell) die Grafikkarte benutzen um sie darzustellen.

Wenn man die Animation statt dessen mit Javascript mit `setTimeout`
oder `requestAnimationFrame` selbst ausprogrammiert kann die Grafikkarte nicht verwendet werden.

<css>
header {
  will-change: background-color;
  will-change: padding;
  
  transition: padding 2s;  
  transition: background-color 2s;  
}
</css>

Der wichtigste Teil ist hier die Angabe `2s` für "zwei Sekunden".
So lange wird er übergang von der einen zur anderen Version des headers dauern.

## Srollen

Nun müssen wir noch erfassen ob gescrollt wurde, und je
nachdem die `.shrunk` Klasse anwenden.

Wie weit schon gescrollt wurde kann man aus dem window-Objekt,
aus der Eigenschaft `pageYOffset` auslesen. Man erhält eine
Zahl, die Maßeinheit sind Pixel:

<javascript>
window.pageYOffset
</javascript>

## Scroll Event behandeln

Wenn die Userin / der User scrollt - egal ob mit Scrollbar, Maus, Touchscreen oder
Keyboard, wird das `scroll` event am window-Objekt ausgelöst. Auf dieses
Event können wir reagieren:

<javascript>
window.addEventListener('scroll', function() {
  console.log(`scrolling has reached ${window.pageYOffset}`);
}); 
</javascript>

In diesen Eventlistener hinein kommt nun die Logik:
den `pageYOffset` auslesen, und je nach Ergebnis die Klasse
setzen oder entfernen.

Die Animation der Hintergrundfarbe und des Paddings wird dann vom
Browser (laut CSS-Anweisung) angewandt.

## Fertig

Wenn alles funktioniert hat kann man jetzt beim Scrollen (egal ob mit Scrollbar, Maus, Touchscreen oder
Keyboard) sehen wie sich der Header verwandelt.

## Ausblick: Parallax Scrolling

Im Webdesign wird das Scrollen gerne als Auslöser für
Animationen verwendet.  

* [Tutorial](https://cssanimation.rocks/parallax/)
