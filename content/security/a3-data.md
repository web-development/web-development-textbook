---
title: A3 - Sensible Daten
order: 25
---

Auf [Platz 3 der OWASP Top 10 2017](https://owasp.org/www-project-top-ten/2017/de/A3_2017-Verlust_der_Vertraulichkeit_sensibler_Daten).

Die OWASP beschreibt dieses Problem allgemein so:

> Viele Anwendungen schützen sensible Daten, wie Kreditkartendaten oder Zugangsinformationen nicht ausreichend. Angreifer können solche nicht angemessen geschützten Daten auslesen oder modifizieren und mit ihnen weitere Straftaten, wie beispielsweise Kreditkartenbetrug, oder Identitätsdiebstahl begehen. Vertrauliche Daten benötigen zusätzlichen Schutz, wie z.B. Verschlüsselung während der Speicherung (at rest) oder Übertragung (in transit) sowie besondere Vorkehrungen beim Datenaustausch mit dem Browser.

## Maßnahmen

1. Klärung der Bedrohungen, vor denen die Daten zu schützen sind (z. B. Innen - und Außentäter) und sicherstellen, dass vertrauliche Daten bei der Übertragung/Speicherung geeignet durch Verschlüsselung geschützt werden.
2. Kein unnötiges Speichern vertraulicher Daten. Löschung nicht mehr benötigter Daten. Daten, die es nicht gibt, können auch nicht gestohlen werden.
3. Sicherstellen, dass starke Algorithmen und Schlüssel verwendet werden.
4. Sicherstellen, dass Passwörter mit einem speziell für Passwortschutz entwickelten Algorithmus gespeichert werden.
5. Deaktivieren der Autovervollständigung und des Cachings in Formularen mit vertraulichen Informationen.

Dieser Maßnahmen sind auch durch den Datenschutz gesetztlich vorgeschrieben!

## Links

- [mdn: autocomplete-attribute für input tags](https://developer.mozilla.org/de/docs/Web/HTML/Element/Input#attr-autocomplete)
