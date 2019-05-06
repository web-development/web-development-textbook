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
  padding: 35px 100px 0;
}
</css>

## Klasse Vorbereiten

Die zwei Zustände des Headers (schwarz und etwas kleiner, vs. transparent und etwas größer)
unterscheiden wir mit einer Klasse `.shrunk`:

<css>
header.shrunk {
  height: 70px;
  background-color: black;
  padding: 0 100px 0;  
}
</css>

## Transition vorbereiten

Der Übergang zwischen den beiden Zuständen soll nicht plötzlich, sondern
als Animation erfolgen: über zwei Sekunden wird der Header von Schwarz auf
transparent umgestellt.

Die effizienteste Art so eine Animation in einer Webseite umzusetzen ist
mit CSS: der Browser weis alles über den Ablauf der Animation und kann
die Grafikkarte benutzen um sie darzustellen.

(Wenn man die Animation statt dessen mit Javascript und `setTimeout`. selbst ausprogrammiert
kann die Grafikkarte nicht verwendet werden)

<css>
header {
  will-change: background-color;
  will-change: padding;
  
  transition: padding 2s;  
  transition: background-color 2s;  
}
</css>

## Srollen

Nun müssen wir noch erfassen ob gescrollt wurde, und je
nachdem die `.shrunk` klasse anwenden.

Wie weit schon gescrollt wurde kann man aus dem window-Objekt,
aus der Eigenschaft `pageYOffset` auslesen. Man erhält eine
Zahl, die Maßeinheit sind Pixel:

<javascript>
window.pageYOffset
</javascript>

## Scroll Event behandeln

TODO: jquery enfernen

Wenn die Userin / der User scrollt - egal ob mit Scrollbar, Maus, Touchscreen oder
Keyboard, wird das `scroll` event am window-Objekt ausgelöst. Auf dieses
Event können wir reagieren:

<javascript>
  $(window).scroll(set_header);  
</javascript>

Die Funktion die nun beim scrollen aufgerufen wird
liest den `pageYOffset` aus, und setzt je nach Ergebnis die Klasse:

<javascript>
  function set_header() {
    if ( window.pageYOffset >= 120 ) {
      $('header').addClass('shrunk');
    }
    else {
      $('header').removeClass('shrunk');
    }    
  }
</javascript>

Die Animation der Hintergrundfarbe und des Paddings wird dann vom
Browser (laut CSS-Anweisung) angewandt.

## Fertig

Wenn alles funktioniert hat kann man jetzt beim Scrollen (egal ob mit Scrollbar, Maus, Touchscreen oder
Keyboard) sehen wie sich der Header verwandelt.
