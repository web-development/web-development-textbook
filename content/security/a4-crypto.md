---
title: A04 - Cryptographic Failures
order: 40
---

Auf [Platz 4 der OWASP Top 10 2025: Cryptographic Failures](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/).

Fehler bei der Verschlüsselung oder fehlende Verschlüsselung kann dazu führen,
dass sensible Daten zugänglich werden.

## Maßnahmen

1. Klassifizierung der Daten die verarbeitet, gespeichert oder übertragen werden. Welche Daten sind aufgrund von Datenschutzgesetzen, behördlichen Vorschriften oder Geschäftsanforderungen sensibel?
2. Sicherstellen, dass vertrauliche Daten bei der Übertragung („in transit“) und Speicherung („at rest“) durch geeignete Verschlüsselung geschützt werden.
3. Kein unnötiges Speichern vertraulicher Daten. Löschung nicht mehr benötigter Daten. Daten, die es nicht gibt, können auch nicht gestohlen werden.
4. Sicherstellen, dass starke Algorithmen und Schlüssel verwendet werden.
5. Sicherstellen, dass Passwörter mit einem speziell für Passwortschutz entwickelten Algorithmus gespeichert werden.


## Starke Algorithmen?

Was passiert, wenn ich das nicht tue, sondern einen veralteten Algorithmus verwende?

### sha1 ist ein schwacher Algorithmus

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

### Suche nach dem gehashten Passwort

Nimmt man die gehashte Passwort-Zeichenkette
des Admin-Users und googelt danach, findet man direkt diese Seite:


![](/images/security/sha1.png)

![](/images/security/sha2.png)


Mehr zum Speichern von Passwörtern im [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)


### Beispiel Passwort Hash

Auch wenn man noch nichts über Kryptographie weiß, kann man mit dem Befehl
`password_hash` in PHP garantiert einen guten Algorithmus verwenden. Als erstes Argument
pbergibt man das Passwort, als zweites Argument den Namen des Algorithmus:

```php
password_hash("asecret", PASSWORD_ARGON2I);
```

Der Rückgabewert ist ein String aus mehreren Teilen:

`$argon2i$v=19$m=65536,t=4,p=1$M3JZTjdOclg3MHRWZ0FSWA$1LPV3a8PHAuERq4JmwU8U0+/IfdkoR/LwfgI/PMuCUk`


### Salt

Wenn man die Funktion mehrmals aufruft erhält man jedes Mal einen anderen Rückgabewert:

<php>
echo password_hash("asecret", PASSWORD_ARGON2I);
echo password_hash("asecret", PASSWORD_ARGON2I);
echo password_hash("asecret", PASSWORD_ARGON2I);
</php>

Beispiel-Output:

```
$argon2i$v=19$m=65536,t=4,p=1$Vmo0MVVlWldObVouZ01VNA$owNwQm+Ggyk316rRT1g4tgCh0QGGipdD4ynhZm93eYw
$argon2i$v=19$m=65536,t=4,p=1$MTUvaFVvaGNseGtxenk4Zg$GeVAk7HfgRxxablh4Qg90mFDH+LwKLUPYv30o50XPJ8
$argon2i$v=19$m=65536,t=4,p=1$MWl2ZmFPa3EvUVE0cXJySA$BzgSMLJtD3rLB2j7oX/EL06QZ+saa8yCyA4WuNu9FxI
```

Den Output kann man entlanger der Dollar-Zeichen zerlegen. Dann sieht man, dass der Algorithmus und die Parameter für alle drei Aufrufe gleich sind:

|Algorithums|Parameter|Parameter|Random Salt|Hashed Value|
|argon2i|v=19|m=65536,t=4,p=1|`Vmo0MVVlWldObVouZ01VNA`|`owNwQm+Ggyk316rRT1g4tgCh0QGGipdD4ynhZm93eYw`|
|argon2i|v=19|m=65536,t=4,p=1|`MTUvaFVvaGNseGtxenk4Zg`|`GeVAk7HfgRxxablh4Qg90mFDH+LwKLUPYv30o50XPJ8`|
|argon2i|v=19|m=65536,t=4,p=1|`MWl2ZmFPa3EvUVE0cXJySA`|`BzgSMLJtD3rLB2j7oX/EL06QZ+saa8yCyA4WuNu9FxI`|
{: class="table table-condensed table-bordered" style="width:auto"}

Der Wert "Random Salt" wird bei jedem Aufruf von `password_hash` zufällig erzeugt, und mit dem Passwort konkatiniert. Das Ergebnise wird dann mit der Hash-Funktion behandelt.

So ist gewährleistet, dass der Output jedes Mal anders aussieht, und es um ein vielfaches teurer wird eine vollständige Tabelle aller möglichen Passwörter und Hash-Werte zu erzeugen.

### Passwort verifizieren



<php>
function check_login($username, $password) {
    global $dbh;

    $statement = $dbh->prepare("SELECT * FROM users WHERE username=?");
    $ok = $statement->execute([$username]);
    if(! $ok) return null;

    $user = $statement->fetch(PDO::FETCH_OBJ);

    if(! $user) return null;

    if (password_verify($password, $user->hashedpassword)) {
        return $user;
    } else {
        return null;
    }
}
</php>



## Beispiel https

Um die HTTP Verbindung zu verschlüsseln brauchen wir das Protokoll TLS
und ein Zertifikat.

- [letsencrypt.org](https://letsencrypt.org/)
- [SSL Server Test](https://www.ssllabs.com/ssltest/)

Wenn man den Webserver installiert und konfiguriert muss man das wissen und richtig machen.

