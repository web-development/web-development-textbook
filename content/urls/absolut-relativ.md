---
title: Absolute und relative URLs
order: 10
---

## Verwendung

URLs werden in CSS und HTML an vielen Stellen verwendet: bei Links und Bilder, beim Verweis auf externe Stylesheets, externe JavaScript-Dateien, etc.  An all diesen Stellen können Sie URLs in den hier beschriebenen Schreibweisen verwenden.

Die „absolute“ und „relative“ Schreibweise wurde von den Pfadangaben im UNIX-Dateisystem übernommen; auch die Pfadangaben von Windows funktionieren ähnlich.

## Beispiel

In der Beispiel-Datei
[http://web-development.github.com/images/urls.html](/images/urls.html) sind folgende drei URLs enthalten:

**absolut**
: beginnt mit Protokoll `http://web-development.github.com/images/you-are-here.jpg`

**relativ zum Webserver**
: beginnt mit einem Schrägstrich (Slash) `/images/you-are-here.jpg`

**relativ zum Dokument**
: kein besonderes Kennzeichen `you-are-here.jpg`

## Relative URLs

Bei den relativen URLs muss man die URL des enthaltenden Dokuments 
und die relative URLs "zusammen—addieren", um zu einer absoluten URL zu kommen.

Wenn die relative URL mit einem Schrägstrich (Slash) beginnt
ersetzt sie den gesamten "Pfad" in der UL des enthaltenden Dokuments:

    http://web-development.github.com/images/urls.html   
                               +     /images/you_are_here.jpg  = 
    http://web-development.github.com/images/you_are_here.jpg  

Wenn die relative URL nicht mit einem Schrägstrich beginnt
wird sie zum Pfad des aktuellen Ordners dazugerechnet:

    http://web-development.github.com/images/urls.html   
                                       +     you_are_here.jpg  = 
    http://web-development.github.com/images/you_are_here.jpg  

## Relative URLs an anderer Stelle

Wird das Dokument an eine andere Stelle verschoben, und ändert sich
damit die Ausgangs-URL, dann ist das Ergebnis anders (und würde nicht
funktionieren):

    http://multimediatechnology.at/2011/06/19/ruby
                            +     /images/you_are_here.jpg  = 
    http://multimediatechnology.at/images/you_are_here.jpg  

und:

    http://multimediatechnology.at/2011/06/19/ruby
                                        +     you_are_here.jpg  = 
    http://multimediatechnology.at/2011/06/19/you_are_here.jpg  

## Relative URLs mit Ordnernamen

Relativen URLs können selbst wieder Ordnernamen enthalten:

    http://multimediatechnology.at/2011/
                                     +  12/15/screenshot/= 
    http://multimediatechnology.at/2011/12/15/screenshot/

## Relative URLs mit Punkt-Punkt

Zwei Punkte als Ordnernamen bedeuten dabei: „raus aus dem aktuellen Ordner“:

    http://multimediatechnology.at/web-communities/barcamp/
                                                     +     ../ = 
    http://multimediatechnology.at/web-communities/

Dieser Schreibweise erlaubt auch sehr umständliche Formulierungen
(mit Redundanz):

    http://multimediatechnology.at/2011/06/19/ruby.html
                   +     ../../../2008/05/../04/17/rattenscharfes-computergame.html = 
    http://multimediatechnology.at/2008/04/17/rattenscharfes-computergame

## Alles nur im Client 

All diese Berechnungen finden im Webbrowser statt, und sind völlig unabhängig davon, 
wie der Webserver die URL interpretiert. So könnte z.B die letzten URL 
„in Wirklichkeit“ gar nicht auf Ordner mit Namen 2008, 04, 17 verweisen, 
sondern eine Datenbanksuche nach „2008-04-17“ nach sich ziehen – das ist Sache des Servers.

