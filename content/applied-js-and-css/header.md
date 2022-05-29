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

Um diesen Effekt zu erreichen brauchen wir eine Prise CSS Animation
und ein Event, das mit Javascript behandelt wird.

## Header fixieren

Um den Header am oberen Fensterrand fix zu positionieren
verwenden wir die CSS-Anweisung `position: fixed`.

<css>
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 35px 100px 0;
  color: white;
  z-index: 10;
}
</css>

## Style verändern? Nein Danke!

Nun könnten wir mit Javascript
direkt den Style des headers verändern

vorher:

`<header style="padding: 35px 100px 0;">`

nachher:

`<header style="padding: 15px 100px;">`

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
  background-color: black;
  padding: 15px 100px; 
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
  transition: padding 2s, background-color 2s;
  /* transition: all 2s; */
}
</css>

Der wichtigste Teil ist hier die Angabe `2s` für "zwei Sekunden".
So lange wird der Übergang von der einen zur anderen Version des Headers dauern.

## Scrollen

Nun müssen wir noch erfassen, ob gescrollt wurde, und je
nachdem die `.shrunk` Klasse anwenden.

Wie weit schon gescrollt wurde, kann man aus dem window-Objekt - 
aus der Eigenschaft `pageYOffset` - auslesen. Man erhält eine
Zahl, die Maßeinheit sind Pixel:

<javascript>
window.pageYOffset
</javascript>

## Scroll Event behandeln

Wenn die Userin / der User scrollt - egal ob mit Scrollbar, Maus, Touchscreen oder
Keyboard - wird das `scroll`-Event am window-Objekt ausgelöst. Auf dieses
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

## Ausblick: Mehr Spass beim Scrollen

Im Webdesign wird das Scrollen gerne als Auslöser für
Animationen verwendet.  

* [Scrollama.js](https://github.com/russellgoldenberg/scrollama#scrollamajs)
* [Tutorial Parallax Scrolling](https://cssanimation.rocks/parallax/)
