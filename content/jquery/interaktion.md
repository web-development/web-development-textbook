---
title: Interaktion mit jQuery
order: 40
---
jQuery bietet eine etwas kürzere Schriebweise statt addEventListener an. Z.B. die Methode click: als Argument wird nur eine Funktion übergeben, die aufgerufen werden soll wenn das Event feuert. Hier kommen meist anonyme Funktionen zum Einsatz.

In folgendem Beispiel ist es das `mouseover` event:

<javascript>
$("a").on('mouseover', function(event){
  // code wird bei mouseover ausgeführt
});
</javascript>

Innerhalb der Funktion steht die Variable `this` zu Verfügung, sie erhält 
den Tag der das Event ausgelöst hat.  

Um den angeklickten Tag als jQuery Objekt zu erhalten kann man wieder
die Funktion `$` verwenden:

<javascript>
$("a").on('mouseover', function(event){
  $(this).find("span").show();
});
</javascript>

Das [vollständiges Beispiel](/images/mouseover.html) zeigt mouseover und
mouseout.

