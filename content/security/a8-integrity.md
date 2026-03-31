---
title: A08 - Software or Data Integrity Failures
order: 80
---

[Platz 8 der OWASP Top 10 2025: Software or Data Integrity Failures](https://owasp.org/Top10/2025/A08_2025-Software_or_Data_Integrity_Failures/) bezieht sich die Sicherstellung der Integrität von  Code und Daten.

Integrität heisst hier z.B: ich verwende die Library fullcalendar.js von Adam Shaw und weiteren Autoren. Wie sicher bin ich, dass der Code den ich verwende gleich dem Original ist, und nicht von jemand anderem verändert wurde?

Um zu verhindern, dass der Code unbemerkt verändert werden kann gibt es verschiedene Maßnahmen.


## Laden von Javascript von einem externen Server

Man kann Javascript-Libraries direkt von externen Servern laden.
Es gibt mehrere CDNs, die rund um die Welt mehrere Kopien anbieten, so dass die DAtei immer "aus der Nähe" geladen werden. Ein beispiel ist `jsdelivr.net`.

So könnte die Einbidung aussehen:

<htmlcode>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
</htmlcode>

Wenn ich diese Einbindung zum ersten Mal mache sehe ich mir den Code an der hier geladen wird.
Aber wie kann ich sicherstellen, dass auch nach einer Woche, einem Monat, einem Jahr immer noch
dieselben Daten geladen werden, und nicht eine gehackte Verversion?

Dazu gibt es im Web das Konzept der "Subresource Integrity":
Eine kryptographischen Hashfunktion wird auf den gesamten Inhalt der Datei angewendet, und dieser Hash dann als `integrity`-Attribut des Script-Tags einzufügen:

<htmlcode>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="></script>
</htmlcode>

Jeder Browser prüft dann beim Laden der Javascript-Datei, ob der geladene Inhalt denselben Hash ergibt. Falls nicht wir das Javascript nicht ausgeführt.

Also selbst wenn jemand jsdelivr.net hackt, oder die Quelle von query hackt und so neuen Code einschleust wird meine Webseite und meine User*innen nicht betroffen sein.

Siehe

* [MDN: Subresource Integrity](https://developer.mozilla.org/de/docs/Web/Security/Defenses/Subresource_Integrity)
* [jsdelivr: Using Subresource Integrity (SRI)](https://www.jsdelivr.com/using-sri-with-dynamic-files)


## Laden einer PHP Library mit Composer

[Composer](https://getcomposer.org/) ist der Standard-Paketmanager für PHP. Man definiert die benötigten Libraries in der Datei `composer.json`:

<javascript caption="composer.json">
{
    "require": {
        "twig/twig": "^3.0"
    }
}
</javascript>

Der Befehl `composer install` lädt dann alle Libraries herunter und legt sie im Ordner `vendor/` ab.

Aber woher weiß Composer, ob der heruntergeladene Code auch wirklich der erwartete Code ist — und nicht von jemandem verändert wurde?

### composer.lock

Beim ersten `composer install` erstellt Composer automatisch eine Datei namens `composer.lock`. Diese Datei enthält:

- die **exakten Versionsnummern** aller installierten Pakete — auch der indirekten Abhängigkeiten (d.h. Libraries, die deine Library braucht)
- einen **kryptographischen Hash** für jedes Paket, mit dem der heruntergeladene Inhalt geprüft wird

Ein Ausschnitt aus einer `composer.lock` sieht so aus:

<javascript caption="composer.lock (Ausschnitt)">
{
    "packages": [
        {
            "name": "twig/twig",
            "version": "v3.24.0",
            "source": {
                "type": "git",
                "url": "https://github.com/twigphp/Twig.git",
                "reference": "a6769aefb305efef849dc25c9fd1653358c148f0"
            },
        }
    ]
}
</javascript>

Der Wert bei `reference` verweist auf einen bestimmten Commit im Repository auf github.
Und er name des commit ist wieder ein Hash-Wert aus dem gesamt-Zustand des Codes.



### composer.lock in Git einchecken

Damit diese Sicherheit auf allen Rechnern gilt, muss die `composer.lock` Datei ins Git-Repository eingecheckt werden. Dann gilt:

- `composer install` — installiert exakt die Versionen aus `composer.lock`, mit Hash-Prüfung ✔
- `composer update` — ignoriert `composer.lock`, holt neue Versionen und schreibt eine neue `composer.lock`

Im Entwicklungsalltag nutzt man fast immer `composer install`. `composer update` verwendet man nur bewusst, wenn man Dependencies aktualisieren will — und prüft danach die Änderungen an `composer.lock` sorgfältig.

Siehe

* [Composer: Basic usage](https://getcomposer.org/doc/01-basic-usage.md)
* [Git Book: 10.2 Git Interna - Git Objekte](https://git-scm.com/book/de/v2/Git-Interna-Git-Objekte)


