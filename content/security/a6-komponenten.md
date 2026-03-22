---
title: A03 - Software Supply Chain Failures
order: 30
---

Auf [Platz 3 der OWASP Top 10 2025: Supply Chain Failures](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)

Die OWASP beschreibt dieses Problem ungefähr so:

> Web-Applikationen verwenden Komponenten wie z. B. Bibliotheken, Frameworks oder andere Softwaremodule. Wenn eine verwundbare Komponente ausgenutzt wird, kann ein
> solcher Angriff zu schwerwiegendem Datenverlust oder bis zu einer Serverübernahme führen.
> Applikationen, die Komponenten mit bekannten Schwachstellen einsetzen, können Schutzmaßnahmen unterlaufen und so zahlreiche Angriffe und Auswirkungen ermöglichen.


## Maßnahmen

- Nur Komponenten inkludieren, die wirklich verwendet werden
- regelmäßig automatisch prüfen, ob die Komponenten Sicherheitsprobleme haben

Siehe [Managing Dependencies](https://web-engineering.github.io/dependencies.html) im Buch "Web Engineering".
