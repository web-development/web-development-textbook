---
title: Formulare
order: 10
---

Mit Ihren bisherigen Kenntnissen können Sie schon Webseiten mit einfachen
Interaktions-Möglichkeiten gestalten: mit **Links** ermöglichen Sie der LeserIn die
Navigation durch das Web.

Formulare ermöglichen mehr Interaktion – aber immer
noch in einem sehr strengen, sehr strukturierten Rahmen.

§

Zwei
typische Anwendungsgebiete für Web-Formulare sind: die Suche in Amazon und ein Bestellformular.

![Abbildung 44: Formulare in Webseiten](/images/formulare/formulare.png)

## Tags für Formulare

Mit den HTML-Tags `form`, `input`, `textarea`, `option`, `select` werden
Formulare aufgebaut. Hier ein einfaches Formular und der HTML Code dafür:

<htmlcode caption="Einfaches Formular">
<form method="get" action="bestellung.php">
  Bitte schicken Sie den Newsletter an die E-Mail Adresse:
  <input type="email"  name="mail">
  <input type="submit" value="Ja, ich will!">
</form>
</htmlcode>

Der `form`-Tag ist „unsichtbar“ und dient nur dazu, die anderen Eingabefelder zu bündeln. Im action-Attribut des `form`-tag wird angegeben, an welche URL die Daten zur Verarbeitung geschickt werden.

§

So sieht das Formular im Browser aus:

<form method="get" action="/images/formulare/submitted.html">
  Bitte schicken Sie den Newsletter an die E-Mail Adresse:
  <input type="email"  name="mail">
  <input type="submit" value="Ja, ich will!">
</form>

## Eingabefelder

Innerhalb des `form`-Tag bauen Sie das Formular aus verschiedenen Eingabeelementen und den „normalen“ HTML-Tags auf.

## Text-Eingabefelder

Verschiedenen Arten von Text-Eingabefeldern.

|Textfeld |`<input type="text" name="vorname">`|<input type="text" name="vorname">|
|E-Mail |`<input type="email" name="mail">`|<input type="email" name="mail">|
|Telefonnummer |`<input type="tel" name="tel">`|<input type="tel" name="tel">|
|URL |`<input type="url" name="url">`|<input type="url" name="url">|
|Passwortfeld |`<input type="password" name="meinpasswort">` |<input type="password" name="meinpasswort"> |
{: class="table table-condensed table-bordered" style="width:auto"}

Achtung: das Passwort-Feld schützt nur vor neugierigen Blicken auf den Monitor.
Die eingegebenen Daten werden dann genau so übertragen wie aus alle anderen
Eingabefeldern - normalerweise unverschlüsselt.

Für größere Mengen Text gibt es `textarea`:

<htmlcode>
<textarea name="zitat">In a hole in the ground
there lived a Hobbit. </textarea>
</htmlcode>

<textarea name="zitat">In a hole in the ground
there lived a Hobbit. </textarea>

## Attribute für Text-Eingabefelder

|mit Default-Wert|`<input type="text" name="vorname" value="Lara">`|<input type="text" name="vorname" value="Lara">|
|mit Placeholder|`<input placeholder="ich@some.net" type="email">`|<input type="email" name="mail" placeholder="ich@some.net">
|mit Auto-Vervollständigung|`<input type="email" autocomplete="email">`|<input type="email" name="mail"  autocomplete="email">
|muss eingegeben werden|`<input type="email" name="nachname" required>`|<input type="email" name="nachname" required>
|mit Eingabeprüfung (siehe [html5pattern](http://html5pattern.com/)) |`<input pattern=".*@fh-salzburg\.ac\.at" type="email">`|<input pattern=".*@fh-salzburg\.ac\.at">
{: class="table table-condensed table-bordered" style="width:auto"}

Der **Default Wert** ist ein echter Wert, der beim Einsenden des Formulars gesendet wird.
Der **Placeholder** hingegen wird nur angezeigt, gilt aber nicht als eingegeben Daten.

Die **Auto-Vervollständigung** teilt dem Browser mit welche (alten) Eingabewerte in Frage kommen. Es gibt viele [mögliche Werte](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values).

Die Bedingungen **required** und **pattern** müssen erfüllt sein, sonst kann das
Formular gar nicht abgesendet werden.

## Ja/Nein Frage

Für einzelne Fragen die mit Ja oder Nein zu beantworten sind wird das Eingabe-Element „checkbox“ verwendet

<htmlcode caption="Checkbox für Ja/Nein Frage">
<label><input type="checkbox" name="schlag"> mit Schlagobers</label>
</htmlcode>

<form  action="/images/formulare/submitted.html"><label><input type="checkbox" name="schlag"> mit Schlagobers</label></form>

## Auswahl

Für Fragen, bei denen eine von mehreren vorgegebenen Antworten möglich sein soll gibt es verschiedene Eingabeelemente.

§

**Radiobuttons** (die zusammen gehören) müssen denselben `name` haben.
Hier ist es wichtig die Beschriftung die zum jeweiligen Button gehört
mit dem `label` Tag zu markieren - das erleichtert auch die Eingabe.

<htmlcode caption="Radiobuttons">
<label><input type="radio" name="size" value="XL"> XL</label>
<label><input type="radio" name="size" value="L"> L</label>
<label><input type="radio" name="size" value="M"> M</label>
<label><input type="radio" name="size" value="S" checked> S</label>
</htmlcode>

<form  action="/images/formulare/submitted.html">
<label><input type="radio" name="size" value="XL"> XL</label>
<label><input type="radio" name="size" value="L"> L</label>
<label><input type="radio" name="size" value="M"> M</label>
<label><input type="radio" name="size" value="S" checked> S</label>
</form>

§

Ein Menü mit `select` und `option` ist im Vergleich zu Radiobuttons platzsparend,
hat aber den Nachteil dass man nicht alle Optionen sofort sieht:

<htmlcode caption="Menü mit select und option">
<select name="size2">
  <option>XL</option>
  <option selected>L</option>
  <option>M</option>
  <option>S</option>
</select>
</htmlcode>

<form  action="/images/formulare/submitted.html">
<select name="size2">
  <option>XL</option>
  <option selected>L</option>
  <option>M</option>
  <option>S</option>
</select>
</form>

§

Achtung: beim Erstellen des Menüs muss man jede möglich Antwort bedenken. Auch die Möglichkeit keine Antwort zu geben:

<htmlcode caption="Menü mit „leer“- Auswahl">
<select name="size3">
  <option>---Bitte Auswählen---</option>
  <option>XL</option>
  <option>L</option>
  <option>M</option>
  <option>S</option>
</select>
</htmlcode>

<form  action="/images/formulare/submitted.html">
<select name="size3">
  <option>---Bitte Auswählen---</option>
  <option>XL</option>
  <option>L</option>
  <option>M</option>
  <option>S</option>
</select>
</form>

§

Die Mehrfach-Auswahl in einem Menü mit `select` und `option`
erfolgt mit dem Drücken der Steuerungs-Taste.

<htmlcode caption="Liste - ermöglicht Mehrfach-Auswahl">
<select name="htmleditor" multiple>
  <option>vim</option>
  <option>PHPStorm</option>
  <option>Atom</option>
  <option>Sublime</option>
</select>
</htmlcode>

<form  action="/images/formulare/submitted.html">
<select name="htmleditor" multiple>
  <option>vim</option>
  <option>PHPStorm</option>
  <option>Atom</option>
  <option>Sublime</option>
</select>
</form>

## Textfelder mit Vorschlägen

Das Textfeld mit `datalist` kombiniert die Bequemlichkeit
eines Menüs mit der Flexiblität eines Textfeldes: Man bekommt
Vorschläge angeboten, kann aber auch etwas eintippen
was nicht in der `datalist` angeführt ist. Siehe [Demo](/images/formulare/datalist.html).

<htmlcode caption="Textfeld mit Datalist">
<input id="city" placeholder="Name" list="list-of-cities">
<datalist id="list-of-cities">
    <option value="Salzburg">
    <option value="Wien">
    <option value="München">
    <option value="Innsbruck">
    <option value="Linz">
</datalist>
</htmlcode>

## Spezialisierte Eingabefelder

|Farbe|`<input type="color" name="farbe">`|<input type="color" name="farbe">|
|Datum|`<input type="date" min="2010-08-01" max="2011-08-31" value="2010-08-14">`|<input type="date" min="2010-08-01" max="2011-08-31" value="2010-08-14">|
|Uhrzeit|`<input type="time" min="9:00" max="18:00" value="12:30">`|<input type="time" min="9:00" max="18:00" value="12:30">|
|Range|`<input type="range" min="0" max="50" value="10">`|<input type="range" min="0" max="50" value="10">|
|Number|`<input type="number" step="1" min="-5" max="10" value="0">`|<input type="number" step="1" min="-5" max="10" value="0">|
{: class="table table-condensed table-bordered" style="width:auto"}

## Absenden

Jedes Formular braucht einen Absende-Button

<htmlcode caption="Absende-Button">
<input type="text" name="bestellung" value="100 Stück Fidget Spinner">
<input type="submit" value="Bestellung Absenden">
</htmlcode>

<form  action="/images/formulare/submitted.html">
<input type="text"  name="bestellung" value="100 Stück Fidget Spinner">
<input type="submit" value="Bestellung Absenden">
</form>

§

Neben dem Absende-Button gibt es noch andere Methoden wie ein Formular „abgesendet“ werden kann:

- Falls das Formular nur ein einziges Text-Eingabefeld hat, kann man in diesem Feld auf **ENTER** drücken um das Formular zu senden.
- Wenn das Formular ein Bild-Feld enthält (siehe unten) veranlasst ein Klick auf das Bild das Einsenden.

## Zurücksetzen? Nein Danke!

Den Zurücksetzen Button sollten Sie nur sehr selten einsetzen.

<htmlcode caption="Zurück: bitte nicht verwenden">
<input type="text"  name="bestellung" value="100 Stück Fidget Spinner">
<input type="reset"  value="Zurücksetzen">
</htmlcode>

<form  action="/images/formulare/submitted.html">
<input type="text"  name="bestellung" value="100 Stück Fidget Spinner">
<input type="reset"  value="Zurücksetzen">
</form>

Warum? Denken Sie an Ihre eigene Erfahrung mit Web-Formularen zurück: Wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „super, alles gelöscht, genau das wollte ich“, und wie oft haben Sie auf einen Zurücksetzen Button gedrückt und dann gedacht „Mist, das war ja gar nicht der Absende-Button, jetzt muss ich alles noch mal tippen.“

## Label

Bisher haben wir nur die Eingabefelder selbst betrachtet. „Rundherum“ verwendet
man alle bisher gelernten HTML-Elemente. So wäre es z.B. möglich, die
Beschriftung einfach als Text neben das Eingabefeld zu stellen:

<htmlcode caption="Formularfeld ohne Label">
E-Mail <input type="text" name="mail" placeholder="ihre e-mail">
</htmlcode>

Damit ist aber nicht erkennbar, welche Beschriftung (vorher, nachher, weiter oben, weiter unten) zu welchem Eingabefeld gehört.

§

Den Zusammenhang zwischen Eingabefeld und Beschriftung stellt man mit dem `label`-Tag her:

<htmlcode caption="Formularfeld mit Label">
<label>E-Mail <input type="text" name="mail"></label>
</htmlcode>

Falls der Beschriftungs-Tag weiter entfernt ist kann der label auf die **id** des Eingabefeldes verweisen:

<htmlcode caption="Formularfeld mit entferntem Label">
<label for="mail">E-Mail</label>
....
<input type="text" name="mail" id="mail">
</htmlcode>

## Weitere Eingabefelder

Noch mehr Eingabefelder, die eher selten gebraucht werden.

|Unsichtbares = Verstecktes Feld |`<input type="hidden" name="source" value="wikipedia">`|
|Button ohne Auftrag, für Javascript-Programme|`<input type="button" value="Extrafenster" onclick="...">`|
|Bildfeld, liefert angeklickte x+y Koordinaten.|`<input type="image" name="position" src="austria.gif">`|
|Datei-Upload\*|Wählen Sie ein Bild aus: `<input type="file" name="bilddatei">`|
{: class="table table-condensed table-bordered" style="width:auto"}

Der Datei-Upload funktioniert nur wenn die Formular-Daten mit Methode POST und
speziellem enctype an den Webserver geschickt werden. Das werden wir später im Kapitel [PHP und Datei Upload](/php/datei-upload/) behandeln.

## Ordnung

Siehe [Demo](/images/formulare/fieldset.html).

<htmlcode caption="Visuelle Zusammenfassung mehrer Felder: fieldset + legend">
<fieldset>
<legend>Kreditkarte</legend>
<input name="nr" placeholder="0000 0000 0000 0000">
<label><input type="radio" name="kk" value="Master"> Master</label>
<label><input type="radio" name="kk" value="Visa"> Visa</label>
</fieldset>
</htmlcode>

