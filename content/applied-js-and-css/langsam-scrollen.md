---
title: Langsam Scrollen
order: 25
---

Das Ziel dieser Übung ist: Wenn ein "interner" Link, ein Link zu einer Textmarke
in derselben Seite, angeklickt wird, dann soll das Fenster
langsam zur Zielposition scrollen, so dass man besser nachvollziehen kann
dass der Link innerhalb der Seite erfolgte.

## Interne Links mit Hash

Links innerhalb einer Seite können auf jede `id` in der Seite verweisen.
In folgendem Beispiel verweist der dritte Link im Navigationsmenü
auf die `<section>` mit der id `order`:

<htmlcode caption="Navigationsmenü mit internen Links">
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#menu">Speisekarte</a></li>
        <li><a href="#order">Online Bestellen</a></li>
        <li><a href="#guest">Gästebuch</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
    </nav>
    ....
    <section id="order">
    ....
    <footer id="contact">
</htmlcode>

Wird so ein interner Link angeklick, erfolgt die neue Darstellung der
Seite blitzschnell. Es ist schwer zu erkennen, dass man sich nun nicht
auf einer neuen, anderern Seite befindet, sondern einfach nur weiter
unten auf derselben Seite.

Die Lösung: langsam scrollen.

## Mit CSS: scroll-behaviour

Seit Jänner 2020 
[unterstützt auch Edge](https://caniuse.com/#feat=css-scroll-behavior)
die css property
[scroll-behaviour](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior):

<css>
html {
  scroll-behavior: smooth;
}
</css>

Damit ist die Aufgabe erledigt.


## Mit Javascript

Diese Erklärung ist nicht mehr nötig, die Lösung mit CSS ist besser.

### Normalen Link verhindern

Als ersten Schritt setzen wir einen EventListener
um das `click` event
abzufangen, und mit `preventDefault` das "normale" Verhalten des Links zu
unterbinden.

<javascript>
// let l = .... ein link in der Seite ...
l.addEventListener('click', scroll_to_link);
function scroll_to_link(ev) {
  console.log(`link geclickt. wird ignoriert!`);
  ev.preventDefault();
}
</javascript>

Damit sind die Links erst mal kaputt:
Im Event-Handler ist die Variable `this` gesetzt: sie verweist
auf das angeklickte Element der Webseite. In diesem Fall ist das
immer ein `a`-Tag. Mit der Methode `href` könnte man die vollständige
URL auslesen, auf die der Link verweist. Wir sind aber nur am letzten
Teil der URL interessiert. Den kann man mit der Methode `hash` auslesen:

<javascript>
let hash = this.hash; // z.B. '#order'
</javascript>

### Zum Element hin Scrollen

Die DOM-Methode [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
erledigt das eigentliche Scrollen zum Element hin.

<javascript>
document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
</javascript>

### Kompatibilität

Die Funktion scrollIntoView wird nicht von allen Browsern implementiert.
Woher kann ich das wissen? Wie kann man damit umgehen?

Ein guter Startpunkt für diese Fragen ist die Webseite "can i use". Hier kann
man für verschiedene HTML, CSS, JavaScript Features nachlesen welche
Browser dieses Feature unterstützen. In diesem Fall unter [https://caniuse.com/#search=scrollintoview](https://caniuse.com/#search=scrollintoview).

Bei caniuse lernen wir: die Option "smooth" ist in Safari
und IE nicht implementiert. Unter dem Tab "Resourcse" liefert die Seite
auch gleich eine Lösung: Ein [polyfill](http://iamdustan.com/smoothscroll/) - eine Javascript Libary
die die fehlende Funktionalität implementiert: [smooth scroll behavior polyfill](http://iamdustan.com/smoothscroll/).

### Der Browser funktioniert nicht mehr

Da wir mit `event.preventDefault` die "normale" Behandlung des Links verhindert
haben, wird auch die URL nicht mehr korrekt gesetzt und im Browser angezeigt.

Das heisst wenn ich den Link zum Gästebuch anklicke, dann zeigt der Browser
danach nicht korrekt `http://users.multimediatechnology.at/~fhs0000/pizza/#guest` an,
sondern weiterhin die URL `http://users.multimediatechnology.at/~fhs0000/pizza/`.

Ohne Korrekte URL funktioniert die Navigation nicht wie erwartet:

z.B. Lisa liest einen Eintrag im Gästebuch, findet ihn witzig, und schickt den
Link weiter an Bart. Wenn Bart die URL verwendet, landet er aber ganz oben auf
der Seite, und versteht nicht was Lisa so witzig findet.

z.B. Homer betrachtet gerade seinen Kontostand im Online-Banking und ist deprimiert.
Um seine Laune zu heben will er eine Pizza bestellen, und tippt die URL der Pizzaria ein.
Im Navigationsmenü klickt auf "Speisekarte", sucht sich eine Pizza aus, und klickt danach auf "Online Bestellen".
Er hat aber schon wieder vergessen welche Pizza er wollte, und verwendet den "Zurück"-Button des Browsers
um zur Speisekarte zurück zu gehen. Statt dessen landet er aber wieder im Online-Banking.
Denn für den "Zurück"-Button zählt eine Seite nur, wenn sie eine eigene URL hat. Da die Klicks
im Navigationsmenü der Pizzaria-Seite die URL nicht verändert haben zählen sie nicht.

Wenn wir die erwartete Funktionsweise des Browsers wiederherstellen wollen,
müssen wir die korrekte URL setzen.

### Korrekte URL setzen

Welche Seiten in welcher Reihenfolge angesurft wurden ist im Browser gespeichert,
und in Javascript durch das `window.history` Objekt dargestellt. Auf dieses
Objekt hat man aber nicht vollen Zugriff: sonst könnte ja jede Webseite
die BesucherInnen ausspionieren und herausfinden wo sie vorher waren.

Einige wenige [Manipulationen](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
des History Objekts sind erlaubt: mit den Methoden `back()`, `forward()` und `go()` kann
man von Javascript aus die "Vorwärts" und "Zurück" Buttons bedienen.

Mit `pushState()` und `replaceState()` kann man der History einen neuen Eintrag
hinzufügen. Ganz so, als würde eine neue Seite geladen. Aber: es wird nicht wirklich
eine neue Seite geladen, das HTML-Dokument und der Zustand des Javascript-Programmes
bleiben genau gleich. Alle Variablen enthalte dieselben Werte, alle Funktionen sind noch definiert.

Für unser Beispiel brauchen wir nur das dritte Argument von `pushState`: die neue URL
die angezeigt werden soll. Es reicht eine relative URL, in unserem Fall nur das Hash-Zeichen
und die id.

Das erste Argument von pushState muss ein Objekt sein (es reicht ein leeres Objekt),
das zweite Argument muss ein String sein (es reicht ein leerer String), das dritte
Argument ist die relative URL:

<javascript>
window.history.pushState({}, "", hash);
</javascript>

### Fertig

Wenn wir alles richtig programmiert haben funktioniert nun das Navigations-Menü
wieder: bei klick wird langsam zum entsprechenden Teil der seite gescrollt, und die URLs
ändern sich.


## Mehr

* A.Ricaud [HTML and CSS techniques to reduce your JavaScript](https://calendar.perfplanet.com/2020/html-and-css-techniques-to-reduce-your-javascript/) im [Web Performance (Advent) Calendar 2020](https://calendar.perfplanet.com/2020/)
