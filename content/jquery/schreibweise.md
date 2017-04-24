---
title: Besondere JavaScript-Schreibwesen in jQuery
order: 20
---
jQuery Code ist auf den ersten Blick nicht einfach lesbar. Wenn man ein paar Grundprinzipien verstanden hat profitiert man aber von den ungewohnten Schreibweisen: der Code bleibt relativ kurz.

Mein Name ist Dollar
---------------------
In JavaScript kann das Dollar-Zeichen in Bezeichnen (Variablennamen, Funktionsnamen) verwendet werden. jQuery nutzt diese Besondernheit von JavaScript aus und definiert eine Funktion und ein Objekt mit dem Dollarzeichen als Namen. Hier eine kleine Lese-Schule:

Eine Funktion mit dem Namen $ wird mit einem Argument aufgerufen, das Argument ist ein String:

<javascript>
  $("a")
</javascript>

Eine Funktion mit dem Namen $ wird mit einem Argument aufgerufen, das Argument ist das document-Objekt:

<javascript>
  $(document)
</javascript>

Das Objekt mit dem Namen $ hat eine Methode get. Diese wird mit zwei Argumenten aufgerufen:

<javascript>
  $.get("backend.php", callback)
</javascript>

Chaining – eine Kette von Methodenaufrufen
---------------------------------------------
Die meisten jQuery-Methoden geben wieder ein jQuery-Objekt zurück. In folgendem Code sind o1, o2, o3 jeweils jQuery-Objekte.  Jedes jQuery-Objekt bietet die Methoden addClass und append an.

<javascript>
  o1 = $('h1');
  o2 = o1.addClass("gag");
  o3 = o2.append(":");
</javascript>

Wenn man die “Zwischen-Objekte” o1, o2, o3 nicht wirklich noch einmal verwenden will, dann braucht man sie auch nicht in einer Variable zu speichern. Eine alternative Schreibweise ist dann:

<javascript>
  $('h1').addClass("gag").append(":");
</javascript>

Dabei kann man auch Zeilenumbrüche verwenden, folgender Code hat genau die gleiche Wirkung:

<javascript>
  $('h1')
    .addClass("gag")
    .append(":");
</javascript>

Funktionen als first-class citizens
--------------------------------------
In JavaScript können Funktionen zur Laufzeit erzeugt werden, in Variablen gespeichert werden, haben eine Identität auch wenn sie keinen Namen haben. Betrachten wir eine ganz normale Funktion:

<javascript>
  function create_gold() { 
       // Details nicht so wichtig
       return gold;
  }
</javascript>

Sie kennen schon die Schreibweise für den Aufruf der Funktion: auch wenn die Funktion keine Argumente hat werden auf jeden Fall die runden Klammern geschrieben:

<javascript>
  gold1 = create_gold();
</javascript>

In JavaScript gibt es eine zweite, ähnliche Scheibweise ohne die runden Klammern. Dabei wird die Funktion nicht aufgerufen, sondern in der Variable `f` gespeichert:

<javascript>
  f = create_gold;
</javascript>

Nun kann die Funktion auch unter dem neuen Namen `f` aufgerufen werden:

<javascript>
  gold2 = f();
</javascript>

Wir haben diese Schreibweise schon bei addEventListener verwendet:

<javascript>
...addEventListener("click", create_gold);
</javascript>

auch hier wird die Funktion nur übergeben, aber noch nicht aufgerufen.

Anonyme Funktionen
-------------------
Da Funktionen in Variablen gespeichert werden können, ist es nicht unbedingt nötig, dass Sie einen normalen Funktionsnamen haben. Die folgende Funktion hat den Funktionsnamen hase:

<javascript>
  function hase() { 
    alert ("mein name ist hase"); 
  } 
</javascript>

Alternativ eine Schreibweise ohne Namen, die Funktion wird sofort in der Variable anon gespeichert:

<javascript>
  anon = function() {
       alert("ich habe keinen namen");
  };
</javascript>

Die beiden Funktionen können nur auf die gleiche Weise aufgerufen werden:

<javascript>
  hase();
  anon();
</javascript>

document ready
---------------

Bei der Verwendung von jQuery werden oft Funktionen ohne Namen verwendet. Ein Beispiel ist die `ready`-Funktion: Die Funktion `ready()` von jQuery verlangt ein Argument: eine Funktion, die aufgerufen werden soll wenn die Webseite vollständig geladen ist:

<javascript>
  function nach_dem_laden () { 
        // Your code here 
  } 
  $(document).ready(nach_dem_laden); 
</javascript>

Da die Funktion `nach_dem_laden` nur einmal verwendet wird, ist es eigentlich nicht nötig ihr einen Namen zu geben. Stattdessen verwendet man eine anonyme Funktion:

<javascript>
  $(document).ready( function(){ 
        // Your code here 
  }); 
</javascript>

Zur Beruhigung: auch wenn Sie die Schreibweise jetzt noch nicht ganz durchschauen können Sie jQuery erfolgreich verwenden. Sie können die drei Zeilen einfach mit copy-und-paste in eine Webseite übertragen und Ihren eigenen Code dann einfügen. (Wahrscheinlich arbeiten die meisten DesignerInnen so mit jQuery.) Wenn Sie aber hauptberuflich in der Programmierung arbeiten wollen, dann müssen Sie das eines Tages genau verstehen!

