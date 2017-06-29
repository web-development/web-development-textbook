---
title: Session und Login
order: 20
---

HTTP ist "stateless" - jeder HTTP Request ist ein isoliertes Ereignis, der
Server kann nicht erkennen ob Requests zusammen gehören.

![HTTP als "stateless protocol"](/images/stateless-http.svg)

§

Mit der Einführung von Cookies, und damit von state, können
wir nun erkennen, dass mehrere Requests zusammen gehören,
vom selben Browser ausgelöst wurden. 

![HTTP mit cookies wird "stateful"](/images/stateful-http-with-cookies.svg)

Wir nennen diese Folge von Requests dann eine "Session".

Session
--------
PHP hilft beim Erkennen und Verwenden von Sessions:

Mit dem Befehle  `session_start()`[*](http://www.php.net/manual/de/function.session-start.php)  wird 

* …beim ersten Aufruf 
  * automatisch ein Cookie gesetzt. 
  * Wenn im Array `$_SESSION` Daten gespeichert werden, sorgt PHP dafür, dass die Daten am Server permanent gespeichert werden.
* …bei jedem weiteren Aufruf 
  * die Session an Hand des Cookies wieder identifiziert.
  * und die Daten wieder ins `$_SESSION`-Array geladen.

Für unsere Applikation werden wir das `$_SESSION`-Array verwenden, um den Usernamen des angemeldeten Users zu speichern. 

### Struktur der Applikation mit Login


Die folgende Tabelle zeigt alle nochmal alle Seiten der Applikation im Überblick. 
Diesmal ist auch die Methode angegeben, da login.php verschiedene Aufgaben hat,
je nachdem ob es mit GET oder POST aufgerufen wird.

|Titel|Methode|Dateiname  |Parameter|Beschreibung|
|+----|+------|+----------|+--------|+-----------|
|Home |GET    |`index.php`|         |Zeigt Gesamtzahl der Personen und Werke an.| 
|Login Formular|GET    |`login.php`|         |Zeigt das Formular für den Login an        | 
|Login|POST   |`login.php`|username, passwort|Prüft die Daten, setzt Username in der Session, dann Redirect zu index.php| 
|Logout|POST   |`logout.php`| | Löschte Session und Session-Cookie, dann Redirect zu index.php | 
|Personen|GET |`personen.php`|   |Zeigt 10 zufällig ausgewählt Personen an, mit Links zu  person.php|
|Details zu einer Person|GET|`person.php`|id (Schlüssel der Person)| Zeigt Details zu einer bestimmten Person an: Anzahl der Werke und Username|
|Werke|GET    | `werke.php`|        |Zeigt 10 zufällig ausgewählt Werke an, mit Links zu werk.php| 
|Details zu einem Werk|GET| `werk.php`|id (Schlüssel des Werks)| Zeigt Details zu einer bestimmten Werk an: Titel, Datum der Publikation, eventuell eine Liste der Beteiligten Personen und ihrer Rollen|
{: class="table table-condensed table-bordered" style="width:auto"}

### session_start

`session_start()` wird in `functions.php` ausgeführt, also bei jedem Aufruf einer der Seiten der Applikation. Die Applikation zeigt direkt in der Navigationsleiste die Login/Logout-Möglichkeit und den Namen des eingeloggten Users an:


![Abbildung 146: Anzeige des Usernamens und Login/Logout-Möglichkeit](/images/image364.png)

### Login

Das Login-Formular (Dateiname `login.php`) sieht ganz einfach aus und sendet die Daten mit POST wieder an `login.php`:

![Abbildung 147: Login-Formular der Applikation](/images/image365.png)

Username und Passwort werden überprüft, falls Sie passen wird der Username in der Session gespeichert. Mit dem Befehl `header("Location: index.php")` wird der Browser dann automatisch an die Hauptseite weitergeleitet. 

<php caption="Überprüfung von username und passwort">
if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
    $_SESSION['USER'] = $username;
    header("Location: index.php");
    exit;
}
</php>

Nach dem gelungen Login kann man jede beliebige Seite der Applikation aufrufen, immer wird im Array `$_SESSION` der Username gespeichert sein. So kann er z.B. in der Navigations-Leiste angezeigt werden.

### Logout

Das Logout erfolgt ebenfalls mit der Methode POST:

<htmlcode>
  <form action="logout.php" method="post">
      <input type="submit" value="Logout" />
  </form>
</htmlcode>

§

Das Logout ist etwas umständlich zu programmieren: das Cookie, das von PHP gesetzt wurde, muß man nun selbst löschen. Dazu wird das „Ablaufdatum“ des Cookies auf ein Datum in der Vergangenheit gesetzt, dann wird der Browser es löschen.

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

Die Weiterleitung funktioniert nur, wenn noch keine Ausgabe erfolgt ist, also vor dem Laden der header-include-Datei. Hier am Beispiel von login:

<php>
<?php
    $pagetitle = "Login";
    include "functions.php";

    $username = $_POST['username'];
    $passwort = $_POST['passwort'];

    if ( strlen($username) > 0  and check_login( $username, $passwort ) ) {
        $_SESSION['USER'] = $username;	
        header("Location: index.php");
        exit;
    } 

    include "header.php";
</php>

Eine Weiterleitung nach der Behandlung eines POST-Requests ist allgemein sinnvoll.


![Abbildung 148: Login mit einer Weiterleitung](/images/image366.png)


### Neue PHP Befehle

* `$_SESSION()` [PHP Doku](http://php.net/manual/en/reserved.variables.session.php)
* `$_COOKIE()` [PHP Doku](http://php.net/manual/en/reserved.variables.cookies.php)
* `header()` [PHP Doku](http://www.php.net/manual/de/function.header.php)  
* `session_name()` [PHP Doku](http://www.php.net/manual/de/function.session-name.php)
* `session_start()` [PHP Doku](http://www.php.net/manual/de/function.session-start.php)  
* `setcookie()` [PHP Doku](http://www.php.net/manual/de/function.setcookie.php)
