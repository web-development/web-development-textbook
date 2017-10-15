---
title: Formulare
order: 10
---
Mit Ihren bisherigen Kenntnissen können Sie schon Webseiten mit einfachen
Interaktions-Möglichkeiten gestalten: mit Links ermöglichen Sie der LeserIn die
Navigation durch das Web. Formulare ermöglichen mehr Interaktion – aber immer
noch in einem sehr strengen, sehr strukturierten Rahmen. Zwei
typische Anwendungsgebiete für Web-Formulare sind: das Eingabeformular der
Suchmaschine Google und ein Bestellformular.
 
![Abbildung 44: Formulare in Webseiten](/images/formulare/formulare.png)

## Tags für Formulare

Mit den  HTML-Tags `form`, `input`, `textarea`, `option`, `select` werden
Formulare aufgebaut. Hier der Code für ein ein [einfaches Beispiel](/images/form.html):

<htmlcode caption="Einfaches Formular">
    <form method="get" action="bestellung.php">
      Bitte schicken Sie den Newsletter an die E-Mail Adresse:
      <input type="text"   name="email">
      <input type="submit" value="Ja, ich will!">
    </form>
</htmlcode>

Der `form`-Tag ist „unsichtbar“ und dient nur dazu, die anderen Eingabefelder zu bündeln. Im action-Attribut des `form`-tag wird angegeben, an welche URL die Daten zur Verarbeitung geschickt werden. 

Im Browser sieht das oben gezeigte Formular so aus:


![Abbildung 45: Darstellung eines Web-Formulars im Browser](/images/image176.png)

## Eingabefelder

Innerhalb des  `form`-Tag bauen Sie das Formular aus verschiedenen Eingabeelementen und den „normalen“ HTML-Tags auf. 


## Text-Eingabefelder

Verschiedenen Arten von Text-Eingabefeldern.

|Textfeld                 |`<input type="text" name="mail">`|<input type="text" name="mail">|
|Textfeld, E-Mail         |`<input type="email" name="mail2">`|<input type="email" name="mail2">|
|Passwort-Feld:           |`<input type="password" name="meinpasswort">` |<input type="password" name="meinpasswort"> |
|mehrzeiliges Textfeld    |`<textarea name="zitat">In a hole in the ground there lived a Hobbit.  </textarea>`|<textarea name="zitat">In a hole in the ground there lived a Hobbit.  </textarea>|
{: class="table table-condensed table-bordered" style="width:auto"}

Achtung: das Passwort-Feld schützt nur vor neugierigen Blicken auf den Monitor.
Die eingegebenen Daten werden dann genau so übertragen wie aus alle anderen
Eingabefeldern - normalerweise unverschlüsselt.

## Attribute für Text-Eingabefelder

|mit Default-Wert|`<input type="text" name="vorname" value="Lara">`|<input type="text" name="vorname" value="Lara">|
|muss eingegeben werden|`<input type="email" name="nachname" required>`|<input type="email" name="nachname" required>
|mit Placeholder|`<input placeholder="ich@some.net">`|<input type="email" name="mail" placeholder="ich@some.net">
|mit Eingabeprüfung (siehe [html5pattern](http://html5pattern.com/)) |`<input pattern=".*@fh-salzburg\.ac\.at">`|<input pattern=".*@fh-salzburg\.ac\.at">
{: class="table table-condensed table-bordered" style="width:auto"}


## Ja/Nein Frage

Für einzelne Fragen die mit Ja oder Nein zu beantworten sind wird das Eingabe-Element „checkbox“ verwendet

<htmlcode caption="Checkbox für Ja/Nein Frage">
<label><input type="checkbox" name="schlag"> mit Schlagobers</label>
</htmlcode>

![screenshot](/images/image186.png)

## Auswahl

Für Fragen, bei denen eine von mehreren vorgegebenen Antworten möglich sein soll gibt es verschiedene Eingabeelemente.

§
Radiobuttons (die zusammen gehören) müssen denselben `name` haben.
Hier ist es wichtig die Beschriftung die zum jeweiligen Button gehört
mit dem `label` Tag zu markieren - das erleichtert auch die Eingabe.

<htmlcode caption="Radiobuttons">
<label><input type="radio" name="size" value="XL">XL</label>
<label><input type="radio" name="size" value="L">L</label>
<label><input type="radio" name="size" value="M">M</label>
<label><input type="radio" name="size" value="S" checked>S</label>
</htmlcode>

![screenshot](/images/image188.png)

§

Ein Menü ist platzsparend:

<htmlcode caption="Menü mit select und option">
<select name="size2">
  <option>XL</option>
  <option selected>L</option>
  <option>M</option>
  <option>S</option>
</select>
</htmlcode>

![screenshot](/images/image190.png)

§

Achtung: beim erstellen des Menüs muss man jede möglich Antwort bedenken!

<htmlcode caption="Menü mit „leer“- Auswahl">
<select name="size3">
  <option>---Bitte Auswählen---</option>
  <option>XL</option>
  <option>L</option>
  <option>M</option>
  <option>S</option>
</select>
</htmlcode>

![screenshot](/images/image192.png)

§

Die Mehrfach-Auswahl erfolgt mit dem Drücken der Steuerungs-Taste:

<htmlcode caption="Liste - ermöglicht Mehrfach-Auswahl">
<select name="html" size="4" multiple>
  <option>im Code</option>
  <option>Dreamweaver</option>
  <option>GoLive</option>
  <option>Frontpage</option>
</select>
</htmlcode>

![screenshot](/images/image194.png)

## Spezialisierte Eingabefelder

Mit HTML5 wurden neue Eingeabefelder eingeführt, die aber noch nicht von allen
Browsern unterstützt werden. (Mit Hilfe von
[Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)
kann man sie aber auf jeden Fall schon benutzen.)

|Datum|`<input type="date" min="2010-08-01" max="2011-08-31" value="2010-08-14">`|<input type="date" min="2010-08-01" max="2011-08-31" value="2010-08-14">|
|Range|`<input type="range" min="0" max="50" value="10">`|<input type="range" min="0" max="50" value="10">|
|Number|`<input type="number" step="1" min="-5" max="10" value="0">`|<input type="number" step="1" min="-5" max="10" value="0">|
{: class="table table-condensed table-bordered" style="width:auto"}

![screenshot](/images/special.png)

## Absenden

Jedes Formular braucht einen Absende-Button

<htmlcode caption="Absende-Button">
<input type="submit" value="drück mich!">
</htmlcode>

![screenshot](/images/image196.png)

Neben dem Absende-Button gibt es noch andere Methoden wie ein Formular „abgesendet“ werden kann: Falls das Formular nur ein einziges Text-Eingabefeld hat, kann man in diesem Feld auf ENTER drücken um das Formular zu senden. Wenn das Formular ein Bild-Feld enthält (siehe unten) veranlasst ein Klick auf das Bild das Einsenden. 

## Zurücksetzen? Nein Danke!

<htmlcode caption="Zurück: bitte nicht verwenden">
<input type="reset"  value="Zurücksetzen">
</htmlcode>

![screenshot](/images/image198.png)

Den Zurücksetzen Button sollten Sie nur sehr selten einsetzen. Warum? Denken Sie an Ihre eigene Erfahrung mit Web-Formularen zurück: Wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „super, alles gelöscht, genau das wollte ich“, und wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „Mist, das war ja gar nicht der Absende-Button, jetzt muss ich alles noch mal tippen.“

## Label

Bisher haben wir nur die Eingabefelder selbst betrachtet. „Rundherum“ verwendet
man alle bisher gelernten HTML-Elemente. So wäre es z.B. möglich, die
Beschriftung einfach als Text neben das Eingabefeld zu stellen:

<htmlcode caption="Formularfeld ohne Label">
E-Mail <input type="text" name="mail" placeholder="ihre e-mail">
</htmlcode>

Damit ist aber nicht erkennbar, welche Beschriftung (vorher, nachher, weiter oben, weiter unten) zu welchem Eingabefeld gehört. Dass dieser Zusammenhang klar ist (auch für screen reader etc) stellt man mit dem `label`-Tag sicher:

<htmlcode caption="Formularfeld mit Label">
<label>E-Mail <input type="text" name="mail" placeholder="ihre e-mail"></label>
</htmlcode>

Falls der Beschriftungs-Tag weiter entfernt ist kann der label auf die ID des Eingabefeldes verweisen:

<htmlcode caption="Formularfeld mit entferntem Label">
<label for="mail">E-Mail</label> 
....
<input type="text" name="mail" id="mail" placeholder="e-mail adresse">
</htmlcode>

## Weitere Eingabefelder

Noch mehr Eingabefelder, die eher selten gebraucht werden.


|Unsichtbares = Verstecktes Feld |`<input type="hidden" name="source" value="wikipedia">`|
|Button ohne Auftrag, für Javascript-Programme|`<input type="button" value="Extrafenster" onclick="...">`|
|Bildfeld, liefert angeklickte x+y Koordinaten.|`<input type="image" name="position" src="austria.gif">`|
|Datei-Upload*|Wählen Sie ein Bild aus: `<input type="file" name="bilddatei">`|
{: class="table table-condensed table-bordered" style="width:auto"}

Der Datei-Upload funktioniert nur wenn die Formular-Daten mit Methode POST und
speziellem enctype an den Webserver geschickt werden.

## Ordnung

<htmlcode caption="Visuelle Zusammenfassung mehrer Felder: fieldset + legend">
<fieldset>
  <legend>Kreditkarte</legend>
  <input name="nr" placeholder="0000 0000 0000 0000">
  <label><input type="radio" name="kk" value="Master"> Master</label>
  <label><input type="radio" name="kk" value="Visa"> Visa </label>
</fieldset>
</htmlcode>

![screenshot](/images/fieldset.png)

## Links


* [html5pattern](http://html5pattern.com/) - bewährte Pattern für die Eingabeprüfung
