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
  li { color: yellow; }
</css>


![Document Object Model und Selektor](/images/css/selector-type.png)


Selector List
---------

Mehrere Selektoren können mit Kommas zu einer Liste gruppiert werden.
Das Komma entspricht einem "Oder": selektiert werden Tags die entweder `h1` sind,
oder `h2`, oder `a`:


<css>
  h1,h2,a { color: yellow; }
</css>


![Document Object Model und Selektor](/images/css/selector-group.png)

(Achtung Falle: für Links mit dem `a` Tag gelten noch zusätzliche Regeln,
siehe weiter Unten.)


Class Selector
---------

Klassen-Namen können wir als Developer*innen einfach erfinden, und an beliebigen
html-tags verwenden. Damit kann man verschiedene "Varianten" eines Tags erstelle,
hier sind z.B. zwei "normale" Absätze und einer der wichtig ist:

<htmlcode>
  <h2>Dies und Das</h2>
  <p>Dies</p>
  <p class="wichtig">und</p>
  <p>Das</p>
</htmlcode>


<css>
  .wichtig { color: yellow; }
</css>


![Document Object Model und Selektor](/images/css/selector-class.png)



ID Selector
---------

Auch ID-Attribute können wir als Developer*innen einfach erfinden, und an beliebigen
html-tags verwenden. Aber: in einem HTML Dokument darf jede ID nur einmal vorkommen.

Jedes ID-Attribut ist gleichzeitig eine "Textmarke" und kann in der URL mit dem Rautezeichen `#` aufgerufen werden.

Wenn folgendes Dokument unter der URL `http://example.com/page.html` erreichbar ist:

<htmlcode>
  <body>
    <header>
      <nav id="menu">Navigation...</nav>
      <h1>Überschrift</h1>
    </header>
    <main>
      ...
    </main>
    <footer id="c">
      copyright (c) ...
    </footer>
  </body>
</htmlcode>

Gibt es zwei Textmarken:

* `http://example.com/page.html#menu`
* `http://example.com/page.html#c`


Der Selektor beginnt ebenfalls mit diesem Zeichen:

<css>
  #menu { color: yellow; }
</css>


![Document Object Model und Selektor](/images/css/selector-id.png)



Descendant Combinator
---------

Hier werden zwei Selektoren mit einem Leerzeichen dazwischen
geschrieben.


Im Beispiel unten werden alle `a` Tags ausgewählt, die Nachkomme
eines `section` sind:

Achtung: `section` wird nur zur Auswahl benützt, wird aber selber nicht ausgewählt!

<css>
  section a { color: yellow; }
</css>


![Document Object Model und Selektor](/images/css/selector-desc.png)


Verschachteltes CSS
-------------------

Auch hier wird ein Element ausgewählt, das Nachkomme eines anderen Elements ist.

Achtung: `section` wird nur zur Auswahl benützt, wird aber selber nicht ausgewählt!

<css>
  section {
    & a {
      color: yellow;
    }
  }
</css>

![Document Object Model und Selektor](/images/css/selector-desc.png)

§

Praktisch: man kann die Deklarationen für `section` auch mit
rein schreiben:

<css>
  section {
    border: 1px gray solid;
    padding: 10px;
    & a {
      color: yellow;
    }
  }
</css>

Und man kann das kaufmännische Und weglassen:

<css>
  section {
    border: 1px gray solid;
    padding: 10px;
    a {
      color: yellow;
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

* Im Kapitel [CSS Selektoren im Detail](/css-layout/selektoren/) geht es weiter.
* [Selektor Demo](/images/css/selectors/vis.html) - mit dieser Seite wurden die Illustrationen erstellt
