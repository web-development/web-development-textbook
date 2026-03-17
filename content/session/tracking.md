---
title: Tracking
order: 15
---

Cookies wurden im Jahr 1994 im Browser "Netscape Communicator" implementiert, und danach
als [RFC 2109](https://datatracker.ietf.org/doc/html/rfc2109) standardisiert.

Ein paar Bytes Daten, die ein Browser speichert und an denselben Server zurückschickt,
von dem sie kamen - da kann nichts Schlimmes passieren?


## Eine Webseite

Betrachten wir diese Webseite: Sie besteht aus Text, Bildern, ein paar Videos von YouTube und ein paar Photos von Instagram:

![](/images/cookies/webpage-with-trackers.svg)


## Eine Webseite - viele Cookies

Wenn ich diese Webseite in meinem Browser lade, werden mehrere HTTP-Requests ausgeführt:

* Der HTTP-Request, mit dem die Banner-Werbung von der Domain `adsafeprot.com` geladen wird, erhält als Antwort nicht nur die Bilddatei mit dem Werbebanner, sondern auch ein Cookie von (und für) `adsafeprot.com`.
* Beim Laden der Video-Datei von `youtube.com` wird ein Cookie von `youtube.com` gesetzt.
* Beim Laden des ersten Photos von `instagram.com` wird ein Cookie von `instagram.com` gesetzt.

Diese Cookies werden auch "Third-Party-Cookies" genannt, da sie von einer "dritten Partei" kommen, also nicht von der Webseite, die ich aufgerufen habe.

## Surfen in einer Welt mit "Third-Party-Cookies"

Nun surfe ich weiter im Web, manchmal mit Link zur nächsten Seite, manchmal mit Eintippen einer URL, manchmal mit Aufruf eines Bookmarks: Auf vielen Seiten werde ich wieder Inhalte von Ad Networks, von YouTube/Google, von Insta/Facebook/Meta, ... usw. laden:


![](/images/cookies/tracker-be-tracking.svg)

Beim ersten Mal, wenn ich so einem Tracker begegne, wird ein Cookie mit einer ID gesetzt, und der Tracker weiß noch nichts über mich. Beim zweiten Mal sendet mein Browser automatisch das Cookie wieder an den Tracker, nun weiß er schon zwei Datenpunkte über mich....

Wenn ich zusätzlich noch direkt einen Dienst der Tracker verwende, mich z.B. bei YouTube oder Insta einlogge, dann können die gesammelten Surf-Daten mit meinen bereits bekannten Daten kombiniert werden.


## Wie viele Tracker tracken mich?

Die Statistik von [ghostery](https://www.ghostery.com/whotracksme/) 2025 sagt: 75% aller Webseiten enthalten mindestens einen Tracker. Im Durchschnitt sind es 7 Tracker pro Seite. Nur noch 33% der Tracker verwenden Cookies, die anderen verwenden modernere Methoden wie Fingerprinting, die nicht verhindert werden können.

Es gibt auch wissenschaftliche Arbeiten zu dem Thema, z.B. Steven Engelhardt and Arvind Narayanan, “Online Tracking: A 1‑million‑site Measurement and Analysis,” in Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security (CCS ’16), 2016. Engelhardt und Narayanan untersuchten eine Million Webseiten und fanden 123 Tracker, die in mehr als 1% der Seiten vorkamen.

## Was kann ich tun?

Als technisch gebildeter Mensch hat man verschiedene Möglichkeiten, sich zu schützen:

* Ad-Blocker wie [ghostery](https://www.ghostery.com/),
* Browser, die Tracking unterbinden wie [firefox](https://www.firefox.com/de/),  [brave](https://brave.com/de/) oder [arc](https://arc.net/)
* separate [Container in firefox](https://addons.mozilla.org/de/firefox/addon/multi-account-containers/)/[spaces in arc](https://resources.arc.net/hc/en-us/articles/19228064149143-Spaces-Distinct-Browsing-Areas) für verschiedene Dienste

Allen anderen Menschen, die technisch nicht so geschickt sind, hilft nur das Gesetz:
In Europa ist das die Datenschutz-Grundverordnung (DSGVO) und die ePrivacy-Richtlinie.
Sie schreiben vor, dass Tracking nur nach Zustimmung erlaubt ist.


## Siehe auch

* [Datenschutz](/qualitaet/datenschutz/)





