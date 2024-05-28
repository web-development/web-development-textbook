---
title: Indexes
order: 20
---

Mit `\timing` kann man in `psql` einschalten, dass die Zeit für die Abfrage angezeigt wird:

<sql caption="Eine Abfrage mit timing">
select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips limit 10;
 vendorid | tpep_pickup_datetime | passenger_count
----------+----------------------+-----------------
        1 | 2019-01-01 00:46:40  |               1
        1 | 2019-01-01 00:59:47  |               1
        2 | 2018-12-21 13:48:30  |               3
        2 | 2018-11-28 15:52:25  |               5
        2 | 2018-11-28 15:56:57  |               5
        2 | 2018-11-28 16:25:49  |               5
        2 | 2018-11-28 16:29:37  |               5
        1 | 2019-01-01 00:21:28  |               1
        1 | 2019-01-01 00:32:01  |               1
        1 | 2019-01-01 00:57:32  |               2
(10 rows)

Time: 0.296 ms
</sql>

§

Hier sortieren wir die Tabelle nach einer Integer-Spalte:

<sql caption="Eine Abfrage die sehr lange dauert">
select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
 vendorid | tpep_pickup_datetime | passenger_count
----------+----------------------+-----------------
        2 | 2019-01-21 03:46:51  |               9
        2 | 2019-01-30 18:34:12  |               9
        2 | 2019-01-13 04:13:24  |               9
        2 | 2019-01-19 16:45:25  |               9
        2 | 2019-01-05 13:12:29  |               9
        2 | 2019-01-21 19:20:28  |               9
        2 | 2019-01-07 03:19:36  |               9
        2 | 2019-01-10 00:43:10  |               9
        2 | 2019-01-05 13:12:29  |               9
        2 | 2019-01-30 22:17:51  |               9
(10 rows)

Time: 2785.204 ms (00:02.785)
</sql>

Warum dauert diese Abfrage so lange?

## Query Planner und EXPLAIN

SQL ist eine deklarative Programmiersprache, d.h. wir beschreiben nur
welche Daten wir haben wollen, aber nicht wie diese Daten gefunden werden.

Der **Query Planner** setzt die deklarative Beschreibung um in ein
imperatives Programm, das die Daten wirklich lädt.

Mit dem Befehl `EXPLAIN` können wir sehen was der Query Planner plant:

<sql>
explain select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 Limit ...
   ->  Sort  ...
         Sort Key: passenger_count DESC
         ->  Seq Scan on taxi_trips  ...
(4 rows)
</sql>

Was können wir aus dem Plan herauslesen:

* zum Schluss werden mit LIMIt nur 10 Zeilen ausgegeben
* davor muss ortiert werden, und zwar nach der Spalte `passenger_count`**Seq Scan**
* und afür muss mit **sequential scan** jede Zeile der angesehen werden.

§

Mit dem Plan wird auch schon eine Abschätzung gemacht, wie lange die Abfrage dauern wird.
Dafür verwendet der Query Planner Informationen wie die Anzahl der Zeilen (`rows`) in einer Tabelle
oder Information über den Datentyp  der Spalten und ihren Platzbedarf (`width`):

<sql>
explain select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 Limit  (... rows=10 width=16)
   ->  Sort  (... rows=15335369 width=16)
         Sort Key: passenger_count DESC
         ->  Seq Scan on taxi_trips  (... rows=15335369 width=16)
(4 rows)
</sql>

§

Der Query Planner schätz die Gesamt-Kosten mit fikiven Zahle ab (keine Sekunden oder Millisekunden).


<sql>
explain select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 Limit  (cost=729549.50..729549.53 rows=10 width=16)
   ->  Sort  (cost=729549.50..767887.92 rows=15335369 width=16)
         Sort Key: passenger_count DESC
         ->  Seq Scan on taxi_trips  (cost=0.00..398157.69 rows=15335369 width=16)
(4 rows)
</sql>

Die angegeben Kosten sind fiktive Zahlen, keine Sekunden oder Millisekunden.


## EXPLAIN ANALYZE

Die Query `EXPLAIN ANALYZE` führt dann die Abfrage wirklich durch, und misst wie
lange es wirklich gedauert hat (in Millisekunden) und wie viel Hauptspeicher dafür benutzt wurde:

<sql>
explain analyze select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                                              QUERY PLAN
---------------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=729549.50..729549.53 rows=10 width=16) (actual time=3732.133..3732.134 rows=10 loops=1)
   ->  Sort  (cost=729549.50..767887.92 rows=15335369 width=16) (actual time=3732.131..3732.132 rows=10 loops=1)
         Sort Key: passenger_count DESC
         Sort Method: top-N heapsort  Memory: 25kB
         ->  Seq Scan on taxi_trips  (cost=0.00..398157.69 rows=15335369 width=16) (actual time=0.045..2355.460 rows=15335584 loops=1)
 Planning time: 0.161 ms
 Execution time: 3732.223 ms
</sql>

Welcher Sortier-Algorithmus wurde verwendet?

Was könnte man tun, um diese Abfrage zu beschleunigen?

## Index erzeugen

Die Antwort ist: wir könnten einen sortieren Baum verwenden, der nach den  Werte von passenger_count sortiert
ist und auf die ganzen Datensätze verweist.

Das nennt man in SQL einen Index. Er wird so erzeugt:

<sql>
CREATE INDEX passenger_count_idx ON taxi_trips(passenger_count);
Time: 27368.964 ms (00:27.369)
</sql>

Man muss also nicht wissen wie ein Baum funktioniert, man muss nur sagen:
ich will dass die Spalte `passenger_count` irgendwie schneller Abgefragt werden kann.

§

Ist die Abfrage nun wirklich schneller?

<sql>
select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
 vendorid | tpep_pickup_datetime | passenger_count
----------+----------------------+-----------------
        2 | 2019-01-30 22:17:51  |               9
        2 | 2019-01-30 18:34:12  |               9
        2 | 2019-01-21 19:20:28  |               9
        2 | 2019-01-21 03:46:51  |               9
        2 | 2019-01-19 16:45:25  |               9
        2 | 2019-01-13 04:13:24  |               9
        2 | 2019-01-10 00:43:10  |               9
        2 | 2019-01-07 03:19:36  |               9
        2 | 2019-01-05 13:12:29  |               9
        2 | 2019-01-30 22:17:51  |               9
(10 rows)

Time: 4.103 ms
</sql>

Zur Erinnerung: das war ohne Index `Time: 2785.204 ms (00:02.785)`

§

Wie sieht der neue Query Plan aus?

Zur Erinnerung: das war der Query Plan ohne Index:

<sql>
explain select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                    QUERY PLAN
-----------------------------------------------------------------------------------
 Limit  (cost=729549.50..729549.53 rows=10 width=16)
   ->  Sort  (cost=729549.50..767887.92 rows=15335369 width=16)
         Sort Key: passenger_count DESC
         ->  Seq Scan on taxi_trips  (cost=0.00..398157.69 rows=15335369 width=16)
(4 rows)
</sql>

So sieht der  Query Plan mit Index aus:

<sql>
explain select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                                        QUERY PLAN
---------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.43..1.20 rows=10 width=16)
   ->  Index Scan Backward using passenger_count_idx on taxi_trips  (cost=0.43..1172028.16 rows=15335742 width=16)
</sql>


**Index Scan Backward** heisst also: wir verwenden den bestehenden Index (=Baum) um Rückwärts (absteigend) die
Werte von passenger_count auszulesen.  Wenn wir 10 gefunden haben brechen wir ab.

§

Zu Erinnerung: so sah `EXPLAIN ANALYZE` ohne Index aus:

<sql>
explain analyze select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                                              QUERY PLAN
---------------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=729549.50..729549.53 rows=10 width=16) (actual time=3732.133..3732.134 rows=10 loops=1)
   ->  Sort  (cost=729549.50..767887.92 rows=15335369 width=16) (actual time=3732.131..3732.132 rows=10 loops=1)
         Sort Key: passenger_count DESC
         Sort Method: top-N heapsort  Memory: 25kB
         ->  Seq Scan on taxi_trips  (cost=0.00..398157.69 rows=15335369 width=16) (actual time=0.045..2355.460 rows=15335584 loops=1)
 Planning time: 0.161 ms
 Execution time: 3732.223 ms
</sql>

Und so sieht es mit Index aus:

<sql>
explain analyze select vendorid,tpep_pickup_datetime,passenger_count from taxi_trips order by passenger_count desc limit 10;
                                                                              QUERY PLAN
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=0.43..1.20 rows=10 width=16) (actual time=0.048..0.115 rows=10 loops=1)
   ->  Index Scan Backward using passenger_count_idx on taxi_trips  (cost=0.43..1172028.16 rows=15335742 width=16) (actual time=0.047..0.113 rows=10 loops=1)
 Planning time: 0.064 ms
 Execution time: 0.130 ms
</sql>

## Die Datenstruktur hinter dem Index: B-Baum

Das Anlegen eines Index mit  `CREATE INDEX` erzeugt eine zusätzliche
Datenstruktur: einen [B-Baum](https://de.wikipedia.org/wiki/B-Baum).

![B-Baum](/images/php-db-optimierung/b-baum.svg)

Der B-Baum ist sortiert, ausbalanziert, und seine Knoten haben jeweils **viele**
Kinder. (das B steht also nicht für binär!)

Mit dem Wissen über die Datenstruktur gewinnen wir ein besserer Verständnis für
die Fähigkeiten und Grenzen eines Index:

* Ein Index bedeutet immer zusätzliche Arbeit beim Einfügen, beim Löschen, ...
* das Auslesen kann in logarithmischer Zeit erfolgen
* ...

Besonders effizient ist der Index wenn alle Daten der Abfrage schon
direkt im Baum gespeichert sind, und nicht nochmal separat gelesen werden müssen:

<sql>
SELECT vendorid,tpep_pickup_datetime,passenger_count FROM taxi_trips ORDER BY yes_rsvp_count DESC LIMIT 10;
SELECT passenger_count FROM events ORDER BY taxi_trips DESC LIMIT 10;
</sql>

Die erste Abfrage braucht einen Zugriff auf die vollständigen Daten der Tabelle um
name und time auszulesen. Die zweite Abfrage findet alle nötigen Daten direkt im Index.

Manche Datenbank bieten die Möglichkeit zusätzliche Attribute in den Index aufzunehmen,
um einen "covering index" zu erzeugen:

<sql>
# CREATE INDEX yes_rsvp_count_with_name_and_time ON events(yes_rsvp_count) INCLUDE (name, time);
</sql>

Siehe [Katz (2018): Why Covering Indexes in Postgres Are Incredibly Helpful](https://blog.crunchydata.com/blog/why-covering-indexes-are-incredibly-helpful) und [Postgres Dokumentation](https://www.postgresql.org/docs/13/sql-createindex.html).

## Index für Volltexsuche

Für Abfragen mit `LIKE` hilft ein normaler Index nicht.
Dafür braucht man eigenen eigenen Index für die Volltextsuche.

Hier ein Beispiel: eine Tabelle mit Namen und Länderkürzel von ca. 170.000 Städten:

<sql>
# explain analyze SELECT concat(name,',',country) as label FROM city WHERE name ILIKE 'Salz%'  ORDER BY name LIMIT 150;
                                                      QUERY PLAN
----------------------------------------------------------------------------------------------------------------------
 Limit  (cost=3065.44..3065.48 rows=17 width=43) (actual time=1698.352..1698.370 rows=24 loops=1)
   ->  Sort  (cost=3065.44..3065.48 rows=17 width=43) (actual time=1698.350..1698.357 rows=24 loops=1)
         Sort Key: name
         Sort Method: quicksort  Memory: 26kB
         ->  Seq Scan on city  (cost=0.00..3065.09 rows=17 width=43) (actual time=1303.415..1679.370 rows=24 loops=1)
               Filter: ((name)::text ~~* 'Salz%'::text)
               Rows Removed by Filter: 168780
 Planning time: 1.086 ms
 Execution time: 1698.456 ms
(9 rows)
</sql>

§

Nun legen wir einen "general inverted index" - abgekürzt gin - an:

<sql>
CREATE INDEX trgm_idx_city_name ON city USING gin(name gin_trgm_ops);
</sql>

Über diese Datenstruktur lernen Sie mehr in der Lehrveranstaltung "Information Retrieval" im 6.Semester.

§

Danach ist die Abfage wesentlich schneller:

<sql>
# explain analyze SELECT concat(name,',',country) as label FROM city WHERE name ILIKE 'Salz%'  ORDER BY name LIMIT 150;
                                                                QUERY PLAN
------------------------------------------------------------------------------------------------------------------------------------------
 Limit  (cost=113.93..113.97 rows=17 width=43) (actual time=0.936..0.948 rows=24 loops=1)
   ->  Sort  (cost=113.93..113.97 rows=17 width=43) (actual time=0.935..0.940 rows=24 loops=1)
         Sort Key: name
         Sort Method: quicksort  Memory: 26kB
         ->  Bitmap Heap Scan on city  (cost=52.13..113.58 rows=17 width=43) (actual time=0.751..0.845 rows=24 loops=1)
               Recheck Cond: ((name)::text ~~* 'Salz%'::text)
               Rows Removed by Index Recheck: 13
               Heap Blocks: exact=11
               ->  Bitmap Index Scan on trgm_idx_city_name  (cost=0.00..52.13 rows=17 width=0) (actual time=0.676..0.676 rows=37 loops=1)
                     Index Cond: ((name)::text ~~* 'Salz%'::text)
 Planning time: 0.962 ms
 Execution time: 1.006 ms
(12 rows)
</sql>



## Siehe auch

- [GIN indexes in der Postgres Doku](https://www.postgresql.org/docs/current/gin-intro.html)
