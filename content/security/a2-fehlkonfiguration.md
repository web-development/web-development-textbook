---
title: A02 - Fehlkonfiguration
order: 20
---

Auf [Platz 2 der OWASP Top 10 2025: Security Misconfiguration](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/).

Sicherheitsrelevante Fehlkonfiguration kann auf jeder Ebene der Anwendung vorkommen: Betriebssystem, Programmiersprache, Framework, Webserver, Programmcode. Die Zusammenarbeit zwischen Entwickler*innen und Administrator*innen ist wichtig, um eine sichere Konfiguration aller Ebenen zu gewährleisten.

In größeren Projekten / Firmen ist eine Arbeitsteilung üblich zwischen
Entwicklung (Development) und Systemadministration (Operations).

## Ebenen

Für eine Web-Applikation muss man dabei mindestens folgende Schichten beachten:

- Physikalische Sicherheit (Wer kann den Server ein- und ausschalten, zerlegen,...)
- Virtualisierungs-Schicht, z. B. VMware
- Betriebssystem, z. B. Ubuntu, CentOS, Debian
- Datenbank, z. B. PostgreSQL, MySQL, MongoDB
- Programmiersprache/Interpreter, z. B. PHP, Ruby, node.js, Python
- Webserver, z. B. Apache, nginx, caddy, traefik,...
- Framework, z. B. Laravel, Symphony, Rails, nest.js, flask, ...
- Fremd-Applikation, z. B. WordPress, Redmine
- Selbstgeschriebener Code der Applikation

Jede dieser Schichten gilt es, richtig zu konfigurieren
und Sicherheits-Updates einzuspielen.

Wenn es eine Arbeitsteilung zwischen Development (Leute die Programmieren) und Operations
(Leute die die Infrastruktur betreiben) gibt,
muss geklärt sein, wer für welche Schicht zuständig ist.

## Hardening

**Hardening** bedeutet: eine Software so konfigurieren, dass nur das erlaubt ist, was wirklich gebraucht wird — alles andere wird abgeschaltet. Man verkleinert damit die "Angriffsfläche".

Zwei Szenarien:

- Entwicklungs-Rechner: möglichst viele Debug-Möglichkeiten, Bequemlichkeit wichtiger als Sicherheit
- Produktions-Server: Sicherheit wichtiger als Bequemlichkeit, Logging / Monitoring ja, aber nicht öffentlich zugänglich

Dafür gibt es oft schon fertige Konfigurationen, oder Tutorials.

### PHP Hardening: php.ini

PHP wird über die Datei `php.ini` konfiguriert. Viele Einstellungen, die man dort standardmäßig findet,
sind für die Entwicklung gedacht — auf einem Produktionsserver sind sie ein Sicherheitsrisiko.

Ein typisches Beispiel: Fehlermeldungen. Auf dem Entwicklungsrechner will man Fehler direkt im Browser sehen. Auf dem Produktionsserver würde das Angreifer*innen wertvolle Hinweise geben (Dateinamen, Datenbankstruktur, Bibliotheksversionen):

<plain caption="php.ini — Entwicklung (unsicher für Produktion)">
display_errors = On
error_reporting = E_ALL
</plain>

<plain caption="php.ini — Produktion (sicher)">
display_errors = Off
log_errors = On
error_log = /var/log/php/errors.log
</plain>

Weitere wichtige PHP-Einstellungen für den Produktionsserver:

| Einstellung | Entwicklung | Produktion | Grund |
|---|---|---|---|
| `display_errors` | `On` | `Off` | Fehlermeldungen nicht öffentlich zeigen |
| `expose_php` | `On` | `Off` | PHP-Version nicht im HTTP-Header verraten |
| `allow_url_include` | `On` | `Off` | Einbinden von Remote-Dateien verbieten |
| `session.cookie_httponly` | — | `1` | Session-Cookie vor JavaScript schützen |
| `session.cookie_secure` | — | `1` | Session-Cookie nur über HTTPS senden |
{: class="table table-condensed table-bordered" style="width:auto"}

Mit `expose_php = Off` wird z.B. verhindert, dass der Server in jedem HTTP-Response den Header `X-Powered-By: PHP/8.2.1` mitschickt — diese Versionsinformation hilft Angreifer*innen dabei, bekannte Sicherheitslücken gezielt auszunutzen.

- OWASP [PHP Configuration Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html)


