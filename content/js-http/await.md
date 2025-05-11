---
title: Async/Await
order: 51
---

Sie kennen nun Promises und `then()` als Art mit Asynchronität umzugehen.

Nun lernen wir eine zweite Schreibweise für Promises.

## await statt then

Bei der verwendung von `await` braucht man keine
Callback-Funktionen oder Arrow-Funktionen mehr - der Code
sieht wieder aus wie syncroner Code:

<htmlcode caption="await">
<script type="module">
  const response = await fetch("counter.php");
  const counter = await response.text();

  let p = document.createElement("p");
  p.innerHTML = `Zugriffe auf diese Seite: <b>${counter}</b>`;
  document.querySelector("body").appendChild(p);
</script>
</htmlcode>

## Was bedeutet await?

Das keyword **await** wird auf eine **promise** angewandt:

<javascript caption="await">
  const promise = fetch("counter_ajax.php");
  const response = await promise;
</javascript>

`await` wartet nicht aktiv auf das Ergebnis. Stattdessen wird die Ausführung der aktuellen Funktion
an dieser Stelle **pausiert**, und in der Zwischenzeit kann anderer JavaScript-Code ausgeführt werden.

Wenn der andere Code fertig ausgeführt ist, und das Ergebnis der Promise verfügbar ist,
läuft die pausierte Funktion weiter.

Das bedeutet: Die Aussage: "Ein Javascript Programm wird nie unterbrochen".
stimmt so nicht mehr. An jeder Stelle mit `await` kann die Ausführung unterbrochen werden –
und in der Zeit kann ein anderes JavaScript-Programm laufen.

## async await und Fehlerbehandlung.

Bei Promises mussten wir die `.catch` Methode
ans Ende der `.then` Chain anhängen um einen Fehler abzufangen.

Mit async/await können wir wieder die "normale" `try` `catch` Schreibweise verwenden:

<javascript caption="await mit Fehlerbehandlung">
try {
  const response = await fetch("counter.php");
  const counter = await response.text();

  let p = document.createElement("p");
  p.innerHTML = `Zugriffe auf diese Seite: <b>${counter}</b>`;
  document.querySelector("body").appendChild(p);
} catch (error) {
  console.error("Fehler beim Laden des Zählers:", error);
}
</javascript>


## Warnhinweis

Im Browser kann man `await` direkt im Hauptteil eines JavaScript-Moduls verwenden. Innerhalb einer Funktion funktioniert `await` aber nur, wenn die Funktion mit dem Schlüsselwort `async` markiert ist

<javascript caption="asynchrone funktion">
async function f1() {
  console.log("ich kann await");
}

function f2() {
  console.log("ich kann kein async und kein await");
}
</javascript>

Auch anonyme Funktionen und Arrow Functions können async sein:

<javascript caption="asynchrone arrow function">
const f1 = async () => {
  console.log("ich kann await");
}

const f2 = () => {
  console.log("ich kann kein async und kein await");
}
</javascript>


## Beispiel: DOMContentLoaded


<javascript>
document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch("counter.php");
});
</javascript>


## Siehe auch

* [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
