---
title: Web-Applikation mit Schreibrecht
order: 20
---

In diesem Kapitel werden wir die Web-Applikation weiter entwickeln:
Daten werden nicht nur angezeigt, sondern auch gelöscht und editiert.

Hier der Plan für die einzelnen Seiten dieser Applikation:

| Titel           | Dateiname       |  Methode / Parameter |  Beschreibung                                |
| Person löschen  | person_delete.php |  POST id            |  Löscht die Person mit der angegeben id.    |
| Person einfügen | person_new.php  |  GET                 |  Zeigt Eingabeformular für eine neue Person  |
| Person einfügen | person_new.php  | POST isfemale,title,firstname,surname,email,type,profile_visible,description | Legt eine neue Person an. |
| Person bearbeiten | person_edit.php | GET id |  Zeigt Bearbeitungs-Formuar an |
| Person bearbeiten | person_edit.php | POST id,isfemale,title,firstname,surname,email,type,profile_visible,description|  Speichert neue Daten zur Person id |
{: class="table table-condensed table-bordered" style="width:auto"}

Warum wird hier manchmal GET und manchmal POST als Methode verwendet?
Dazu gibt es im HTTP Protokoll eine ganz klare Vorschrift in
[Kapitel 9.1 Safe and Idempotent Methods](https://tools.ietf.org/html/rfc2616#page-51):

   ... the GET and HEAD methods SHOULD NOT have the significance of taking an action
   other than retrieval. These methods ought to be considered "safe".
   This allows user agents [= browsers] to represent other methods, such as POST, PUT
   and DELETE, in a special way, so that the user is made aware of the
   fact that a possibly unsafe action is being requested.

Wir verwenden also GET wenn nur Daten Abgefragt werden, und POST wenn
Daten gelöscht, angelegt oder verändert werden.  

Bei der Implementierung dieser Applikation lernen wir Schritt für Schritt verschiedene Sicherheitprobleme kennen. 


