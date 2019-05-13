---
title: A2 - Authentifizierung
order: 20
---

Auf Platz 2 der OWASP Top 10 2017.

Rund um Authentifizierung und Session-Management treten viele Probleme auf.
Ein Angriff mittels "Credential Stuffing" ist einfach umzusetzen: ein kleines
Programm probiert automatisch das Login mit den bekanntesten Passwörtern aus.

Als BenutzerIn des Internet empfiehlt sich auf jeden Fall: neues Passwort für jedes
neue Login das ich anlege. Mit Hilfe eine [Passwort-Managers](https://prism-break.org/de/all/#password-managers).

Hier ein paar Maßnahmen, die man als EntwicklerIn auch schon im ersten PHP-Projekt umsetzen kann:

## Keine Information in Fehlermeldungen preisgeben

Authentisierung kann aus vielen Gründen fehl schlagen:

- der Username existiert gar nicht
- dieser Account ist gesperrt
- das Passwort passt nicht

Egal was die Gründe sind: die Rückmeldung an die UserIn muss immer genau gleich ausfallen:

"Login Fehlgeschlagen - Falscher Username oder Falsches Passwort"

Warum? Die Information, ob ein bestimmter Username im System exisitiert ist wertvoll! Es
ist ja bereits die Hälfte der nötigen Information für ein Login. Deswegen soll man die Existenz
von Usernamen genau so geheim halten wie die Passwörter.

## Session ID wie Passwort schützen

Das Protokoll HTTP ist stateless. Wenn man trotzdem UserInnen authentifizieren
will, dann muss bei jedem Request eine authentifizierende Information, zum Beispiel eine Session-ID,
mitgeschickt werden. Dies geschieht zum Beispiel in einem Cookie.

Wenn es gelingt diese Information abzuhören und wieder zu verwenden,
dann erhält man den gleichen Zugang wie die eigentliche UserIn. Diese
Art der Angriffs nennt man "Replay Attacke" - ein Request wird abehört und
gleich wieder verwendet.

Um Passwörter ebenso wie Session Ids und Cookies vor dem Abhören zu
schützen muss man den gesamten HTTP-Request verschlüssen - das ist über SSL/TLS möglich.
Ein weiterer Punkt wo diese Informationen eventuell aufscheinen sind Logfiles.
Auch beim Logging sollte man diese Informationen vorher ausfiltern oder verschlüsseln.

## Nicht selbst implementieren

Es ist sehr schwierig, ein sicheres Authentifizierungs- und Session-Management zu implementieren. Man sollte nicht auf eigene Lösungen setzen - Diese haben dann oft Fehler bei Abmeldung und Passwortmanagement, bei der Wiedererkennung der BenutzerInnen, bei Timeouts, Sicherheitsabfragen usw. Das Auffinden dieser Fehler kann sehr schwierig sein, besonders wenn es sich um individuelle Implementierungen handelt.

PHP liefert bereits ein fertiges Session-System.

## Passwörter nicht lesbar speichern

Passwörter sollten niemals in der Datenbank gespeichert werden.
Statt dessen wir nur ein **Hash** des Passworts gespeichert.

Beim Login wir das eingegebene Passwort dann wieder mit derselben Hash-Funktion
behandelt, und mit dem gespeicherten Wert verglichen.

PHP stellt eine geeignete Hash-Funktion zur Verfügung: [password_hash](https://www.php.net/manual/de/function.password-hash.php).

Mehr zum Speichern von Passwörtern im [OWASP Password Storage Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Password_Storage_Cheat_Sheet.md)

## Neue Session bei Login / Logout / neuen Rechten

Die "Session Fixation" Attacke funktioniert mit der Session Id. Ein Beispiel:

Alyssa P. Hacker sendet einen Link an Peter Publikum. Dieser Link führt
zur Bank von Peter Publikum, und gibt schon eine Session Id vor. Wenn sich
Peter Publikum nun bei seinem Online-Banking einloggt, die Session Id aber
gleich bleibt, dann kann Alyssa P. Hacker mit der gleichen Session die Online Banking
Seite aufrufen, und ist schon eingeloggt - als Peter Publikum.

Um diese Art der Attacke zu vermeiden muss man beim Login und Logout jeweils eine neue Session starten.

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
- Automatische Prüfung der neu eingegebenen Passwörter mit [https://haveibeenpwned.com/API/v2#SearchingPwnedPasswordsByRange der haveibeenpwned API]

Die OWAAS bietet noch mehr Informationen zu diesem Thema an
im [Authentication Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Session_Management_Cheat_Sheet.md)
und im [Session Management Cheat Sheet](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Session_Management_Cheat_Sheet.md).
