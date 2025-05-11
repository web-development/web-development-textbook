---
title: mehr fetch
order: 90
---


Die Funktion `fetch` kann nicht nur für einfache GET Requests eingesetzt werden,
sondern bietet noch mehr Möglichkeiten:


## cookies

Sollen Cookies bei diesem Request mitgeschickt werden?

<javascript>
<script>
  let promise = fetch("api.php",  {
      credentials: 'same-origin'
  });
</script>
</javascript>

## header

Beliebige zusätzliche HTTP Header einfügen.

<javascript>
<script>
  let promise = fetch("api.php",  {
      headers: {
        "API-Key": "xxxxyyyy",
      });
</script>
</javascript>

## post

POST Request mit Daten im JSON Format:

<javascript>
<script>
  let promise = fetch("api.php",  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
</script>
</javascript>



## Fehlerbehandlung

Für die Fehlerbehandlung gibt es die Methode `catch`:

<javascript>
fetch("counter_ajax.php")
  .then(response => response.text())
  .then(text => document.getElementById('output').innerHTML = text )
  .catch(error => {
	  document.getElementById('output').innerHTML = '#';
    console.log(error);
  });
</javascript>

## Fehlerbehandlung von HTTP

Zur Erinnerung: Bei einem HTTP Response wird ein Statuscode
mitgeliefert, der Erfolg oder Fehler anzeigen kann, siehe auch
[http-status-code.de](https://http-status-code.de/)



Achtung: wenn bei einem `fetch` der HTTP-Response einen Statuscode
für einen Fehler liefert, z.B. 404 oder 500 , dann
löst das noch keine Exception aus, die mit `catch` gefangen werden könnte.

Die Property `response.ok` zeigt an ob der HTTP Status im
postivien Bereich (200-299) war.


Das müsste man selbst behandeln:

<javascript>
button.disabled = true;

fetch("counter_ajax.php")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(text => document.getElementById('output').innerHTML = text )
  .catch(error => {
	  document.getElementById('output').innerHTML = '#';
    console.log(error);
  })
  .finally {
    button.disabled = false;
  };
</javascript>


## Siehe auch

* `fetch`[mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
