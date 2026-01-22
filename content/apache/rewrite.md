---
title: Rewrite
order: 10
---

Das Apache-Modul mod_rewrite erlaubt das Umschreiben der URL. Normalerweise verweist die URL direkt auf eine Datei im Filesystem. Dabei wird nur die Apache-Konfigurationsanweisung DocumentRoot verwendet um den Hauptordner des Servers festzulegen:

<apache>
<VirtualHost ich.multimediatechnology.at>
  DocumentRoot /home/stud007/public_html/
</VirtualHost>
</apache>

Die URL     `http://ich.multimediatechnology.at/mini/index.php` verweist auf die
Datei `/home/stud007/public_html/mini/index.php`

§

Mit mod_rewrite kann man die URL komplett von der Struktur des Filesystems trennen. Wenn man die mod_rewrite - Regeln in eine `.htaccess` -Datei im Ordner `mini` schreibt dann gelten diese Regeln natürlich nur für URLs die mit `http://ich.multimediatechnology.at/mini/` beginnen. Das Endergebnis der Umschreibung wird schließlich ganz normal als URL interpretiert.

§

<apache>
RewriteEngine On
RewriteRule ^personen$     personen.php  [L]
</apache>

Diese Datei enthält eine Regel. Jede Regel besteht aus einem Suchmuster und einer neuen Schreibweise für die URL. Die erste Regel verwandelt die URL

`http://ich.multimediatechnology.at/mini/personen` in die neue URL `http://ich.multimediatechnology.at/mini/personen.php`

§

<apache>
RewriteRule ^person/(.*)   person.php?pid=$1  [L]
</apache>

Das Suchmuster dieser Regel enthält runde Klammern. Diese dienen dazu einen Teil der URL einzufangen und später als Variable wieder zu verwenden. Damit verwandelt diese Regel die URLs


* `http://ich.multimediatechnology.at/mini/person/1`
* `http://ich.multimediatechnology.at/mini/person/2`
* `http://ich.multimediatechnology.at/mini/person/gigsi/gagsi/gugsi`

in folgende neue URLs:

* `http://ich.multimediatechnology.at/mini/person.php?pid=1`
* `http://ich.multimediatechnology.at/mini/person.php?pid=2`
* `http://ich.multimediatechnology.at/mini/person.php?pid=gigsi/gagsi/gugsi`


