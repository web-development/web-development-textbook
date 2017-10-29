---
title: Formular als Interaktion
order: 15
---

Bei der Verwendung von Checkboxen, Radiobuttons, Menüs und Listen geben Sie
genau vor, welche Möglichkeiten die LeserIn hat.  Wenn Sie beim Entwurf des
Formulars eine Möglichkeit vergessen, kann die LeserIn nichts mehr daran ändern.
Deswegen ist hier besondere Sorgfalt geboten. Dazu ein paar Beispiele.

## Keine Null-Antwort

![Zwei Entwürfe für ein Bier-Bestell-Formular](/images/formulare/bier.png)

Der linke Entwurf läßt keine kleine Bestellung zu. Die „Mindestbestellmenge“ für jede Sorte ist jeweils eine Kiste.  Durch das Einfügen einer „Leer“-Option in die Menüs wird diese Einschränkung aufgehoben.

## Hotel-Reservierung

![Zwei Entwürfe für ein Formular zur Zimmer-Reservierung](/images/formulare/zimmer.png)

Version 1: Ein Menü ermöglicht die Auswahl aus vorgegebenen Elementen.  Mit diesem Formular kann man nur ein, nicht aber zwei oder mehr Zimmer reservieren.  Version 2: Ein Text-Eingabefeld ermöglicht hier die Eingabe der Anzahl der Zimmer.  Es ist aber nicht möglich ein Einzel- plus ein Doppel-Zimmer zu reservieren.

§

![Zwei weitere Entwürfe für ein Formular zur Zimmer-Reservierung](/images/formulare/zimmer-2.png)

Version 3 ermöglicht durch die Eingabe der Anzahl die Reservierung jeder Kombination von Einzel- und Doppelzimmer. Version 4: Durch ein zusätzliches Textfeld können alle weiteren Probleme abgefangen werden

## Redundanz

Achtung: wenn Sie zu viele Eingabemöglichkeiten bieten entsteht Redundanz, dann können Sie die Bedeutung der Eingabe nicht mehr eindeutig erkennen.


![Abbildung 47: Redundanz im Formular](/images/formulare/redundanz.png)

Im linken Formular wird die Anzahl der bestellten Pizzas auf zwei Arten festgelegt: durch eine Checkbox und eine Text-Eingabe. In der obersten Zeile stimmen diese beiden Eingabefelder in Ihrer Aussage überein: Ja, 1 Stück Carbonara. Aber es ist auch möglich in sich widersprüchliche Bestellungen zu formulieren:  Ja, Null Stück Margaritha bzw. Nein, 1 Stück 4-Käse.

Im rechten Formular wird diese Redundanz vermieden.


## Vertiefung

Wir haben bisher Formulare betrachtet, die nur HTML, nicht aber Javascript
verwenden. Erst mit Javascript kann man Formulare wirklich flexibel bauen.
Und erst mit Serverseitiger Programmierung (z.B. in PHP oder Ruby) kann man
die eingegebenen Daten wirklich verarbeiten.


