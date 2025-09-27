---
title: Barrierefreiheit
order: 10
---

Der deutsche Begriff „Barrierefreiheit“ entspricht dem englischen
Begriff „Accessability“. Ein Tipp zur Recherche: der englische Begriff wird manchmal als
a11y abgekürzt - a, gefolgt von 11 Buchstaben, gefolgt von y.

Barrierefreiheit ist ein Thema das
von Stadtplanung und Architektur bis zur Gestaltung einzelner
Produkte und Dienstleistungen viele Fachgebiete betrifft.

Als WebprogrammierInnen liegt es in unserer Verantwortung
Webseiten und Webapplikationen barrierefrei zu gestalten:

„**Barrierefreies Internet** sind Web-Angebote, die von
allen Nutzern unabhängig von ihren
Einschränkungen oder technischen Möglichkeiten
uneingeschränkt ( barrierefrei ) genutzt werden
können“ - [Wikipedia](https://de.wikipedia.org/wiki/Barrierefreies_Internet)

## Alle profitieren von Barrierefreiheit

Nun könnte man meinen: es gibt nur wenige behinderte Menschen; Barrierefreiheit ist
also ein Rand-Thema, das kann ich ignorieren. Das wäre aber ein Fehlschluss.

Alle Menschen erleben - wenn nicht permanent, dann vorübergehend - Einschränkungen.

Die Illustration aus dem Microsofts [Inclusive 101 Handbuch](https://www.microsoft.com/design/inclusive/)
stellt das gut dar (verwendet unter CC)

![Inclusive 101 Handbuch](/images/qualitaet/microsoft-situational.png)

Es gibt vielleicht wenig Menschen, die nur einen Arm haben. Aber es gibt
schon sehr viel mehr Menschen die vorübergehend nur einen Arm benutzen können,
z.B. weil ein Arm im Gips ist. Und es gibt sehr viele Menschen, die gerade
nur einen Arm frei haben.  Wie zum Beispiel Scott Hanselman in [diesem Video](https://www.youtube.com/watch?v=fjE4I1XNzRs) zur Benutzung eines Xbox Adaptive Controllers.

## Richtlinien zur Barrierefreiheit im Web

Die Web Accessibility Initiative (WAI) der W3C existiert seit 1997. Sie
hat verscheidene Standards herausgegeben: WCAG, ATAG, UAAG, WAI-ARIA. Für uns
als Web ProgrammiererInnen relevant sind:

- für Webseiten: [Web Content Accessibility Guidelines WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/) für Content - von Text bis HTML Code.
- für Web-Applikationen: [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria-1.1/) für interaktive Appliationen mit viel Javascript.

### Web Content Accessibility Guidelines WCAG 2.0

Diese Guidelines basieren auf [4 Grundprinzipien](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head)

- Wahrnehmbar (Perceivable) - Information und Interface muss so dargestellt werden, dass die BenutzerInnen es wahrnehmen können.
- Bedienbar (Operable) - Interface und Navigation müssen verwendbar sein.
- Verständlich (Understandable) - Information und Interface müssen verständlich sein.
- Robust (Robust) - Der Inhalt muss von verschiedenen Geräten darstellbar sein, nicht nur heute, sondern auch in der Zukunft. Wenn die Technik weiter entwickelt wird, muss der Inhalt zugänglich bleiben.

WCAG definiert drei "Konformitätsstufen": A, AA, AAA.

§

Zum Einstieg eine Illustration von Intopia dazu:

![](/images/qualitaet/map-intopia.png)

Siehe auch das [ausführliche Poster](/images/qualitaet/2019-WCAG2.1-Map-Intopia-plus-reading-order.pdf)
Damit kann man sich einen Überblick verschaffen, bevor man [die einzelnen Guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv.html) durcharbeitet.


### Gesetzeslage in Österreich

Drei relevante Gesetze:

* Webzugänglichkeistgesetz 2018 - für öffentliche Stellen
* Bundes-Behindertengleichstellungsgesetz - auch privatwirtschaftlicher Bereich
* Barrierefreiheitsgesetz [2023 beschlossen](https://www.usp.gv.at/gesetzliche-neuerungen/Bundesgesetzblatt/barrierefreiheitsgesetz.html)

Das Barrierefreiheitsgesetz wird Juni 2025 vollständig gelten und betrifft Alle:

* Firmen die am EU Markt anbieten ab 10 Mitarbeitende und/oder 2 Mio € Jahresumsatz
* Beweislast beim Unternehmen, Frist für Korrekturen oder vom Markt zu nehmen
* Strafen im 5-stelligen € Bereich
* Betrifft Produkte, Dienstleistungen und Personenverkehrsdienste: Automaten, Smartphonse, E-Book-Lesegeräte, Online-Shops, Notrufsysteme, ....
* Digitale Dienste benötigen eine Barrierefreiheitserklärung, [Beispiel](https://www.salzburg.gv.at/dienststellen/digitale-dienste/barrierefrei/erklaerung-barrierefreiheit)


## Erste Schritte

### So einfach wie möglich

Wir lernen HTML, CSS, JavaScript in dieser Reihenfolge - das ist auch
die Reihenfolge in der wir es anwenden:
Wenn ein Effekt mit HTML, CSS oder JavaScript erzieht werden kann, dann
verwende immer die einfachste Technologie.

Folgende Folie aus eine Votragt von [Martin Splitt](https://twitter.com/g33konaut)
zeigt verschiedene Arten einen Link zu bauen.  Die einfachste Art ist die Beste!

![Beispiel für barrierefreies Web - lieber ein link mit href als mit JavaScript](/images/qualitaet/accessible-link.jpg)

### Sprache mit `lang`

Das `lang`-Attribut hilft bei der Interpretation der natürlichen Sprache. Das wird
vom Browser selbst verwendet um Anführungszeichen (wenn sie mit dem `q`-Tag gesetzt sind),
und Datumsangaben darzustellen. Ebenso von Vorleseprogrammen, Suchmaschinen, Übersetzungsprogrammen, ....

Den Standardwert setzt man im `html`-Tag. In jedem Tag kann man lokal die Sprache ändern:

<htmlcode>
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Lieblingsbücher</title>
</head>
<body>
    <h1>Meine Lieblingsbücher</h1>

    <p lang="en">Neal Stephenson: <q>Diamond Age</q></p>

</body>
</html>
</htmlcode>

Siehe auch [w3c: Why use the lang attribute?](https://www.w3.org/International/questions/qa-lang-why)


### Semantisches HTML

Die HTML-Tags die wir kennen gelernt haben geben dem Dokument nicht nur
eine Struktur, sondern verleihen auch eine Bedeutung. Diese Bedeutung
sollten wir immer nutzen:

* für einen Link?  Verwende `<a href="https://.....">`, nicht `<span>` oder `<div>`
* für eine Liste? Verwende `<li>`, nicht `<span>` oder `<div>`
* für eine Überschrift? Verwende `<h1>`, nicht `<strong>` oder `<div>`
* für einen Absend-Button? verwende `<input type="submit">`, nicht `<span>` oder `<div>`


### Überschriften und Landmarks

Einen Überblick über die Inhalte der Seite zu erhalten ist schwierig, wenn man
nicht sehen kann. Screen Reader verwenden die Überschriften und sogenannte Landmarks
um diesen Überblick zu schaffen.

Die Überschrift `h1` sollte nur einmal in der Seite verwendet werden und
die gesamte Seite beschreiben.  Die weiteren Überschriften `h2`, `h3`, ...
werden für die weiteren Gliederungsebenen verwendet.

Für Bereiche der Seite die eine wichtige Rolle spielen (Navigation, Suche, Header, Main, Section, ...) sollte
man die entsprechenden semantischen HTML-Tags verwenden.

Falls das nicht funktioniert kann man die
Rolle explizit mit dem `role` Attribut definieren:

| HTML-Tag                  | Role-Attribut           | Bedeutung                                                                                                                                                                      |
|---------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| main                      | main           | primary content of the page.                                                                                                                                                   |
| section                   | region         | a perceivable section that is sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.  |
| nav                       | navigation     | links that are intended to be used for website or page content navigation.                                                                                                     |
| keine HTML-Entsprechung;  | search         | search functionality for content on the website.                                                                                                                               |
| header                    | banner         | the logo or identity of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page                                                       |
| footer                    | contentinfo    | information such as copyrights and links to privacy and accessibility statements.                                                                                              |
| aside                     | complementary  | complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.                                        |
| form                      | form           | a form when no other named landmark is appropriate (e.g. main or search)                                                                                                       |
{: class="table table-condensed table-bordered" style="width:auto"}

<htmlcode>
<form role="search">
  <input type="search" aria-label="search text" size="20">
  <input type="submit" value="Search"">
</form>
</htmlcode>

Siehe auch [w3c: ARIA Landmarks Example](https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/search.html)

### Textformatierung

Die Empfehlung für die Schriftgröße ist mit der immer höheren Auflösung der Ausgabegeräte gewachsen. Im Jahr 2022 verwenden z.B.
[Smashing Magazin](https://www.smashingmagazine.com/2017/12/building-better-ui-designs-layout-grids/)  21px, [Medium](https://medium.com/@damianjo/line-spacing-leading-the-way-for-accessibility-d94344b9e26c) 20px,
[Jeffrey Zeldman](http://www.zeldman.com/2016/12/14/font-size-widgets/) 21px.

Ein Zeilenabstand 1.5x (mit `line-height` festgelegt) erhöht die Lesbarkeit.

Im Web gibt es weiterhin Probleme mit Blocksatz. Flattersatz ("linksbündig") führt zu
zuverlässigeren Ergebnissen.

Wie breit eine Spalte Text ist beeinflusst auch die Lesbarkeit. Man könnte dafür die Einheit `ch` (Breite des Zeichens 0)  verwenden,
um die maximal zulässige Anzahl von Zeichen in einer Zei festzulegen:

<css>
p {
    max-width: 65ch;
}
</css>

### Alternativtext für Bilder

Wenn ein Bild nur **dekorativ** ist, sollte man ein leeres alt-Attribut setzen:

<htmlcode>
<img src="zierleiste.png" alt="">
</htmlcode>

Bilder die **Information** liefern brauchen ein kurzes alt-Attribut.

<htmlcode>
<img src="fhs.png" alt="FH Salzburg in Puch Urstein, Ansicht des Haupteingangs.">
</htmlcode>

Falls das Bild als **Link** dient, ist es wichtiger das Link-Ziel zu beschreiben:

<htmlcode>
<a href="https://www.fh-salzburg.ac.at/"><img src="fhs.png" alt="Link: Homepage der FH Salzburg"></a>
</htmlcode>


Längere Informationen kann man in eine **Bildunterschrift** geben, wo sie Allen zugute kommen:

<htmlcode>
<figure>
  <img src="anreise.png" alt="Landkarte">
  <figcaption>
    Anreise per S-Bahn von der Stadt Salzburg: S3 bis Haltestelle
    Salzburg Süd. Zum Bahnsteig parallel führt der Salzachweg.
    Folgen sie diesem Weg bis ca. 3 Minuten lang zur
    Kreuzung mit der Austraße. Wenn Sie die Austraße überqueren
    landen sie direkt am Eingang zum Gasthaus.
  </figcaption>
</figure>
</htmlcode>


###  Farben und Kontraste

Farbenblindheit und Fabenfehlsichtigkeit betrifft ca. jede 20. Person.  Männer sind - aus genetischen Gründen
- häufiger betroffen als Frauen.  Deswegen sollte man vermeiden, eine Information *nur* mit Farbe zu vermitteln:

Schlechtes Beispiel: 🟢  vs. 🔴

Gutes Beispiel:  ✅  vs.  ❌


Für die Lesbarkeit von Text ist der Kontrast zwischen Text und Hintergrund wichtig. Die WCAG 1.4.3
schreibt ein Kontrastverhältnis von mindestens 4,5:1 vor.  Das kann man einfach überprüfen mit dem
[Contrast Checker](https://webaim.org/resources/contrastchecker/)


## Ist das Alles?

Nein, das ist noch nicht Alles was man über Accessability wissen sollte.  Aber
es ist ein guter Start.  Das Web macht - ohne dass wir etwas tun müssen - schon vieles richtig.


## Testing und Werkzeuge

- [Wave Tool](http://wave.webaim.org/extension/) als AddOn für Firefox und Chrome.
- [Axe Core](https://www.axe-core.org/) als AddOn für Firefox und Chrome.
- [tota11y](http://khan.github.io/tota11y/) als bookmarklet
- [pa11y](https://github.com/pa11y/pa11y) Kommandozeilen Programm
- Chrome Developer Tools: Lighthouse

## Vertiefung

- [Alt Text as Poetry](https://alt-text-as-poetry.net/)
- [Accessibility Lecture](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/1-getting-started-lessons/3-accessibility) in a Microsoft Curriculum
- [Design für Alle](https://de.wikipedia.org/wiki/Design_f%C3%BCr_Alle)
- [edx Kurs: Introduction to Web Accessibility by W3C](https://www.edx.org/course/web-accessibility-introduction)
- [Udacity Kurs: Web Accessability by Google](https://de.udacity.com/course/web-accessibility--ud891)
- [YouTube: a11ycasts](https://www.youtube.com/watch?v=srLRSQg6Jggg)
- Kalbag, Laura. Accessibility for everyone. A Book Apart, 2017. ISBN-13: 978-1937557614.
- [Accessability Weekly, Newsletter](https://a11yweekly.com/)
- [Adrian Rosellis Blog](https://adrianroselli.com/)
- [Marcy Sutton: Radically Accessible Internet Applications](https://marcysutton.com/talk/radically-accessible-internet-applications-beyond-tellerrand/)
- [19 WAI-ARIA attributes that every web developer should know](https://www.davidmacd.com/blog/wai-aria-accessbility-for-average-web-developers.html)
- [The Accessibility Tree](https://whatsock.com/training/)
- [Demystifying WAI-ARIA](https://www.davidmacd.com/blog/wai-aria-accessbility-for-average-web-developers.html)
- [How to write better alt-text descriptions for accessibility](https://bighack.org/how-to-write-better-alt-text-descriptions-for-accessibility/)
- [Accessability im Style Guide von Github](https://primer.style/accessibility/semantic-html/)
