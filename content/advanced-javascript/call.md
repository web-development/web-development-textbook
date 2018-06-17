---
title: Funktion Aufrufen
order: 10
---


Zusätzlich zum einfachen Aufruf mit Funktionsname, Klammern, Argumenten `f(x)`
gibt es noch mehrere zusätzliche Arten eine Funktion aufzurufen: 
`call` und `apply`:

<javascript caption="Funktion r aufrufen">
  r("hallo ", 10);
  r.call(null, "hallo ", 10);
  r.apply(null, [  "hallo ", 10 ]  );
</javascript>


§

Das erste Argument der Funktionen `call` und `apply`  gibt das Objekt an, auf dem die Methode aufgerufen werden soll: 

<javascript caption="Verschiedene Arten eine Methode aufzurufen">
  objekt.f("hallo ", 10);
  objekt.f.call(objekt, "hallo ", 10);
  objekt.f.apply(objekt, [  "hallo ", 10 ]  );
  
  objekt.f.call(anderes_objekt, "hallo ", 10);
  objekt.f.apply(anderes_objekt, [  "hallo ", 10 ]  );
</javascript>

§

Es gibt noch eine dritte method `bind` die nur `this` neu festsetzt,
und die funktion sonst unverändert lässt:

<javascript>  
  f2 = objekt.f.bind(anderes_objekt);
  f2.("hallo ", 10);
</javascript>
