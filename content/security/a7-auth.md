---
title: A7 - Identification and Authentication Failures
order: 40
---

Auf [Platz 7 der OWASP Top 10 2021: Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/).

Rund um die Identifizierung und Authentifizierung und das Session-Management treten viele Probleme auf.

Ein Angriff mittels "Credential Stuffing" ist einfach umzusetzen: ein kleines
Programm probiert automatisch das Login mit den bekanntesten Passwörtern aus.

Als Benutzer*in des Internet empfiehlt sich auf jeden Fall: neues Passwort für jedes
neue Login das ich anlege. Mit Hilfe eine [Passwort-Managers](https://prism-break.org/de/all/#password-managers).

Hier ein paar Maßnahmen, die man als Entwickler*in auch schon im ersten PHP-Projekt umsetzen kann:

## Keine Information in Fehlermeldungen preisgeben

Authentisierung kann aus vielen Gründen fehl schlagen:

- der Username existiert gar nicht
- dieser Account ist gesperrt
- das Passwort passt nicht

Egal was die Gründe sind: die Rückmeldung an die User*in muss immer genau gleich ausfallen:

"Login Fehlgeschlagen - Falscher Username oder Falsches Passwort"

Warum? Die Information, ob ein bestimmter Username im System exisitiert ist wertvoll! Es
ist ja bereits die Hälfte der nötigen Information für ein Login. Deswegen soll man die Existenz
von Usernamen genau so geheim halten wie die Passwörter.


## Weg mit alten Passwort Regeln

Oft werden strenge Passwort Regeln verwendet:

"Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben, ein Sonderzeichen und zwei verscheidene Ziffern enthalten und darf nicht länger als 8 Zeichen sein"

Diese Regeln sind veraltet.  So empfiehlt das amerikanische National  Institute of Standards and Technology seit 2017 in [NIST 800-63 ](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecret):

* Passwörter sollen mindestens 8 oder mehr Zeichen lang sein
* Passwörter sollen bis zu 64 Zeichen lang sein können
* "Bekannte" Passwörter sollen verboten sein. Das kann man z.B. mit [der haveibeenpwned API](https://haveibeenpwned.com/API/v2#SearchingPwnedPasswordsByRange) implementieren
* Es soll **keine weiteren  Regeln** für die Zusammensetzung des Passworts geben (z.b. nicht verlangen, dass es verschiedene Zeichentypen enthält, kein Verbot von Zeichen-Wiederholungen)
* Es soll keinen Zwang geben das Passwort ohne Anlass zu Ändern. Ein guter Anlass ist wenn das Passwort öffentlich wurde.

Siehe auch


* [The Password Game](https://neal.fun/password-game/)
* Kelley, Patrick Gage, Saranga Komanduri, Michelle L Mazurek, Richard Shay, Timothy Vidas, Lujo Bauer, Nicolas Christin, Lorrie Faith Cranor, and Julio Lopez. 2012. “**Guess Again (and Again and Again): Measuring Password Strength by Simulating Password-Cracking Algorithms.”** In 2012 IEEE Symposium on Security and Privacy, 523–537. [https://doi.org/10.1109/SP.2012.38](https://doi.org/10.1109/SP.2012.38).
* Weir, Matt, Sudhir Aggarwal, Michael Collins, and Henry Stern. 2010. **“Testing Metrics for Password Creation Policies by Attacking Large Sets of Revealed Passwords.”** In Proceedings of the 17th ACM Conference on Computer and Communications Security, 162–175. CCS ’10. New York, NY, USA: Association for Computing Machinery. ISBN: 9781450302456. [https://doi.org/10.1145/1866307.1866327](https://doi.org/10.1145/1866307.1866327)

## Session ID wie Passwort schützen

Das Protokoll HTTP ist stateless. Wenn man trotzdem User*innen authentifizieren
will,  muss bei jedem Request eine authentifizierende Information, zum Beispiel eine Session-ID,
mitgeschickt werden. Dies geschieht zum Beispiel in einem Cookie.

Wenn es gelingt diese Information abzuhören und wieder zu verwenden,
dann erhält man den gleichen Zugang wie die eigentliche UserIn. Diese
Art der Angriffs nennt man "Replay Attacke" - ein Request wird abgehört und
gleich wieder verwendet.

Um Passwörter ebenso wie Session Ids und Cookies vor dem Abhören zu
schützen muss man den gesamten HTTP-Request verschlüssen - das ist über SSL/TLS möglich.

Ein weiterer Punkt wo diese Informationen eventuell aufscheinen sind Logfiles.
Auch beim Logging sollte man diese Informationen vorher ausfiltern oder verschlüsseln:


## Nicht selbst implementieren

Es ist sehr schwierig, ein sicheres Authentifizierungs- und Session-Management zu implementieren. Man sollte nicht auf eigene Lösungen setzen - Diese haben dann oft Fehler bei Abmeldung und Passwortmanagement, bei der Wiedererkennung der Benutzer*innen, bei Timeouts, Sicherheitsabfragen usw. Das Auffinden dieser Fehler kann sehr schwierig sein, besonders wenn es sich um individuelle Implementierungen handelt.

PHP liefert nur ein Session-System. Frameworks wie [Symphony](https://symfony.com/doc/current/security.html#c-encoding-passwords) oder [Laravel](https://laravel.com/docs/7.x/authentication) liefern
fertige Lösungen für den gesamten Login Prozess.


## Selbst implementieren: Passwörter speichern

Passwörter sollten niemals im Klartext in der Datenbank gespeichert werden.
Statt dessen wir nur ein **Hash** des Passworts gespeichert.

Beim Login wir das eingegebene Passwort dann wieder mit derselben Hash-Funktion
behandelt, und mit dem gespeicherten Wert verglichen.

PHP stellt eine geeignete Hash-Funktion zur Verfügung: [password_hash](https://www.php.net/manual/de/function.password-hash.php).


### starke Algorithmen?

Was passiert, wenn ich nicht `password_hash`, sondern einen veralteten Algorithmus verwende?
Ein Beispiel aus einem Projekt: hier wurde der Algorithmus `sha1`
verwendet um das Passwort zu verschleiern, wenn sich jemand
versucht einzuloggen wird das so geprüft:

<php>
$passwordhashed = sha1($password);

$stmt = $db->prepare('SELECT * FROM `users` WHERE username = ? AND password = ?');
$stmt->execute(array($username, $passwordhashed));
</php>

In der Datenbank sehen die Daten so aus:

<plain>
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'student', '08df1a7479ca768d03481fb6534ebe844cc2a2d5'),
(2, 'admin', 'dd94709528bb1c83d08f3088d4043f4742891f4f');
</plain>

Das sieht ja erst mal gut aus: falls diese Datenbank in falsche Hände gerät
sind die Passwörter nicht direkt lesbar.


### sha1 ist ein schwacher Algorithmus

Nimmt man den gehashten Passwort String
des admin-users, und googelt danach, so findet man direkt diese Seite:


![](/images/security/sha1.png)

![](/images/security/sha2.png)


Mehr zum Speichern von Passwörtern im [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

## Neue Session bei Login / Logout / neuen Rechten

Die "Session Fixation" Attacke funktioniert mit der Session ID. Ein Beispiel:

Alyssa P. Hacker sendet einen Link an Peter Publikum. Dieser Link führt
zur Bank von Peter Publikum, und gibt schon eine Session ID vor. Wenn sich
Peter Publikum nun bei seinem Online-Banking einloggt, die Session ID aber
gleich bleibt, dann kann Alyssa P. Hacker mit der gleichen Session die Online Banking
Seite aufrufen, und ist schon eingeloggt - als Peter Publikum.

Um diese Art der Attacke zu vermeiden kann man beim Login und Logout jeweils eine neue Session starten.

In PHP geht das mit folgenden Befehlen:

<php caption="neue Session starten nach erfolgreichem Login">
  session_start();
  session_regenerate_id();
  session_destroy();
  unset($_SESSION);
  session_start();
</php>

## Mehr

Komplexere Maßnahmen wären:

- Zwei Faktor Authentisierung
- Automatische Prüfung der neu eingegebenen Passwörter mit der "Have I Been Pwned" API, z.B. mit [hibp-php](https://packagist.org/packages/icawebdesign/hibp-php)

Die OWAAS bietet noch mehr Informationen zu diesem Thema an
im [Authentication Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Session_Management_Cheat_Sheet.md)
und im [Session Management Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Session_Management_Cheat_Sheet.md).
