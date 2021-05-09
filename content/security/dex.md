---
title: Web Security
intro: Sie erhalten einen Einblick in die Sicherheits-Probleme von Web-Applikationen.
---

Die Sicherheit von Web Applikationen ist ein komplexes Thema.
Die OWASP gibt dazu regelmäßig Empfehlungen heraus.

Für ein großes Web Projekt liefert [OWASP Application Security Verification Standard](https://github.com/OWASP/ASVS/blob/master/4.0/OWASP%20Application%20Security%20Verification%20Standard%204.0.2-de.pdf) eine vollständige Checkliste.


Für den Einstieg werden wir  die [OWASP Top 10 von 2017](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_2017_Project)
betrachten. Wir werden es speziell auf PHP, Postgres, Apache anwenden.

Was Sie können sollten

- Sie können SQL-Injection Probleme erkennen und mittels prepared Statements vermeiden
- Sie können XSS Probleme erkennen und durch geeignetes Escapen des Outputs und eine Content Security Policy vermeiden
- Sie können eine Authentisierung mit Passwort und Cookie in PHP implementieren
- Sie können Sicherheitsproblem beim Speichern von Passwörter und sensitiven Daten erkennen und vermeiden
- Sie können erkennen, wenn eine Applikation den Zugriffsschutz nicht konsequent für jede URL überprüft, und das Problem beheben

Die OWASP beschreibt bei den Top 10 nicht nur den Angriff selbst, sondern den gesamten Angriffsweg bis
zu den wirtschaftlichen Auswirkungen:

![](/images/security/angriffswege.png)

Hier werden wir uns aber auf eine technische Beschreibung des Angriffes und
auf die Gegemaßnahmen beschränken.

Quellen

- [OWASP Top 10, 2017](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
