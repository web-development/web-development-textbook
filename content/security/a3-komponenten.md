---
title: A03 - Software Supply Chain Failures
order: 30
---

Auf [Platz 3 der OWASP Top 10 2025: Supply Chain Failures](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/). Hier geht es um die Sicherheit der gesamten "Lieferkette" für Software. Wenn ein Team von Programmierer*innen gemeinsam an einem großen Projekt baut wird das zu einem komplexen Problem

* Verwenden wir Alle exakt dieselbe Version jeder einzelnen Library? Das gilt nicht nur für die Library die wir bewusst einbinden, sondern auch für die weiteren Abhängigkeiten. Also z.B. ich verwende `a.js`, diese Library braucht `b.js`, diese Library bruacht `c.js`.
* Ist irgend eine verwendet Libray veraltet? Hat ein bekanntes Sicherheitsproblem? Wird nicht mehr weiter entwickelt?
* Werden auf allen Systeme die wir verwenden (Entwicklungsmaschine, Gitlab-Server, Webserver) regelmäßig Updates eingespielt?





## Maßnahmen

- Nur Komponenten inkludieren, die wirklich verwendet werden
- regelmäßig automatisch prüfen, ob die Komponenten Sicherheitsprobleme haben

Siehe [Managing Dependencies](https://web-engineering.github.io/dependencies.html) im Buch "Web Engineering".
