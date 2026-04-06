---
title: Struktur einer Web-Applikation
order: 25
---

An einem Beispiel lernen wir nun den typischen Aufbau einer einfachen Web-Applikation
kennen. Die fertige Applikation soll Werke und Personen aus einem
Portfolio anzeigen:

![Abbildung 144: Homepage der Mini-Applikation](/images/dbapp-home.png)


## Idee und erste Skizzen


[example from wikimedia commons](https://commons.wikimedia.org/wiki/File:Batch_uploader_for_small_GLAM_projects_-_wireframe_-_03.png)


## Wireframes, Prototype

[example from wikimedia commons](https://commons.wikimedia.org/wiki/File:Wolfplex-Wiki-WorkshopsIdeaList-wireframe-20130929-v02.png)

## Aufbau der Applikation

Die folgende Tabelle zeigt alle (geplanten) Seiten der Applikation im Überblick. Zu jeder Seite wird der Titel angeführt (wird auf der Seite angezeigt), der Dateiname der PHP-Datei (wichtig für die Verlinkung), eventuell notwendige Parameter und eine Beschreibung was die Seite anzeigt.

|Titel|Dateiname|Parameter|Beschreibung|
|+----|+--------|+--------|+-----------|
|Home |`index.php`|         |Zeigt Gesamtzahl der Personen und Werke an, sowie Bilder von 10 zufälligen Werken|
|Personen|`personen.php`|   |Zeigt alle sichtbaren Profile an, mit Links zu  person.php|
|Personensuche|`psuche.php`|   |Zeigt Ein Such-Formular für Personen an|
|Personensuche|`psuche.php`| suchwort  |Zeigt alle sichtbaren Profile an, wo Vor- oder Nachname like suchwort|
|Profil einer Person|`person.php`|id (Schlüssel der Person)| Zeigt Details zu einer bestimmten Person an: Anzahl der Werke und Username|
|Werke| `werke.php`|        |Zeigt alle sichtbaren Werke an, mit Links zu werk.php|
|Details zu einem Werk| `werk.php`|id (Schlüssel des Werks)| Zeigt Details zu einer bestimmten Werk an: Titel, Datum der Publikation, eventuell eine Liste der Beteiligten Personen und ihrer Rollen|
|Werksuche|`wsuche.php`|   |Zeigt Ein Such-Formular für Werke an|
|Werksuche|`wsuche.php`| suchwort  |Zeigt alle sichtbaren Werke an, wo Titel like suchwort|
{: class="table table-condensed table-bordered" style="width:auto"}


Verlinkung
----------

In der Datei personen.php wird zu jeder Person ein passender Link zu person.php angezeigt:

<htmlcode caption="Links von Personen zur einzelnen Person">
<li>
  <b>Michael A</b>
  <a href="person.php?id=577">mehr</a>
</li>
<li>
  <b>Benjamin A</b>
  <a href="person.php?id=579">mehr</a>
</li>
</htmlcode>



Datensätze suchen
-------------------
In der Datei `psuche.php` wird ein Formular zur Suche nach Vornamen angezeigt:

<htmlcode>
<form action="psuche.php" method="get">
  Suche nach einer Person mit Namen <input name="suchwort">
  <input type="submit">
</form>
</htmlcode>


Siehe auch
--------------

Die Rolle der URL in der Web-Architektur: Ahmad Alfy’s [Your URL Is Your State](https://alfy.blog/2025/10/31/your-url-is-your-state.html)
