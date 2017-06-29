---
title: Themes, Sidebars und Widgets verwenden
order: 100
---

Themes
-------

Die visuelle Darstellung des Blogs wird durch ein „Theme“ festgelegt. Viele fertige Themes finden Sie auf der offiziellen Wordpress Seite: http://wordpress.org/extend/themes/ (siehe Abbildung 1Abbildung 9).


![Abbildung 113: Das offizielle Verzeichnis von Wordpress-Themes http://wordpress.org/extend/themes/](/images/wordpress-theme-dir.png)

Achtung: wenn Sie nach Themes googlen werden Sie auch viele Themes mit eingebautem SPAM finden! Deswegen
ist es besser das offizielle Verzeichnis zu verwenden, oder das Theme genau zu
untersuchen.

§

Themes werden meist als zip-Dateien zum Download angeboten. Um ein Theme zu installieren muss man:

1.  Die zip-Datei herunterladen, 
2.  Die zip-Datei auspacken (Dabei entsteht ein Ordner mit vielen Dateien) 
3.  den Ordner in wp-content/themes hochladen (dabei die Ordnerstruktur erhalten!)
4.  im Backend von Wordpress unter Darstellung ⇒ Theme das neue Theme aktivieren (siehe Abbildung 110).
 
![Abbildung 114: Auswahl des Themes (Navigationspunkt "Darstellungs")](/images/wordpress-themes.png)

§

Technisch betrachtet ist ein Theme ist ein Ordner voll PHP und CSS-Dateien in einem Unter-Order von `wp-content/themes`.  Das Theme kann viele Dateien enthalten, die beiden wichtigsten sind style.css und screenshot.png. 

Als Kommentar im Stylesheet style.css sind Informationen über das Theme und die AutorInnen gespeichert. Im Backend von Wordpress (Abbildung 110) wird diese Information gemeinsam mit der Datei screenshot.png bei der Auswahl der Themes angezeigt.

In Abbildung 111 wird der Ordner des Themes sandbox gezeigt. 


![Abbildung 115: Wordpress Theme "Sandbox“: nach dem Auspacken der ZIP-Datei ein Ordner mit vielen Dateien](/images/wordpress-theme-ordner.png)


Sidebars und Widgets
---------------------

Die "Sidebar" wird auf jeder erzeugten HTML-Seite dargestellt - egal ob
Homepage, Beitrag oder Seite.  Welche Sidebars es gibt und wo sie angezeigt werden ist im Theme
definiert.

"Widgets" sind die einzelnen Teile die zu Sidebars zusammen gestellt werden können.  Das folgende Theme bietet z.B. eine fixe Navigation für die Seiten (rechts oben) und drei Sidebars auf der rechten Seite.  In die Sidebars können jeweils mehrere Widgets eingefügt werden.  Hier findet sich in der oberen Sidebar nur ein Text-Widget, in der linken Sidebar nur das Such-Widget. In der rechten Sidebar befinden sich zwei Widgets: Aktuelle Artikel und Kategorien.


![Abbildung 116: Theme mit Page-Navigation (schwarzer Block oben rechts) und drei Sidebars (rot strichlierte Kästen)](/images/wordpress-sidebars.png)



Widgets
--------

Viele der angebotenen Widgets sind erst sinnvoll wenn der Blog viele Einträge hat. z.B. ein Kalender oder ein Archiv. Eine Empfehlung für die ersten drei Widgets, die ein neuer Blog haben sollte: Ein kurzer Text, ein Suchfeld und die neuesten Artikel:

                  
![Abbildung 117: Empfehlung für einen neuen Blog: Drei Widgets: Text, Suche, Letzte Artikel](/images/wordpress-widgets.png)

§

Das Zusammenstellen der Sidebars aus den einzelnen Widgets erfolgt im Backend unter Darstellung ⇒ Widgets per „drag and drop“:


![Abbildung 118: Das Widget „Kategorien“ wird per „drag and drop“ zur Sidebar 3 hinzugefügt](/images/wordpress-widget-drag.png)

§

Viele Widgets haben noch Konfigurationsmöglichkeiten. Diese werden erst sichtbar, wenn man das Dreieck rechts anklickt, siehe Abbildung 115.


![Abbildung 119: Verändern oder Löschen eines Widgets](/images/wordpress-widget-delete.png)

§

Hier ein Überblick über die Funktion der angebotenen Widgets:

Seiten 
:    listet die Seiten des Blogs auf. Das wäre mit dem Theme in Abbildung 112 nicht sinnvoll, da schon eine Seiten-Navigation (schwarzer Block oben rechts) vorhanden ist.

Kalender 
:    linkt zu „Tages-Archiven“, z.B zu den Artikeln die am 15. Mai 2008 publiziert wurden. Achtung: dieser Kalender ist nicht für die Ankündigung von Terminen / Events geeignet!

Archive 
:    linkt zu „Monats-Archiven“.  Die Anzahl der Artikel kann zu jedem Monat mit angezeigt werden.

Links 
:    zeigt eine Liste mit Links an, diese können unter Verwalten ⇒ Links eingegeben werden. In der Standard-Installation von Wordpress ist eine Linkliste mit 7 Wordpress Links enthalten, diese sollte man auf jeden Fall durch eigene Links ersetzen oder ganz entfernen.

Meta 
:    zeigt Möglichkeiten zum An- und Abmelden an.

Search 
:    zeigt ein Suchfeld für die Volltextsuche an. 

Neueste Artikel 
:    zeigt die Titel der neuesten Artikel an. Das ist besonders wichtig wenn LeserInnen über eine Google-Suche auf der Seite eines alten Artikels landen. Durch die „neuesten Artikel“ werden sie vielleicht weiter in den Blog hineingelockt.

Schlagworte (englisch: tags) 
:    können zu Artikeln vergeben werden und sind dann über diese Navigation auffindbar. Es ist sinnvoll kurze Wörter als tags zu verwenden die schon bei delicious oder Digg bekannt sind.

Kategorien (englisch: categories) 
:    können zu Artikeln vergeben werden. Aus den verwendeten Kategorien entsteht eine Navigation. (Siehe Lorelle on Wordpress2 für eine Diskussion von Tags vs. Categories)

Text 
:   ermöglicht die Anzeige eines statischen Textes in der Sidebar. Sollte man unbedingt nutzen um den Blog (ultra)kurz vorzustellen: Wer steht dahinter, in welcher Rolle wird geschrieben, was ist der Zweck?

RSS 
:   ermöglicht das Einbinden eines fremden RSS-Feed. Hier gibt es besonders viele Konfigurationsmöglichkeiten:

Neueste Kommentare 
:   zeigt die neuesten Kommentare. Achtung: falls Sie Kommentare zulassen müssen Sie diese unbedingt regelmäßig lesen und illegale (üble Nachrede, Wiederbetätigung) und lästige (SPAM) entfernen.

RSS Links 
:    zeigt Links zu den RSS-Feeds des Blogs an. Diese Information ist auch im HTML-Header zu finden und wird deswegen von manchen Browsern (Firefox, MSIE8) automatisch angezeigt.

<htmlcode caption="verweis auf den RSS-Feed im HEAD eines HTML-Dokuments">
<link rel="alternate" type="application/rss+xml" 
      href="http://wordpress.local/?feed=rss2" 
      title="Programmier-Portfolio Posts RSS feed">
</htmlcode>

