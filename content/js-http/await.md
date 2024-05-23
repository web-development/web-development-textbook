---
title: Async/Await
order: 51
---

Sie kennen nun Promises als Art mit Asynchronität umzugehen.

Nun lernen wir eine zweite Schreibweise für promises.

## Warnhinweis

Die Schreibweise mit await funktioniert im Browser, aber
nur innerhalb einer Funktion die als `async` ausgewiesen ist:

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


## await statt then

<javascript caption="await">
function f2() {
  fetch("counter_ajax.php")
  .then(response => response.text())
  .then(text => document.getElementById('output').innerHTML = text );
}

async function f1() {
  const response = await fetch("counter_ajax.php");
  const text = await response.text();
  document.getElementById('output').innerHTML = text;
}
</javascript>

## was bedeutet await?

Das keyword **await** wird auf eine **promise** angewandt:

<javascript caption="await">
  const promise = fetch("counter_ajax.php");
  const response = await promise;
</javascript>

`await` wartet nicht "aktiv" auf das Ergebnis, sondern die Ausführung
dieser Funktion wird pausiert, und **anderer** JavaScript Code kann
derweilen ausgeführt werden.

Wenn der andere Code fertig ausgeführt ist, und die Promise ein
Ergebnis liefert, dann wird die Ausführung fortgeführt.

## async await und Fehlerbehandlung.

Bei Promises mussten wir die `.catch` methode
ans Ende der `.then` Chain anhängen um einen Fehler abzufangen.
Mit async/await können wir wieder die "normale" `try` `catch` Schreibweise verwenden:

<javascript caption="await">
function f2() {
  fetch("counter_ajax.php")
    .then(response => response.text())
    .then(text => document.getElementById('output').innerHTML = text )
    .catch(error => {
      document.getElementById('output').innerHTML = '#';
      console.log(error);
    });
}

async function f1() {
  try {
    const response = await fetch("counter_ajax.php");
    const text = await response.text();
    document.getElementById('output').innerHTML = text;
  } catch (error) {
    document.getElementById('output').innerHTML = '#';
    console.log(error);
  }
}
</javascript>

## Tipp

In folgendem Beispiel wird das "load" event verwendet,
um eine asynchrone Funktion zu starten.


<javascript caption="load event und async">
window.addEventListener("load", async () => {
  await doTheThing();
  console.log("Thing is Done.");
});

async function doTheThing() {
  // ...
}
</javascript>


