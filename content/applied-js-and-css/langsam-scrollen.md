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

[scroll-behaviour](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

<css>
html {
  scroll-behavior: smooth;
}
</css>

Damit ist die Aufgabe erledigt.

### Kompatibilität

Erst seit Jänner 2020 unterstützt auch Edge
die css property scroll-behaviour.

Woher kann ich das wissen? Wie kann man damit umgehen?

Ein guter Startpunkt für diese Fragen ist die Webseite "can i use". Hier kann
man für verschiedene HTML, CSS, JavaScript Features nachlesen welche
Browser dieses Feature unterstützen. In diesem Fall unter [https://caniuse.com/css-scroll-behavior](https://caniuse.com/css-scroll-behavior).

