---
title: Barrierefreiheit
order: 10
---


Der deutsche Begriff „Barrierefreiheit“ entspricht dem englischen
Begriff „Accessability“.  Ein Tipp zur Recherche: der englische Begriff wird manchmal als 
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
also ein Rand-Thema, das kann ich ignorieren.   Das wäre aber ein Fehlschluss.

Alle Menschen erleben - wenn nicht permanent, dann vorübergehend - Einschränkungen.

Die Illustration aus dem Microsofts [Inclusive 101 Handbuch](https://www.microsoft.com/design/inclusive/)
stellt das gut dar (verwendet unter CC)


![Inclusive 101 Handbuch](/images/qualitaet/microsoft-situational.png)


Es gibt vielleicht wenig Menschen, die nur einen Arm haben. Aber es gibt
schon sehr viel mehr Menschen die vorübergehend nur einen Arm benutzen können,
z.B. weil ein Arm im Gips ist.  Und es gibt sehr viele Menschen, die gerade
nur einen Arm frei haben.  


## Richtlinien zur Barrierefreiheit im Web


Die Web Accessibility Initiative (WAI) der W3C existiert seit 1997. Sie
hat verscheidene Standards herausgegeben: WCAG, ATAG, UAAG, WAI-ARIA. Für uns
als Web ProgrammiererInnen relevant sind:

* für Webseiten: [Web Content Accessibility Guidelines WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/) für Content - von Text bis HTML Code.
* für Web-Applikationen: [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria-1.1/) für interaktive Appliationen mit viel Javascript.


### Web Content Accessibility Guidelines WCAG 2.0

Diese Guidelines basieren auf [4 Grundprinzipien](https://www.w3.org/TR/UNDERSTANDING-WCAG20/intro.html#introduction-fourprincs-head)

* Wahrnehmbar (Perceivable) - Information und Interface muss so dargestellt werden, dass die BenutzerInnen es wahrnehmen können.
* Bedienbar (Operable) - Interface und Navigation müssen verwendbar sein.
* Verständlich (Understandable) - Information und Interface müssen verständlich sein.
* Robust (Robust) - Der Inhalt muss von verschiedenen Geräten darstellbar sein, nicht nur heute, sondern auch in der Zukunft. Wenn die Technik  weiter entwickelt wird, muss der Inhalt zugänglich bleiben.

WCAG definiert drei "Konformitätsstufen": A, AA, AAA. 




### Gesetzeslage in Österreich

Von der Webseite [Digitales Österreich](https://www.digitales.oesterreich.gv.at/barrierefreiheit), die vom "Bundesministerium für Digitalisierung und Wirtschaftsstandort" betrieben wird:


Öffentliche Stellen in Österreich müssen seit 22. Dezember 2016 WCAG  2.0 '''AA'''-Konform sein.



## Erste Schritte


### Sprache mit `lang`

Das `lang`-Attribut hilft bei der Interpretation der natürlichen Sprache. Das wird
vom Browser selbst verwendet um Anführungszeichen (wenn sie mit dem `q`-Tag gesetzt sind),
und Datumsangaben darzustellen. Ebenso von  Vorleseprogrammen,  Suchmaschinen,  Übersetzungsprogrammen, .... 


Den Standardwert setzt man  im `html`-Tag. In jedem Tag kann man lokal die Sprache ändern:


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


### Landmarks und Überschriften

Einen Überblick über die Inhalte der Seite zu erhalten ist schwierig, wenn man
nicht sehen kann. Screen Reader verwenden die Überschriften und sogenannte Landmarks
um diesen Überblick zu schaffen. 

Damit das funktioniert, muss man die HTML-Tags korrekt verwenden, oder - falls das nicht geht - die
rolle explizit definieren:


| Rolle         | HTML                         | Bedeutung |
|---------------|------------------------------|----|
| Main          | MAIN-Tag                 |  primary content of the page.  | 
| Region        | SECTION-Tag              | a perceivable section that is sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page. |
| Navigation    | NAV-Tag                  | links that are intended to be used for website or page content navigation. |
| Search        | keine HTML-Entsprechung;     | search functionality for content on the website. |
| Banner        | HEADER-Tag               |  the logo or identity of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page |
| Contentinfo   | FOOTER-Tag               | information such as copyrights and links to privacy and accessibility statements.  | 
| Complementary | ASIDE-Tag                | complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content. | 
| Form          | FORM-Tag  | a form when no other named landmark is appropriate (e.g. main or search) |
{: class="table table-condensed table-bordered" style="width:auto"}


<htmlcode>
<form role="search">
  <input type="search" aria-label="search text" size="20">
  <input type="submit" value="Search"">
</form> 
</htmlcode>


Siehe auch [w3c: ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)

### Textformatierung

Die Empfehlung für die Schriftgröße ist mit der immer höheren Auflösung der Ausgabegeräte gewachsen. Im Jahr 2018 verwenden z.B. Die [Zeit Online](https://www.zeit.de/2016/51/bundesteilhabegesetz-inklusion-barrierefreiheit-gleichstellung) 20px, [Medium](https://medium.com/@damianjo/line-spacing-leading-the-way-for-accessibility-d94344b9e26c) 21px, 
[Jeffrey Zeldman](http://www.zeldman.com/2016/12/14/font-size-widgets/) 24px.

Ein Zeilenabstand 1.5x (mit `line-height` festgelegt) erhöht die Lesbarkeit.

Im Web gibt es weiterhin Probleme mit Blocksatz, Flattersatz ("linksbündig") führt zu 
zuverlässigeren Ergebnissen. 

Die Zeilenlänge sollte man von der Schriftgröße abhängig machen, oder gleich die relativ neue
Einheit `ch` (Breite des Zeichens 0) in CSS verwenden, um die maximal zulässige Anzahl von Zeichen in einer Zeile
festzulegen:

<css>
p {
    max-width: 65ch;
}
</css>


## Testing und Werkzeuge

* [Wave Tool](http://wave.webaim.org/extension/) als AddOn für Firefox und Chrome.
* [Axe Core](https://www.axe-core.org/) als AddOn für Firefox und Chrome.
* [tota11y](http://khan.github.io/tota11y/) als bookmarklet
* [pa11y](https://github.com/pa11y/pa11y) Kommandozeilen Programm
* Chrome Developer Tools: Lighthouse



## Vertiefung


* [Design für Alle](https://de.wikipedia.org/wiki/Design_f%C3%BCr_Alle)
* [Udacity Kurs: Web Accessability by Google](https://de.udacity.com/course/web-accessibility--ud891)
* [YouTube: a11ycats](https://www.youtube.com/watch?v=fGLp_gfMMGU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)
* Kalbag, Laura. Accessibility for everyone.  A Book Apart, 2017. ISBN-13: 978-1937557614.
* [Accessability Weekly, Newsletter](https://a11yweekly.com/)
* [What's new in WCAG 2.1](http://adrianroselli.com/2017/08/whats-new-in-wcag-2-1.html)
* [Marcy Sutton: Radically Accessible Internet Applications](https://marcysutton.com/talk/radically-accessible-internet-applications-beyond-tellerrand/)

