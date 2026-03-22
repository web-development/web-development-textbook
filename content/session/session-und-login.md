---
title: Session und Login
order: 20
---

HTTP ist "stateless" – jeder HTTP-Request ist ein isoliertes Ereignis, der
Server kann nicht erkennen, ob Requests zusammengehören.

![HTTP als "stateless protocol"](/images/stateless-http.svg)

§

Mit der Einführung von Cookies, und damit von state, können
wir nun erkennen, dass mehrere Requests zusammengehören,
vom selben Browser ausgelöst wurden.

![HTTP mit Cookies wird "stateful"](/images/stateful-http-with-cookies.svg)

Wir nennen diese Folge von Requests dann eine "Session".

Session
--------
PHP hilft beim Erkennen und Verwenden von Sessions:

Mit dem Befehl `session_start()`[*](http://www.php.net/manual/de/function.session-start.php) wird

* …beim ersten Aufruf
  * automatisch ein Cookie gesetzt.
  * Wenn im Array `$_SESSION` Daten gespeichert werden, sorgt PHP dafür, dass die Daten am Server permanent gespeichert werden.
* …bei jedem weiteren Aufruf
  * die Session anhand des Cookies wieder identifiziert.
  * und die Daten wieder ins `$_SESSION`-Array geladen.


`session_start()` muss in jeder Seite der Applikation ausgeführt werden. Da wir in jeder Seite die `functions.php`-Datei mit `require` einbinden, ist das ein guter Ort, um `session_start()` auszuführen.



### Was speichert man in der Session?

In der Session speichert man möglichst wenig. Die meisten Daten liegen in der Datenbank.

Die minimale Version ist: im `$_SESSION`-Array  nur die `user_id` der angemeldeten Person speichern.

Alle weiteren Daten holt man dann aus der Datenbank, wo es eine `users` Tabelle gibt.

Weitere Informationen, die eventuell nur in der Session gespeichert sind: Zwischenergebnisse von mehrseitigen Formularen, Warenkörbe, die noch nicht zur Kasse gebracht wurden, Statusmeldungen, die auf der nächsten Seite angezeigt werden sollen.


### Session und Interface

Für die Benutzung der Seite macht die Session einen großen Unterschied: wenn ich eingeloggt bin habe ich mehr Möglichkeiten, das sieht man zum Beispiel in der Navigationsleiste:

![Abbildung 146: Anzeige des Usernamens und Login/Logout-Möglichkeit](/images/session/above_and_below.png)

Beim Programmieren der Seite bedeutet das: je nach Inhalt der Session zeigen wir verschiedene Elemente an.

### Struktur der Applikation mit Login


Die folgende Tabelle zeigt die Seiten der Applikation, die für
das Login nötig sind.
Diesmal ist auch die Methode angegeben, da `login.php` verschiedene Aufgaben hat,
je nachdem ob es mit GET oder POST aufgerufen wird.

|Titel|Methode|Dateiname  |Parameter|Beschreibung|
|+----|+------|+----------|+--------|+-----------|
|Login Formular|GET    |`login.php`|         |Zeigt das Formular für den Login an        |
|Login|POST   |`login.php`|username, passwort|Prüft die Daten, setzt Username in der Session, dann Redirect zu index.php|
|Logout|POST   |`logout.php`| | Löscht Session und Session-Cookie, dann Redirect zu index.php |
{: class="table table-condensed table-bordered" style="width:auto"}


### Login

Das Login-Formular (Dateiname `login.php`) sieht ganz einfach aus und sendet die Daten mit POST wieder an `login.php`:

![Abbildung 147: Login-Formular der Applikation](/images/session/login-form.png)

Username und Passwort werden überprüft; falls sie passen, wird der Username in der Session gespeichert. Mit dem Befehl `header("Location: index.php")` wird der Browser dann automatisch an die Hauptseite weitergeleitet.

§

<php caption="Überprüfung von username und passwort">
if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
    $_SESSION['USER'] = $username;
    header("Location: index.php");
    exit;
}
</php>

Nach dem gelungenen Login kann man jede beliebige Seite der Applikation aufrufen; immer wird im Array `$_SESSION` der Username gespeichert sein.

### Logout

Das Logout erfolgt ebenfalls mit der Methode POST:

<htmlcode>
  <form action="logout.php" method="post">
      <input type="submit" value="Logout" />
  </form>
</htmlcode>

§

Das Logout ist etwas umständlich zu Programmieren: das Cookie, das von PHP gesetzt wurde, muss man nun selbst löschen. Dazu wird das „Ablaufdatum“ des Cookies auf ein Datum in der Vergangenheit gesetzt, dann wird der Browser es löschen.

<php>
// Löschen aller Session-Variablen.
$_SESSION = array();

// Löscht das Session-Cookie.
if (isset($_COOKIE[session_name()])) {
  setcookie(
    session_name(),  // Cookie-Name war gleich Name der Session
    '',             // Cookie-Daten. Achtung! Leerer String hier hilft nicht!
    time()-42000,  // Ablaufdatum in der Vergangenheit. Erst das löscht!
    '/'           // Wirkungsbereich des Cookies: der ganze Server
   );
}
session_destroy();
header("Location: index.php");
</php>

### Redirect / Weiterleitung

Das Setzen und Löschen der Session-Cookies dauert immer einen Request länger als gedacht! Deswegen ist eine Weiterleitung mit `Location:` sinnvoll.

Die Weiterleitung funktioniert nur, wenn noch keine Ausgabe erfolgt ist, also vor dem Laden der header-Datei. Hier am Beispiel von login:

<php>
<?php
    $pagetitle = "Login";
    require "functions.php";

    $username = $_POST['username'];
    $passwort = $_POST['passwort'];

    if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
        $_SESSION['USER'] = $username;
        header("Location: index.php");
        exit;
    }

    require "header.php";
</php>

Eine Weiterleitung nach der Behandlung eines POST-Requests ist allgemein sinnvoll.

In diesem Beispiel wird eine Funktion `check_login` aufgerufen, die man
selbst implementieren muss. So kann man z. B. Username und Passwort mit Daten
vergleichen, die an verschiedenen Stellen gespeichert sein können:
in der Datenbank, in der `config.php`-Datei, in Umgebungsvariablen.


![Abbildung 148: Login mit einer Weiterleitung](/images/session/login-flow.svg)


### Neue PHP-Befehle

* `$_SESSION()` [PHP Doku](http://php.net/manual/en/reserved.variables.session.php)
* `$_COOKIE()` [PHP Doku](http://php.net/manual/en/reserved.variables.cookies.php)
* `header()` [PHP Doku](http://www.php.net/manual/de/function.header.php)
* `session_name()` [PHP Doku](http://www.php.net/manual/de/function.session-name.php)
* `session_start()` [PHP Doku](http://www.php.net/manual/de/function.session-start.php)
* `setcookie()` [PHP Doku](http://www.php.net/manual/de/function.setcookie.php)
