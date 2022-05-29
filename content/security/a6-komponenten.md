---
title: A6 - Komponenten
order: 35
---

Auf [Platz 6 der OWASP Top 10 2021: Anfällige und veraltete Komponenten ](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)

Die OWASP beschreibt dieses Problem ungefähr so:

> Web Applikationen verwenden Komponenten wie z.B. Bibliotheken, Frameworks oder andere Softwaremodule. Wenn eine verwundbare Komponente ausgenutzt wird, kann ein
> solcher Angriff zu schwerwiegendem Datenverlust oder bis zu einer Serverübernahme führen.
> Applikationen, die Komponenten mit bekannten Schwachstellen einsetzen, können Schutzmaßnahmen unterlaufen und so zahlreiche Angriffe und Auswirkungen ermöglichen.

## Maßnahmen

- Nur Komponenten inkludieren, die wirklich verwendet werden
- regelmäßig automatisch prüfen, ob die Komponenten Sicherheitsprobleme haben

Siehe [Managing Dependencies](https://web-engineering.github.io/dependencies.html) im Buch "Web Engineering".
