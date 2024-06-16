---
title: Änderungen an der Datenbank
order: 35
---

Der erste Entwurf der Datenbank ist wahrscheinlich nicht der letzte.
Während der Entwicklung werden neue Anforderungen an die Datenbank
klar, und die Datenbank soll verändert werden.

Ein Beispiel:  Zwischen Tabelle zimmerbuchung und zimmer besteht ein
foreign key constraint:

<sql caption="ein foreign key constraint">
 \d zimmerbuchung
             Table "public.zimmerbuchung"
   Column   |  Type   | Collation | Nullable | Default
------------+---------+-----------+----------+---------
 zinr       | integer |           |          |
 buchungsnr | integer |           |          |
Foreign-key constraints:
    "zimmerbuchung_buchungsnr_fkey" FOREIGN KEY (buchungsnr) REFERENCES buchung(buchungsnr)
    "zimmerbuchung_zinr_fkey" FOREIGN KEY (zinr) REFERENCES zimmer(zinr)
</sql>

Diesem Constraint fehlt das Attribut `on delete cascade`. Wie kann man
das im Nachhinein ändern?


§

Wir könnten die betroffenen Tabellen mit `DROP TABLE` löschen
und neu anlegen.  Das funktioniert, solange noch keine wichtigen
Daten in den Tabellen sind.

Ist das Projekt aber einmal in Betrieb, dann ist diese Methode
nicht mehr möglich.  Unsere ersten Kunden finden es sicher nicht
gut wenn ihre Daten gelöscht werden.

Wir können die Datenbank also nicht löschen und neu aufbauen,
sondern müssen sie ändern.

§

Zum Ändern des Datenbank-Schemas gibt es verschieden Befehle die meist mit `ALTER`
beginnen, z.B: [ALTER TABLE](https://www.postgresql.org/docs/11/sql-altertable.html)
oder

<sql>
ALTER TABLE distributors ADD COLUMN address varchar(30);
ALTER TABLE distributors DROP COLUMN address RESTRICT;
ALTER TABLE distributors
    ALTER COLUMN address TYPE varchar(80),
    ALTER COLUMN name TYPE varchar(100);
ALTER TABLE distributors RENAME COLUMN address TO city;
...
</sql>



## Constraint entfernen und neu setzen

Mit diesen Befehlen können wir das alte Constraint entfernen,
und dann neu setzen:

<sql>
ALTER TABLE zimmerbuchung
DROP CONSTRAINT zimmerbuchung_zinr_fkey;

ALTER TABLE zimmerbuchung
add CONSTRAINT zimmerbuchung_zinr_fkey
FOREIGN KEY (zinr)
REFERENCES zimmer(zinr)
ON DELETE CASCADE;
</sql>

§

Leider gibt es nicht für Alles ein einfaches `ALTER` statement.
Wenn man eine Tabelle mit einem `PRIMARY KEY` als `INTEGER` angelegt hat
und im Nachhinein ein `SERIAL` daraus machen will ist das sehr viel Arbeit:


<sql>
-- CREATE TABLE gast (kunr INTEGER PRIMARY KEY,
CREATE SEQUENCE gast_kunr_seq OWNED BY gast.kunr;
SELECT setval('gast_kunr_seq', coalesce(max(kunr), 1)) FROM gast;
ALTER TABLE gast ALTER COLUMN kunr SET DEFAULT nextval('gast_kunr_seq');
</sql>


## Migrations

So ein kleiner Änderungs-Schritt in der Datenbank wird auch Migration genannt.
Wir müssen sicherstellen, dass die Migration sowohl auf dem Entwicklungsrechner
als auch auf dem Production-Server durchgeführt wird.
Migrations sind genau so wichtig
wie der Programmcode, und sollten auch im Versionskontrollsystem erfasst werden.

![](/images/how-to-migration.svg)

Bei Migrations ist die Reihenfolge wichtig.  Wir könnten sie
also der Reihe nach in einer Daten speichern, oder einzelne Dateien anlegen
deren Reihenfolge aus dem Dateinamen erkennbar ist, z.B:


<plain>
migration-1-add-description.sql
migration-2-foreigen-key-zimmerbuchung.sql
migration-3....
</plain>


