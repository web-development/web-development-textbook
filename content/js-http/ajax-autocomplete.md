---
title: Autocomplete
order: 52
---

Wir werden in diesem Beispiel ein Autocomplete-Feld bauen.
Beginnen wir mit dem Backend:

### Backend

Am Server befindet sich eine Datenbank mit ca. 170.000 Städten.
Mit der Anfrage

`search.php?term=w`

sollen nur die Städte, die mit w beginnen, geladen werden
und als JSON-Array zurück gegeben werden:

<javascript>
[
    "Wa,GH",
    "WaKeeney,US",
    "Waabs,DE",
    "Waaia,AU",
    "Waajid,SO",
    "Waake,DE",
    "Waakirchen,DE",
    "Waal,DE",
    ...
    "Wüstenzell,DE",
    "Wüstheuterode,DE",
    "Wāhan Murad,PK",
    "Wān Yampēng,MM",
    "Wŏnsŏngil-tong,KR",
    "Włocławek,PL",
    "Włodawa,PL",
    "Włoszczowa,PL",
    "Wāsiţ,EG",
    "Wąwolnica,PL"
]
</javascript>

Das sind ca. 5000 Namen.

Der Output des PHP-Programmes ist also JSON. Das muss mit dem HTTP Header `Content-Type`
angekündgt werden:

<php>
header('Content-Type: application/json');
// $cities aus der Datenbank holen
echo json_encode($cities);
</php>

### Frontend

Für das Frontend kann man eine fertige Library verwenden,
z.B. [JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete/):

<javascript>
new autoComplete({
    selector: '#cityinput',
    source: (term, handle_response) => {
      // schicke suchwort 'term' ans backend
      // wenn die datenvorliegen, rufe die funktion handle_response auf
    }
});
</javascript>
