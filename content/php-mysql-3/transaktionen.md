---
title: Transaktionen
order: 40
---

<script>document.location="/php-db-optimierung/transactionen/";</script>

Transaktionen auf Ebene von SQL, hier am Beispiel von MySQL gezeigt.
(siehe das [MySQL Referenz Handbuch](http://dev.mysql.com/doc/refman/5.1/de/commit.html))

## ACID


Bei der Ausführung von Transaktionen muss das Transaktionssystem die ACID-Eigenschaften garantieren:

* Atomarität (*A*tomicity)
* Konsistenz (*C*onsistency) 
* Isolation (*I*solation)
* Dauerhaftigkeit (*D*urability) 

**Atomarität** bedeutet: Eine Transaktion wird entweder ganz oder gar nicht ausgeführt. 
Transaktionen sind also „unteilbar“. Wenn eine atomare Transaktion abgebrochen wird, ist das System unverändert.

**Konsistenz** bedeutet:
Nach Ausführung der Transaktion muss der Datenbestand in einer konsistenten Form sein, 
wenn er es bereits zu Beginn der Transaktion war.

**Isolation** bedeutet: Bei gleichzeitiger Ausführung mehrerer 
Transaktionen dürfen sich diese nicht gegenseitig beeinflussen.

**Dauerhaftigkeit** bedeutet:
Die Auswirkungen einer Transaktion müssen im Datenbestand dauerhaft bestehen bleiben.  Die Effekte von Transaktionen dürfen also nicht „mit der Zeit verblassen“ oder „aus Versehen verloren gehen“. 


## commit

<sql caption="Beispiel für eine Transaktion in MySQL, die zwei Einfüge-Operationen zusammenfasst">
START TRANSACTION;
INSERT INTO staff (id, first, last) 
  VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) 
  VALUES (42, 50000, NOW());
COMMIT;
</sql>

## rollback

<sql caption="Beispiel für eine Transaktion in MySQL und zurück-gerollt wird">
START TRANSACTION;
INSERT INTO staff (id, first, last) 
  VALUES (42, 'Alyssa', 'Hacker');
INSERT INTO salarychange (id, amount, changedate) 
  VALUES (42, 50000, NOW());
ROLLBACK;
-- nichts ist passiert!
</sql>

## Variablen

Im Zusammenhang mit Transaktionen macht es oft Sinn
in SQL Variablen zu verwenden. Diese beginnen mit `@`,
die Zuweisung erfolgt mit dem Operator `:=`, siehe [&rarr;](http://dev.mysql.com/doc/refman/5.6/en/user-variables.html)

<sql>
START TRANSACTION;
SELECT @A:=SUM(salary) FROM people WHERE type=1;
UPDATE report SET summary=@A WHERE type=1;
COMMIT;
</sql>


## Tipp: Nicht auf Input warten

Schlecht: 

<sql>
START TRANSACTION
-- warte auf input ... beliebig lagen
COMMIT;
</sql>

## Probleme ohne Transaktionen

Bei Datenbanken können durch mangelnde Transaktionsisolation 
die folgenden Anomalien auftreten:

* Lost Updates: Zwei Transaktionen modifizieren parallel denselben Datensatz und nach Ablauf dieser beiden Transaktionen wird nur die Änderung von einer von ihnen übernommen.
* Dirty Read: Daten einer noch nicht abgeschlossenen Transaktion werden von einer anderen Transaktion gelesen.
* Non-Repeatable Read: Wiederholte Lesevorgänge liefern unterschiedliche Ergebnisse.
* Phantom Read: Suchkriterien treffen während einer Transaktion auf unterschiedliche Datensätze zu, weil eine (während des Ablaufs dieser Transaktion laufende) andere Transaktion Datensätze hinzugefügt, entfernt oder verändert hat.

## Weniger gute Transaktionen

Mit `SET TRANSACTION ISOLATION LEVEL ...` kann eine weniger gute
Version von Transaktionen in MySQL aktiviert werden.  Die möglichen
Werte sind (laut  SQL Standard und MySQL mit InnoDB):


**Read Uncommitted** Bei diesen Isolationslevel ignorieren Leseoperationen jegliche Sperre, daher können die Anomalien Dirty Read, Non-Repeatable Read und Phantom Read auftreten.

**Read Committed** Dieses Isolationslevel setzt für die gesamte Transaktion Schreibsperren auf Objekten, die verändert werden sollen, setzt Lesesperren aber nur kurzzeitig beim tatsächlichen Lesen der Daten ein. Daher können Non-Repeatable Read und Phantom Read auftreten, wenn während wiederholten Leseoperationen auf dieselben Daten, zwischen der ersten und der zweiten Leseoperation, eine Schreiboperation einer anderen Transaktion die Daten verändert und committed.

**Repeatable Read** Bei dieser Isolationsebene ist sichergestellt, dass wiederholte Leseoperationen mit den gleichen Parametern auch dieselben Ergebnisse haben. Sowohl bei Lese- als auch bei Schreiboperationen werden für die gesamte Dauer der Transaktion Sperren gesetzt. Dies führt dazu, dass bis auf Phantom Reads keine Anomalien auftreten können.

**Serializable** Die höchste Isolationsebene garantiert, dass die Wirkung parallel ablaufender Transaktionen exakt dieselbe ist wie sie die entsprechenden Transaktionen zeigen würden, liefen sie nacheinander in Folge ab

## Warnhinweis

Viele SQL Anweisungen könnenin MySQL nicht in einer längeren Transaktion
verwendet werden, sie bilden immer eine eigene Transaktion: `ALTER`, `CREATE`, `DROP`, `RENAME`.

[&rarr;](http://dev.mysql.com/doc/refman/5.1/de/innodb-implicit-command-or-rollback.html)

