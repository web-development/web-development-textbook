---
title: Beispiel RSS
order: 100
---

RSS ist ein Format um die Daten eines Blogs maschinenlesbar anzubieten.
Wo bietet z.B. der Wordpress Blog `http://multimediatechnology.at/` 
unter der URL `http://multimediatechnology.at/feed/` die gleichen Inhalte
wie die Homepage des Blogs im RSS Format an.

## Was ist RSS?

RSS ist eine XML-Sprache, die Spezifikation findet sich auf [rssboard.org](http://www.rssboard.org/rss-specification)
Eine URL unter der man immer die aktuellen Daten im RSS Format abrufen
kann nennt man auch einen "Feed". Das gängige Icon dafür ist orange:

![RSS Feed Icon](/images/feed-icon.png)

§

<xml caption="Beispiel für RSS">
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>MultiMediaTechnology</title>
    <link>http://multimediatechnology.at</link>
    <description>Das Studium an der FH Salzburg</description>
    <lastBuildDate>Mon, 01 Apr 2013 08:36:25 +0000</lastBuildDate>
    <language>de-DE</language>
    <generator>http://wordpress.org/?v=3.5.1</generator>
    <item>
      <title>Barcamp März 2013: mit WebGL, Redis, ...</title>
      <link>http://multimediatechnology.at/2013/03/23/barcamp-marz-2013-mit-webgl-redis-memcached-riac-multi-user-games/</link>
      <pubDate>Sat, 23 Mar 2013 13:15:52 +0000</pubDate>
      <dc:creator>Brigitte Jellinek</dc:creator>
      <description><![CDATA[<p>Das 5. Barcamp &#8220;The Next Web&#8221; im März 2013 brachte wieder an die 70 Studierende und Fachleute an der FH Salzburg zusammen. Bei Workshops, Vorträgen und einer Ausstellung gab es nicht nur viel zu lernen, sondern auch viel Gelegenheit Leute &#8230;</p>]]></description>
    </item>
    <item>
      <title>Welcome Lecture Zach Liebermann</title>
      <link>http://multimediatechnology.at/2013/03/18/welcome-lecture-zach-liebermann/</link>
      <pubDate>Mon, 18 Mar 2013 10:03:24 +0000</pubDate>
      <dc:creator>Martin Ortner</dc:creator>
      <description><![CDATA[<p>Er ist Inbegriff des kreativen Coders: Der vielfach ausgezeichnete Medienkünstler und Creative Technologist Zach Lieberman. Ende März übernimmt er eine Gastprofessur am Studiengang MultiMediaTechnology. Für seine Zeit in Puch/Urstein plant der New Yorker gemeinsam mit Studierenden die Stadt Salzburg zur &#8230;</p>]]></description>
    </item>
  </channel>
</rss>
</xml>

## Darstellung von RSS

### im Browser

In Firefox werden RSS-Dateien nicht als Code, sondern bereits mit
einem Stylsheet aufbereitet angezeigt. 

![Darstellung von RSS in Firefox](/images/rss-in-firefox.png)

§

Ebenso in Chrome:

![Darstellung von RSS in Chrome](/images/rss-in-chrome.png)

### im Online Feed Reader

Der meist benutzte Feed Reader war [Google Reader](http://www.google.de/reader/view/), er wird im Jahr 2013 eingestellt:

![Darstellung von RSS in Google Reader](/images/rss-in-google-reader.png)

§

[Netvibes](http://www.netvibes.com/) stellt verschiedene Feeds auf einer Art Desktop dar:

![Darstellung von RSS in Netvibes](/images/rss-netvibes.png)

§

[Feedly](http://www.feedly.com/) stellt Feeds in einer Art Online-Magazin dar:

![Darstellung von RSS in Feedly](/images/rss-feedly.png)


## Bedeutung von RSS

Anfang der 2000er waren einzelne Blogs eine wichtige Informationsquelle
im Internet. Es gab noch keine sozialen Netzwerke wie Facebook.  Ein Feed Reader
war damals die beste Möglichkeit viele Blogs zu lesen.

Mit dem Aufkommen der Sozialen Netzwerke wurden die vielen einzelnen Daten-Quellen
durch große, in sich abgeschlossene Daten-Silos abgelöst. Auf der anderen
Seite kam mit Twitter eine schnellere Alternative zu Blogs hinzu.

Mit dem PubSubHubbub Protokoll gibt es seit ca. 2009 die Möglichkeit
Feeds von "Pull" auf "Push" umzustellen, und damit fast in Echtzeit über
neue Daten informiert zu werden. [&rarr; PubSubHubbub](http://en.wikipedia.org/wiki/PubSubHubbub)
