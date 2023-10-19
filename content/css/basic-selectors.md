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


Selector List
---------

Mehrere Selektoren können mit Kommas zu einer Liste gruppiert werden.
Das Komma entspricht einem "Oder": selektiert werden Tags die entweder `h1` sind,
oder `h2`, oder `a`:


<css>
  h1,h2,a { color: red; }
</css>


![Document Object Model und Selektor](/images/css/selector-group.png)

(Achtung Falle: für Links mit dem `a` Tag gelten noch zusätzliche Regeln,
siehe weiter Unten.)


Descendant Combinator
---------

Hier werden zwei Selektoren mit einem Leerzeichen dazwischen
geschrieben.


Im Beispiel unten werden alle `a` Tags ausgewählt, die Nachkomme
eines `div` sind:

Achtung: `div` wird nur zur Auswahl benützt, wird aber selber nicht ausgewählt!

<css>
  div a { color: red; }
</css>


![Document Object Model und Selektor](/images/css/selector-desc.png)


Verschachteltes CSS
-------------------

(Neu in 2023)

Auch hier wird ein Element ausgewählt, das Nachkomme eines anderen Elements ist.

Achtung: `div` wird nur zur Auswahl benützt, wird aber selber nicht ausgewählt!

<css>
  div {
    & a {
      color: red;
    }
  }
</css>

![Document Object Model und Selektor](/images/css/selector-desc.png)

Praktisch: man kann die Deklarationen für `div` auch mit
rein schreiben:

<css>
  div {
    border: 1px gray solid;
    padding: 10px;
    & a {
      color: red;
    }
  }
</css>

[Demo: Verschachteltes CSS](/images/css/nested.html)


Links formatieren
--------------

Der Browser unterscheidet bei der Darstellugn von Links zwischen denen  die schon einmal besucht wurden (visited) und neuen Links (link).

Die Default Einstellung der Browser entspricht ungefähr folgendem CSS:

<css>
  a:any-link { text-decoration: underline; }
  a:link    { color:blue; }
  a:visited { color:#FF00FF; }
</css>

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
`:hover` schlägt an wenn die Maus sich über dem Element befindet. Auf Touch-Geräten hat es keine Wirkung.

`:active` wird wirksam, wenn der Link wirklich mit Klick oder Touch ausgelöst wird:


[Demo](/images/css/hover-active.html)


Und noch viel mehr
-----------

Im Kapitel [CSS Selektoren im Detail](/css-layout/selektoren/) geht es weiter.
