---
title: A2 - Cryptographic Failures
order: 15
---

Auf [Platz 2 der OWASP Top 10 2021: Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/).

Fehler bei der Verschlüsselung oder fehlende Verschlüsselung kann dazu führen
dass sensible Daten zugänglich werden.

## Maßnahmen

1. Klassifizierung der Daten die verarbeitet, gespeichert oder übertragen werden. Welche Daten sind aufgrund von Datenschutzgesetzen, behördlichen Vorschriften oder Geschäftsanforderungen sensibel?
2. Sicherstellen, dass vertrauliche Daten bei der Übertragung ("in transit") und Speicherung ("at rest")  durch geeignet Verschlüsselung geschützt werden.
3. Kein unnötiges Speichern vertraulicher Daten. Löschung nicht mehr benötigter Daten. Daten, die es nicht gibt, können auch nicht gestohlen werden.
4. Sicherstellen, dass starke Algorithmen und Schlüssel verwendet werden.
5. Sicherstellen, dass Passwörter mit einem speziell für Passwortschutz entwickelten Algorithmus gespeichert werden.
6. Deaktivieren der Autovervollständigung und des Cachings in Formularen mit vertraulichen Informationen.

Dieser Maßnahmen sind auch durch den Datenschutz gesetzlich vorgeschrieben!

## Links


- [mdn: autocomplete-attribute für input tags](https://developer.mozilla.org/de/docs/Web/HTML/Element/Input#attr-autocomplete)
- [SSL Server Test](https://www.ssllabs.com/ssltest/) - später, wenn wir selbst https konfigurieren
