---
title: Formulardaten Prüfen mit jQuery
order: 50
---
Im Kapitel über Formulare haben Sie gelernt, 
wie Sie mit JavaScript die Daten eines Webformulars prüfen können 
bevor das Formular abgesendet wird. 

Das Submit-Event des Formulars wird nun in der jQuery Schreibweise
behandelt, der boolsche Rückgabewert bleibt in der Bedeutung gleich:
`return false` verhindert das Absenden des Formulars.

<javascript>
$("form").submit(function(){
  // ...
  return ok;
});
</javascript>

Der Wert eines Eingabefeldes kann mit der jQuery Methode `val()` ausgelesen
werden:

<javascript>
$("input[name=schokolade]").val()    // ein Wert
</javascript>


Das [/images/form-jquery.html](fertige Programm)
zeigt die Fehlermeldungen jeweils beim betroffenen Eingabefeld an:

<javascript>
$("form").submit(function(){
  var ok = true;
  $("span.error").remove();

  gesamt_zahl = parseInt( $("input[name=schokolade]").val() )
    + parseInt( $("input[name=schweinsbraten]").val() )
    + parseInt( $("input[name=kaffee]").val() );

  if(gesamt_zahl == 0) {
    $('form').before(
      '<span class="error">Mindest-Bestellmenge 1!</span>'
    );
    ok = false;
  }

  $i = $("input[name=adresse]");
  if($i.val() == "") {
    $i.after('<span class="error">Lieferadresse angeben</span>');
    ok = false;
  }
  return ok;
});
</javascript>

