---
title: PHP und E-Mail
order: 40
---
Die Funktion zum Senden von E-Mail heißt mail:

<php>
mail(
   "bjelli@horus.at",
   "Just another SPAM",
   "Das ist der Text in der E-Mail"
);
</php>

Dazu passend wieder der "Here-Document" Trick, viel Text in einen langen String zu schreiben:

<php>
$text <<<Ende
   Lieber Newsletter-Kunde!
   wir freuen uns, dass Sie unseren
   Newsletter zum Thema $thema
   abonniert haben.
Ende;
mail("bjelli@horus.at", "Just another $thema-Newsletter", $text);
</php>

Wenn man englische Überschriften und Texte versendet ist das schon gut genug.
Für andere Sprachen und Emojis braucht man encoding für die Überschrift
und ein paar zusätzliche Header:


<php>
function mail_utf8($to, $subject, $message)
{
    $encoded_subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=utf-8",
        "Content-Transfer-Encoding: 8bit"
    ];

    return mail($to, $encoded_subject, $message, implode("\r\n", $headers));
}
</php>


Wie die Mail vom PHP-Interpreter versandt wird, ist in der PHP- Konfiguration festgelegt. Die Konfigurations-Datei hat den Namen php.ini. Wenn man PHP auf dem eigenen Computer betreibt, kann man den SMTP-Server des Providers eintragen um die ausgehende Mail über diesen Server zu versenden:

<php>
;;;;;;;;;;;;;;;;;;;
; Module Settings ;
;;;;;;;;;;;;;;;;;;;

[mail function]
SMTP = mail.provider.at
sendmail_from = someuser@fh-salzburg.ac.at
</php>

Der Befehl `phpinfo()` gibt die ganze Konfiguration von PHP aus. Hier kann man auch die Mail-Konfiguration nachlesen:
`sendmail_from`, `sendmail_path`, `SMTP` und `smpt_port` - siehe [Dokumentation](https://www.php.net/manual/en/mail.configuration.php).


![Abbildung 138: Konfiguration von PHP für Mail](/images/php/php-info-mail-config.png)



