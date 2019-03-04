---
title: Was ist PHP? Was passiert am Webserver?
order: 20
---
PHP ist eine Programmiersprache die oft am Webserver "im Backend" verwendet wird.  

Viele bekannte Open Source Applikationen sind in PHP geschrieben: Viele Content Management System wie [Wordpress](https://wordpress.org/) oder [Drupal](https://www.drupal.org/), Shop-Systeme wie [Magento](https://magento.com/), [MediaWiki](https://www.mediawiki.org/wiki/MediaWiki) (die Software der Wikipedia), [ownCloud](https://owncloud.org/), die Lern-Plattoform
[Moodle](https://moodle.org/), [LimeSurvey](https://www.limesurvey.org/) für Umfragen,
und viele, viele mehr.

Aber auch hinter komerziellen Produkten steckt oft PHP: zum Beispiel [Facebook](https://code.fb.com/tag/php/)
oder [tumblr](https://engineering.tumblr.com/tagged/php)

Neben PHP werden viele andere Sprachen im Backend verwendet: ruby (on rails),
java, python, c#, ... aber wir beginnen mit PHP.

§

![Abbildung: So funktioniert PHP](/images/php-vorbereitung/php-sequence-diagram.svg)


Das PHP-Programm wird gestartet um die Anfrage des Browsers zu beantworten. Nachdem diese Aufgabe erfüllt ist, wird das PHP-Programm wieder beendet. Die Laufzeit ist also sehr, sehr kurz! 

Der Output ist immer HTML. Der Client erhält nur das fertige HTML und kann nicht erkennen, welche Sprache am
Server verwendet wurde. Der PHP-Quelltext des Programms wird also nie im Browser sichtbar.

§

Ein sehr einfaches Beispielprogramm in PHP gibt „Hallo Welt“ aus und zeigt (mit dem Befehl phpinfo) viele Informationen über den Webserver und die PHP Installation an:

<php>
<html>
<body>
  <?php
    echo "Hallo Welt";
    phpinfo();
  ?>
</body>
</html>
</php>

Um dieses Programm zu testen, brauchen Sie einen Browser und einen Webserver. 

