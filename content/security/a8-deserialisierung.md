---
title: A8 - Deserialisierung
order: 80
---

Auf Platz 8 der OWASP Top 10 2017: **Unsichere Deserialisierung**

Als Serialisierung [&rarr;wikipedia](https://de.wikipedia.org/wiki/Serialisierung) bezeichnet man in der Informatik die Umwandlung
einer Datenstruktur aus dem laufenden Programm in einen String. Ein Beispiel das Sie schon
kennen ist JSON.

Die Deserialisierung ist dann der umgekehrte Vorgang: die Umwandlung des Strings in eine Datenstruktur.

Der wichtige Tipp für PHP:  [json_decode](https://www.php.net/manual/de/function.json-decode.php) und [json_encode](https://www.php.net/manual/de/function.json-encode.php) verwenden.

- [OWASP Deserialization Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Deserialization_Cheat_Sheet.md)
