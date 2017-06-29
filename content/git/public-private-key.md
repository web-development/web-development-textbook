---
title: Public und Private Key
order: 25
---

Sie kennen Passwörter als eine Methode, wie Sie sich am Computer "ausweisen" können:
wie Sie beweisen können, dass Sie die Person sind, die Zugriff auf den Server haben soll.

Für git wird statt eines Passworts meist ein Schlüsselpaar verwendet. Um
das zu verstehen hier ein kurzer Einblick in 
Asymmetrische Kryptosysteme.


## Public Key Cryptography

Klassische Verschlüsselung kennt nur einen Schlüssel: er wird
zum ver- und zum ent-schlüsseln verwendet.  Das ist eigentlich unpraktisch:
wenn ich ein Problem habe eine lange Botschaft ohne Abhören oder Manipulation von A nach B zu bringen,
und sie deswegen verschlüssle, dann ist mir ja nicht geholfen: jetzt muss ich erst
den geheimen Schlüssel sicher (ohne Abhören oder Manipulation) von A nach B bringen. Das Problem
hat jetzt einen kleinern Umfang, aber das Grundproblem bleibt bestehen.

Bei einem asymmetrischen Verschlüsselungsverfahren gibt es zwei verschiedene
Schlüssel: einen Öffentlichen und einen Privaten:

![Ver- und Entschlüsseln](/images/public_key_crypto.svg)

Diese Art der Verschlüsselung wird im Internet z.B. für die Verschlüsselung
und Signierung von E-Mail mit [GPG](https://de.wikipedia.org/wiki/GNU_Privacy_Guard) verwendet,
oder für die Authentifizierung beim Login mit [SSH](https://de.wikipedia.org/wiki/Ssh). 

## Authentisierung für SSH mit private und public key

SSH bezeichnet sowohl ein Netzwerkprotokoll als auch entsprechende Programme, 
mit deren Hilfe man eine verschlüsselte Netzwerkverbindung mit einem entfernten 
Gerät herstellen kann. Häufig wird diese Methode verwendet, um lokal eine entfernte 
Kommandozeile verfügbar zu machen, z.B. zur Fernwartung eines in einem entfernten Rechenzentrum stehenden Servers. 

Die Authentisierung kann dabei entweder über ein Passwort oder mit private/public keys erfolgen.

![Authentisierung für SSH mit private/public key](/images/ssh_login_with_public_key.svg)


§


Das "Schüsselpaar" kann man jederzeit selbst erzeugen: mit dem Kommandozeilen-Programm
ssh-keygen:

<shell caption="Erzeugung eines Schlüsselpaares">
$ ssh-keygen -t rsa -C "vmustermann.mmt-b2014@fh-salzburg.ac.at"
# Erzeugt ein neues Schlüsselpaar, verwendet die E-Mail Adresse in der Beschriftung
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/verena/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase):
Your identification has been saved in /Users/verena/.ssh/id_rsa.
Your public key has been saved in /Users/verena/.ssh/id_rsa.pub.
The key fingerprint is:
f3:e8:11:fb:d7:87:db:9d:31:54:be:46:8c:05:cf:b0 vmustermann.mmt-b2014@fh-salzburg.ac.at
The key's randomart image is:
+--[ RSA 2048]----+
|             o   |
|              *  |
|             E +.|
|              +..|
|        S    . +.|
|         *    o .|
|        + .  . * |
|       . o  . +.*|
|        . ..  .+o|
+-----------------+
</shell>

§


Das Endergebnis sind zwei Dateien: `id_rsa` enthält den privaten Schlüssel,
`id_rsa.pub` den öffentlichen Schlüssel.  Beide Schlüssel könnne in einem Text-Editor
betrachtet werden: der private Schlüssel besteht aus einem großen Text-Block
innerhalb von zwei Zeilen mit vielen Minus-Zeichen:


<plain caption="Beispiel für einen Privaten Schlüssel">
-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEAy4h50jvgZcVBC4rrc1Q3ooxgPZA74oTtQDXMKkGUSMEJQbZ9
HzWfJ6d3HSpluSmCcwxI7tkX7v6lRjCz09xtHFq21agTJWJ8P2YqqNpd7Bda36xf
5q8Px8cAYbAKr9sNT8cw6cZBKjGaBqaa7arzcBeQjmB1jqe7CtL1nUexTjWIS8iu
Xuh7QoECdmf01/Sx19lAzM1w8YtRrBT15K7O97fmGArOfTgWC48+vIiMxj91MPK0
LcYinvxdbrY7qaI4bF7+KouiJeIfyjVycXINNAYDAhbj+Im1UYBz1T6VqnIIMpMz
4Ga+Rtf3AnkIYYmtTLkvc68H5MEoryrtyjZQCwIDAQABAoIBAQCrRNCeJFyTxwUR
HXk7tyaJ1e42X+TEnG64lYyUElMhVa7gaRuo44pl5/nHxSGMSm3HOhM1SeFl70pM
YjcwlFAMiBlKeQCDePhssSA8rmRSguSpS3f3umBhEAg2K9kSWhY9h7SVQ4saYlrm
NdQxIqVvMaUm6eyCeopedV7RVr7Qu6JeQuzGoIL5VyUu52MJ0/kQNhW99jscyE2d
Z3VOIKBd0FCziI8n1+39b+OTUbeSTB6dxJweQkvFm0fvwgyE/5E2tVQRgFk2zrFc
RfJ8b1GfRRdHkfwJmRC40l4GPpd6bba01U8SLowhxjOx7BXZQB/L5Psj8FQh/22q
tzFWzaDBAoGBAPNWFtetmZZWhKzB+Xc18QedGnEjnVHUXpJptPgXF/1GJ4+QXKEq
3Uew//UT1odNXeAbpUz6OuR5FRbMofNJHNjdjdb8viVlO9DiSkqlwPJgvREF0n2M
wPh9CnaLR7ZIhUo3gqLCBH8fxZ8CHWrdaHqfm27FjufJWAqU/8gFxWoJAoGBANYg
GTZeD5Z2ZuLVEmbmVNTvfglCYDoPn2nM6E6DAp1WppIwvPai7Su6GmCmbJAVd+gJ
iKCCE4Yn80hKR4xcFTFBuoFoRaXw1agJxYrA0i8Ne9Qy7RgaK/SU3nWlL+f5kNx+
u1uWwQbVb1hahrHS1MjuHrRA9yUg1aZ+kBpIbb5zAoGAMS6PQ1xlFIu8GSbDgyK1
6rIILCHkpCtmSfVvjE0unhRV3qBw+Gove1P9B83QqFwswyUTTfGtgYwvhQIrIX7/
g52UE4XV8Lz7UAbMuTWzP8nprM0edB3EyvSK7tbL0b3qosuBbeAFBKSpTrAgvf6u
JUqpIcRwU8zQLKNc51KzSfECgYEAj+wPRj2+2HFJAloY/lT+3AkFfA/DQgNSMPjr
hCoGzd56I3Ti7hvgsi1qoV/7RHVJnQsbbFdB7EBaA1L5+FvEWtFFHMoLVlgkI8g9
oN+t5rZ3bs+0ESk2NjUBua2IH7HdLnd4Uz1nDMLVDlv6gPem0k9LD/lCpRAGytvy
29em/AUCgYEAj+6NEIj9XWuYccXhimvJxFDRGqYybQyBK5DH+4ceg2IpZMM00lpG
eHBMzHcPRALwg3sYNuIIDNTC2HXuf5SGgOQJcZoURoh+CbnjZ1bpJD9djIOMx/zK
BLzFeSXDV4AkIdRxvganwBIV1FZFQRPfR9miuRUagMkwT6/LLBxhlJE=
-----END RSA PRIVATE KEY-----
</plain>

Der öffentliche Schlüssel bestezt aus einer einzigen Zeile Text, mit
der E-Mail Adresse am Ende der Zeile:

<plain caption="Beispiel für den dazu gehörigen öffentlichen Schlüssel">
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDLiHnSO+BlxUELiutzVDeijGA9kDvihO1ANcwqQZRIwQlBtn0fNZ8np3cdKmW5KYJzDEju2Rfu/qVGMLPT3G0cWrbVqBMlYnw/Ziqo2l3sF1rfrF/mrw/HxwBhsAqv2w1PxzDpxkEqMZoGpprtqvNwF5COYHWOp7sK0vWdR7FONYhLyK5e6HtCgQJ2Z/TX9LHX2UDMzXDxi1GsFPXkrs73t+YYCs59OBYLjz68iIzGP3Uw8rQtxiKe/F1utjupojhsXv4qi6Il4h/KNXJxcg00BgMCFuP4ibVRgHPVPpWqcggykzPgZr5G1/cCeQhhia1MuS9zrwfkwSivKu3KNlAL vmustermann.mmt-b2014@fh-salzburg.ac.at
</plain>

Um das Einloggen am Server zu ermöglichen muss man den öffentlichen Schlüssel als
Datei `~/.ssh/authorized_keys` installieren, bzw. falls die Datei schon besteht
als zusätzliche Zeile an die Datei anfügen.

## Authentisierung für gitlab mit private und public key

SSH wird als Übertragungsprotokoll bei der Kommunikations
mit einem entfernen Git-Repository verwendet. Somit wird
auch die Authentifizierung von SSH mit private und public key verwendet.

Die Konfiguration am Client (Ihrem Rechner) bleibt dabei gleich wie bei
SSH: der private Key liegt als Datei `.ssh/id_rsa` in Ihrem Homeverzeichnis.

Die Installation am Server wird mit gitlab etwas anders als bei ssh alleine:
Sie verwenden die Web-Oberfläche von Gitlab um den Schlüssel hoch zu laden:

![public key hochladen auf gitlab](/images/gitlab-public-key.png)


## Weiterführende Literatur

* [Asymmetrisches Kryptosystem](https://de.wikipedia.org/wiki/Asymmetrisches_Kryptosystem) in der Wikipedia 
* [Public-key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) in der Englischen Wikipedia 
* [Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys) - englischsprachige Erklärung speziell für github
