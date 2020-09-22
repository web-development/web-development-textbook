---
title: Formular und Javascript
order: 40
---

Am Beispiel eines Formular werden wir nun einfaches Javascript kennen lernen. Die Details von Javascript werden in den nächsten Kaptieln, hier geht es nur um ein erstes Kennenlernen.

Javascript Einbetten
---------------------
Javascript kann innerhalb des `<script>`-Tags irgendwo in den HTML-Code eingefügt werden.

<htmlcode caption="Berechnungen in Javascript, in einem script-Tag">
<h1>Hallo Welt</h1>
<script>
      var pi,r,a;
      pi = 3.141;
      r = 2;
      a = r * r * pi;
</script>
</htmlcode>

Ohne Output merkt man aber gar nichts davon, das dieses Programm läuft.

### Konsole

In den Developer Tools von Firefox kann man die Variablen auslesen:


![Mit Firefox Developer Tools den Wert einzelnen Javascript-Variablen  auslesen](/images/formulare/ff-console-variable.png)

In Google Chrome gibt es ebenfalls eine Console, das entsprechende Fenster wird geöffnet wenn Sie irgendwo in der Webseite mit der rechten Maustaste klicken, und „Element überprüfen“ auswählen:


![Mit Chrome den Wert einzelnen Javascript-Variablen  auslesen](/images/formulare/chrome-console-variable.png)


Popup-Fenster
--------------
Mit den Befehlen `alert`, `confirm` und `prompt` können Sie kleine Popup-Fenster öffnen:

<javascript caption="Popup-Fenster">
alert("peng, du bist tot!");
var ja_nein = confirm("sollen die daten nicht gelöscht werden?");
var antwort = prompt("welche Daten sollen gelöscht werden. Keine Angabe löscht alles");
</javascript>

![Darstellung der Popup-Fenster in den Browsern Firefox, Chrome, Opera auf Mac](/images/formulare/popups.png)

Achtung: So können Sie zwar bei gutgläubigen Menschen Herzinfarkte auslösen, aber Sie können mit Javascript nicht wirklich Dateien löschen.

Formulare
----------

Mit der Konsole von Firebug können Sie auch Formulare genauer untersuchen. Achtung! Wir geben ab jetzt allen Formular-Eingabefeldern nicht nur einen `name`, sondern auch eine `id`, das erleichtert die Handhabung in Javascript!


<htmlcode>
<form method="get" action="mail.php">
<label for="mail">E-Mail:
   <input type="text" name="mail" id="mail">
</label>
<label>Hochschule:
    <input type="text" name="hochschule" id="hochschule">
</label>
<input type="submit" value="speichern">
</form>
</htmlcode>

§

![Mit Firefox Developer Tools Formulare und Eingabefelder auslesen](/images/formulare/manipulate-form-js.png)


Mit `document.getElementById` kann man also das einen bestimmten Tag  ansprechen, wenn man die id kennt.

Jedes Eingabefeld bietet mit value den aktuell eingegeben Wert (als String) an, hier z.B. `document.getElementById("hochschule").value`.  Die letzten beiden Zeilen in der Konsole zeigen, dass es auch umgekehrt funktioniert: man kann auch Werte ins Eingabefeld hineinschreiben, der neue Werte wird sofort im Browser angezeigt.


Ereignisse und Ereignisgesteuerte Programmierung
-------------------------------------------------
Javascript entstand als Programmiersprache für das „Frontend“, für die
Gestaltung von Benutzerschnittstellen. Für grafische Benutzerschnittstellen hat
sich ein besonderer Programmierstil entwickelt: die ereignisgesteuerte
Programmierung. Dieser Stil kommt immer Einsatz, wenn es um Schnittstellen zu Menschen geht,
und auf die Eingaben von Menschen reagiert werden soll.

Siehe auch [Crash Course Computer Science #26: Graphical User Interfaces](https://youtu.be/XIGSJshYb90?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo&t=316)

## Events im Browser

Im Webbrowser sind solche Ereignisse z.B.: 

* Klicken auf einen Link
* Eintippen in ein Textfeld
* Anklicken einer Checkbox
* Absenden eines Formulares

Eine Liste der gültigen Events bzw. on-Attributen für HTML-Tags finden Sie im [Mozilla Developer Networ (MDN)](https://developer.mozilla.org/de/docs/Web/Events).  Aber für den Anfang
werden Sie mit viel weniger Events auskommen!

## Beispiel

Ein Beispiel für ereignisgesteuerte Programmierung mit einem Web-Formular: Das Bestellformular für Bücher soll automatisch den Gesamtpreis berechnen.

![Abbildung 55: Bestellformular für Bücher mit Berechnung](/images/image248.png)

Wenn in ein Anzahl-Feld ein neuer Wert eingegeben wird soll dieser mit dem Preis
multipliziert werden und in die rechte Spalte geschrieben werden. 

### 1.Schritt: eine Berechnung

Betrachten wir zuerst einen Schritt der Berechnung alleine an einem vereinfachten Formular mit einem
Eingabefeld und einem span-tag für die Ausgabe.

<htmlcode>
<input value="0" name="in">
<span id="out"></span>
</htmlcode>

Für die Formulierung „Wenn in das Feld in ein neuer Wert eingegeben wird, dann...“  gibt es ein passendes Event in HTML/Javascript: onchange. Die wird als Attribut in den HTML-Code des Eingabefeldes geschrieben:

<htmlcode>
<input value="0" name="in"  onchange="hier Javascript">
<span id="out"></span>
</htmlcode>

§

In das Attribut kann nun Javascript-Code eingefügt werden der die richtige Berechnung vornimmt und das Ergebnis in das richtige Element schreibt:

<htmlcode>
<input value="0" name="in"
  onchange="document.getElementById('out').innerHTML = this.value * 100">
<span id="out"></span>
</htmlcode>


<input value="0" name="in"
  onchange="document.getElementById('out').innerHTML = this.value * 100">
<span id="out"></span>


§

Betrachten wir die Javascript-Befehl im Detail: Es handelt sich um eine
Zuweisung mit `=`.

Auf der rechten Seite der Zuweisung befindet sich die Variable `this`, diese
verweist auf das Element, das das Event ausgelöst hat, in diesem Fall also das
Eingabefeld. Mit `this.value` kann aus dem Eingabefeld der eingegebene Wert (als
String) ausgelesen werden.

Dieser Wert wird nun mit 100 multipliziert. In Javascript ist dabei keine explizite Typ-Umwandlung von String zu Zahl nötig, das erledigt der Javascript-Compiler automatisch. Das Ergebnis auf der rechten Seite ist also eine Zahl, z.B. 300.

Auf der linken Seite der Zuweisung wird zuerst mit
`document.getElementById('out')` ein bestimmter HTML-Tag ausgewählt, hier ist es
der span-Tag. Diesem Tag wird dann als „inneres HTML“ das Ergebnis der
Multiplikation zugewisen. Dabei wir die Zahl (z.B. 300) wieder in einen String
zurückverwandelt (z.B. "300").

§

Nun wäre es natürlich unpraktisch in das onchange-Attribut ein längeres Javascript-Programm zu schreiben. Dafür kann man in Javascript Funktionen definieren, die dann nur noch aufgerufen werden. Z.B. um die Gesamtsumme im Bestellformular zu berechnen ist eine Funktion praktisch:

<htmlcode>
<head>
<script>
function compute() {

  document.getElementById('outtotal').innerHTML =

    document.getElementById('in1').value * 100
  + document.getElementById('in2').value * 200
  + document.getElementById('in3').value * 0
  + document.getElementById('in4').value * 1000
  + document.getElementById('in5').value * 10
  + document.getElementById('in6').value * 5
}
</script>
</head>
<body>
</htmlcode>

Bei den einzelnen Berechnungen für die einzelnen Bücher wird jeweils zum Schluss compute() aufgerufen.

§

Achtung: beim „Rechnen“ mit Eingabefelder von Javascript tritt häufig folgender
Fehler auf: in Javascript werden die Datentypen number, string, boolean, object zwar unterschieden,
aber nicht deklariert. Es kann in einer Variable einmal ein
String und einmal eine Zahl gespeichert sein:

<htmlcode>
  var a,b,c;
  a = 10;
  console.log(`wie viel ist ${a} plus 20?`);
  console.log(a + 20);
  a = "zehn";
  console.log(`wie viel ist ${a} plus 20?`);
  console.log(a + 20);
  a = "10";
  console.log(`wie viel ist ${a} plus 20?`);
  console.log(a + 20);
</htmlcode>

Hier der Output des Programms:

<plain>
wie viel ist 10 plus 20?
30
wie viel ist zehn plus 20?
zehn20 debugger eval code:7:3
wie viel ist 10 plus 20?
1020
</plain>

§

Der `+` Operator verhält sich also je nach Datentype des ersten Arguments verschieden: steht links des Plus-Zeichens eine Zahl, dann erfolgt eine Addition. Steht links des Plus-Zeichens ein String, dann erfolgt eine String-Konkatenation; ein Aneinanderfügen von Text.

Eingabefelder in Web-Formularen liefern immer einen String. Deswegen ist es falsch, sie einfach zu addieren. `100 + 200 + 0 + 0 + 0 + 0` wäre `1002000000`. Bei der Multiplikation mit `*` tritt dieses Problem nicht auf, da der Stern keine zweite Bedeutung hat. 

Mit der Funktion `parseInt()` können Sie einen String in eine Integer-Zahl verwandeln bevor Sie eine Addition durchführen.

<javascript>
  a = "10";
  console.log(`wie viel ist ${a} plus 20?`);
  console.log(parseInt(a) + 20);
</javascript>

gibt das erwartete Ergebnis

<plain>
  wie viel ist 10 plus 20? 30
</plain>


Formular prüfen
-----------------
Mit HTML5 kann man mit den Attributen `required` und `pattern` einfache Prüfungen
der Eingabe
vornehmen. Das Formular kann erst gesendet werden, wenn alle Prüfungen erfüllt
sind.

[Demo](/images/formulare/form.html#required_and_pattern)

§

Mit Javascript kann man noch komplizierte Prüfungen vornehmen, und ebenfalls
verhindern, dass das Formular abgesendet werden kann.

Dafür gibt es das Event „onsubmit“ im form-Tag. 

<htmlcode>
<form name="pizzaformular" 
  action="http://webcode.multimediatechnology.at/code/echo.php"
  onsubmit= "wert=formularok(); return wert;">
</htmlcode>

Die Besonderheit dieses Events: wenn am Ende des Events ein falscher-Wert zurück gegeben wird, verhindert der Browser das Senden der Formulardaten. 

§

Entsprechend kann man eine Funktion schreiben:

<htmlcode>
<script>
function formularok() {
  // ... Berechnung der Gesamtsumme ...

  if ( total < 100 ) {
    alert("Die Gesamt-Bestellung muss mindestens 100€ betragen\n");
    return false;
  }
  return true;
}
</script>
</head>

<body>
  <form name     = "pizzaformular"
        action   = "bestellung.php"
        onsubmit = "wert=formularok(); return wert;">
  .... viele eingabefelder ...
  <input name="" type="submit" />
  </form>
</body>
</htmlcode>


