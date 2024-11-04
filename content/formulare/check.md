---
title: Formularprüfung
order: 15
---

HTML und CSS bieten einige möglichkeiten um die Eingabe im Formular
sofort zu prüfen und Rückmeldung zu geben.



## Tags für Formulare

Mit den HTML-Attributen `required`, `minlength`, `maxlength`, und einigen mehr kann
man die Eingabe in einem Text-Eingabefeld prüfen:

<htmlcode caption="Einfaches Formular">
<form method="get" action="bestellung.php">
  ...
  <input type="text"  name="fullname" required minlength="4" maxlength="8">
  ...
  <input type="submit" value="Bestellen">
</form>
</htmlcode>


So sieht das Formular im Browser aus:

<form method="get" action="bestellung.php">
  <input type="text"  name="fullname" required  minlength="4" maxlength="8">
  <input type="submit" value="Bestellen">
</form>



## pattern

Mit dem Attribut `pattern` kann man ein "Muster" für den eigegebenen String vorgeben.
Dieses "Muster" besteht im einfachsten Fall aus einem Stück Text, im komplizierten
Fall aus einer Folge von Sonderzeichen.  Es handelt sich um eine eigene kleine Programmiersprache
mit dem Namen "Regular Expression".


<htmlcode caption="Formular mit pattern">
<form method="get" action="anmeldung.php">
  FH E-Mail Adresse:
  <input type="email"  name="email" pattern="@fh-salzburg.ac.at$">
  <input type="submit" value="Anmeldung">
</form>
</htmlcode>


## CSS

Alle Eingabefelder, die die Prüfung nicht bestehen, kann man mit der Pseudo-Klasse `:invalid` in
CSS selektieren:


<css>
:invalid {
  box-shadow: 0px 0px 5px red;
}
</css>


## Links

- [MDN: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [html5pattern](http://html5pattern.com/) - bewährte Pattern für die Eingabeprüfung
- [:invalid](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
- [Attributes for Input Tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)
