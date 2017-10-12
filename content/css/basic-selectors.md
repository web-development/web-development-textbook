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

Der &lt;a&gt;-Tag wird in HTML für zwei sehr unterschiedliche Dinge verwendet: zum Setzen von Links und zum Setzen von Textmarken (auch ‚Anker’ genannt):

<htmlcode>
  <h1><a name="unis"></a>Universitäten</h1>
  <a href="http://www.uni-salzburg.at/">Uni Salzburg</a>
</htmlcode>

Textmarken sind normalerweise unsichtbar, Links sind normalerweise blau oder violett und unterstrichen. 

Um die Darstellung von Links zu verändern muss man in CSS als Selektor `:link`
oder `:visited` als Selektoren verwenden. Der Browser unterscheidet dabei zwischen Links die schon einmal besucht wurden (visited) und neuen Links. 

<css>
  a:link, a:visited { text-decoration: none; }
  a:link    {color:blue}
  a:visited {color:#FF00FF }
</css>

Im folgenden Beispiel werden die Links mit einem Icon markiert:

<css>
  a:link, a:visited { 
     background-image:    url(icon-link.gif);
     background-position: center right;
     background-repeat:   no-repeat;
     padding-right:       9px; 
  } 
</css>


