---
title: CSS Selektoren
order: 40
---

Um CSS Selektoren zu verstehen muss man das Document Object Betrachten:
die Darstellung des HTML-Dokuments als Baum:

![Document Object Model und Selektor](/images/css/html-und-dom.png)

Bei der Beschreibung des Baumes verwendet man folgende Fachbegriffe:

* Elemente, 
* Texte, 
* Nodes
* Eltern-Element, 
* Kinder
* Vorfahren, 
* Nachkommen

Universal Selector
-------

Der Selektor `*` wählt alle Elemente des Baums aus:

![Document Object Model und Selektor](/images/css/selector-universal.png)

Type Selector 
---------

Über den Namen des HTML-Tags wählt man alle Elemente dieses Typs aus,
zum Beispiel wählt `li`  alle Listen-Elemente aus:

<css>
  li { color: red; }
</css>


![Document Object Model und Selektor](/images/css/selector-type.png)


Group Selector
---------

Mehrere Selektoren können mit Kommas zu einem neuen Selektor gruppiert werden.
Das Komma entspricht einem "Oder": selektiert werden Tags die entweder `h1` sind,
oder `h2`, oder `a`:


<css>
  h1,h2,a { color: red; }
</css>


![Document Object Model und Selektor](/images/css/selector-group.png)

(Achtung Falle: für Links mit dem `a` Tag gelten noch zusätzliche Regeln,
siehe weiter Unten.)


Descendant Selector
---------

Hier wird ein Element ausgewählt, das Nachkomme eines anderen Elements ist.

Achtung: `div` wird nur zur Auswahl benützt, wird aber selber nicht ausgewählt!

<css>
  div a { color: red; }
</css>


![Document Object Model und Selektor](/images/css/selector-desc.png)

(Achtung Falle: für Links mit dem `a` Tag gelten noch zusätzliche Regeln,
siehe weiter Unten.)


Links formatieren
--------------

Der Browser unterscheidet bei der Darstellugn von Links zwischen denen  die schon einmal besucht wurden (visited) und neuen Links (link).

Die Default Einstellung der Browser entspricht ungefähr folgendem CSS:

<css>
  a:any-link, a:-webkit-any-link { text-decoration: underline; }
  a:link    { color:blue; }
  a:visited { color:#FF00FF; }
</css>

Achtung: `:any-link` ist noch experimentell, und wird (im Herbst 2017) nur in Firefox
schon in dieser Schreibweise akzeptiert.  In den anderen Browsern muss man noch
die Schreibweise mit vorgestelltem `-webkit` verwenden.

§

Im folgenden Beispiel werden die Links mit einem Icon markiert:

<css>
  a:link, a:visited {
     background-image:    url(icon-link.gif);
     background-position: center right;
     background-repeat:   no-repeat;
     padding-right:       9px;
  }
</css>

[Demo](/images/css/link-icon.html)


### Interaktion

Die Pseudo-Klassen `:hover` und `:active` gelten  bevor ein Link wirklich geladen wird:
`:hover` schlägt an wenn die Maus sich über dem Element befindet. Danache 
wird `:active` wirksam, wenn der Link wirklich mit Klick oder Touch ausgelöst wird:


[Demo](/images/css/hover-active.html)


Und noch viel mehr
-----------

Im Kapitel [CSS Selektoren im Detail](/css-layout/selektoren/) geht es weiter.
