---
title: AJAX Irrwege
order: 60
---

Wie im vorigen Kapitel gelernt ist AJAX die englische Abkürzung für „Asynchrones
Javascript und XML“. Mit AJAX kann man Webseiten verbessern – man kann sie aber
auch verschlechtern.

## Schlechte Verwendung von AJAX

Stellen Sie sich vor Sie haben eine Website mit 8 statischen HTML-Seiten, die
durch einfache Links verbunden sind. Wenn man AJAX kennen lernt, kommt man vielleicht
auf die Idee: statt normaler Links lädt man die neue Seite nur noch mit AJAX und ersetzt dann den Inhalt der aktuellen Seite. Was spricht
dafür?

- Das Anzeigen der einzelnen Seite geht schneller, da nur der Inhalt, nicht aber z.B. der HTML `<head>` ausgetauscht werden muß. Damit entfällt meist auch das Laden von CSS und Javascript ressourcen.

Nun surfen wir durch diese Site und beobachten in den Developer Tools welche http-Requests
gemacht werden: [Demo Seite](/images/ajax-bad/)

![AJAX statt normaler Links - eine schlechte Idee](/images/ajax-bad.png)

Beim Anklicken des „Links“ wird jeweils ein GET
Request abgesetzt. Aber: die URL in der Adresszeile des Browsers bleibt immer
gleich. Keine der „Seiten“ hat eine eigene URL.
Das hat viele Auswirkungen, unter anderem:

- Man kann keinen Link zu einer bestimmten Seite setzen – nur zur „Startseite“
- Man kann kein Lesezeichen (Bookmark, Favoriten) auf eine bestimmte Seite setzen
- Google „sieht“ den Text der einzelnen Seite zwar, aber kann immer nur auf das Deckblatt verweisen.

Vergleicht man Vor- und Nachteile sieht man schnell, dass in diesem Fall die
Version ohne AJAX (ganz normale Links) besser wäre.

§

Um das Problem der "fehlendes URLs" zu lösen gibt es in der
"History API" die Methoden `pushState` und `replaceState`.

Damit kann man für die verschiedenen Zustände innerhalb ein und deselben
HTML Dokuments jeweis eine URL definieren. Damit funktionieren das
verlinken, Lesezeichen setzen, u.s.w. wieder.

Webseite die Javascript und pushState in dieser weise nutzen nennt
man "Single Page Apps" (SPA).

## Siehe auch

- [HTML5 History API](https://html.spec.whatwg.org/multipage/browsers.html#the-history-interface)
- [HTML5 pushState and Single-Page apps](https://www.frontendjournal.com/html5-pushstate-and-single-page-apps/)
- [page.js](https://visionmedia.github.io/page.js/) eine Library die die Verwendung von der History API einfach macht
