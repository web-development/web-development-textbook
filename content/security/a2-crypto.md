---
title: A2 - Cryptographic Failures
order: 15
---

Auf [Platz 2 der OWASP Top 10 2021: Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/).

Fehler bei der Verschlüsselung oder fehlende Verschlüsselung kann dazu führen
dass sensible Daten zugänglich werden.

## Maßnahmen

1. Klassifizierung der Daten die verarbeitet, gespeichert oder übertragen werden. Welche Daten sind aufgrund von Datenschutzgesetzen, behördlichen Vorschriften oder Geschäftsanforderungen sensibel?
2. Sicherstellen, dass vertrauliche Daten bei der Übertragung ("in transit") und Speicherung ("at rest")  durch geeignet Verschlüsselung geschützt werden.
3. Kein unnötiges Speichern vertraulicher Daten. Löschung nicht mehr benötigter Daten. Daten, die es nicht gibt, können auch nicht gestohlen werden.
4. Sicherstellen, dass starke Algorithmen und Schlüssel verwendet werden.
5. Sicherstellen, dass Passwörter mit einem speziell für Passwortschutz entwickelten Algorithmus gespeichert werden.


## Starke Algorithmen?

Was passiert, wenn ich das nicht tue, sondern einen veralteten Algorithmus verwende?

### Beispiel Passwort Hash

Auch wenn man noch nichts über Kryptographie weis, kann man mit dem Befehl
`password_hash` in PHP garantiert einen guten Algorithmus verwenden.

Ein Beispiel aus einem Projekt: hier wurde der Algorithmus `sha1`
verwendet um das Passwort zu verschleiern. Wenn sich jemand
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

### Beispiel https

Um die HTTP Verbindung zu verschlüsseln brauchen wir das Protokoll TLS
und ein Zertifikat.

- [letsencrypt.org](https://letsencrypt.org/)
- [SSL Server Test](https://www.ssllabs.com/ssltest/)

Wenn man den Webserver installiert und konfiguriert muss man das wissen und richtig machen.

