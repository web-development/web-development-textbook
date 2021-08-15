---
title: Indexes
order: 20
---

<sql caption="Eine Abfrage die sehr lange dauert">
# SELECT name, time, yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC LIMIT 10;
         name         |        time         | yes_rsvp_count
----------------------+---------------------+----------------
 Facebook. Twitter. V | 2014-04-24 22:30:00 |            614
 Future of 21st Centu | 2013-05-01 22:30:00 |            598
 The AppNexus Ad Plat | 2012-11-12 23:30:00 |            550
 Programmable Big Dat | 2014-05-01 22:30:00 |            496
 Open-Source Database | 2014-05-08 22:30:00 |            450
 Future of NoSQL & Ne | 2014-05-13 22:30:00 |            444
 Bridging the gap, OL | 2014-05-06 22:30:00 |            414
 Throw Some Keys on I | 2014-07-14 22:30:00 |            334
 Resolving the Cloud  | 2012-11-15 23:30:00 |            326
 Creator of MySQL: My | 2013-05-30 22:30:00 |            325
 (10 rows)

Time: 674.327 ms
</sql>

§

Warum dauert diese Abfrage so lange? Das können wir mit dem Befehl `EXPLAIN` erforschen:

<sql>
# explain SELECT name, time, yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC LIMIT 10;
                                 QUERY PLAN
----------------------------------------------------------------------------
 Limit  (cost=30988.25..30988.28 rows=10 width=54)
   ->  Sort  (cost=30988.25..32504.05 rows=606317 width=54)
         Sort Key: yes_rsvp_count
         ->  Seq Scan on events  (cost=0.00..17885.96 rows=606317 width=54)
(4 rows)
</sql>

## Index erzeugen

<sql>
# CREATE INDEX yes_rsvp_count ON events(yes_rsvp_count);
CREATE INDEX
Time: 1212.178 ms
</sql>

§

<sql>
# explain SELECT name, time, yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC;
                                           QUERY PLAN
------------------------------------------------------------------------------------------------
 Index Scan Backward using yes_rsvp_count on events  (cost=0.42..57684.59 rows=606317 width=54)
(1 row)
</sql>

§

<sql>
SELECT substring(name from 1 for 20) AS name, time, yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC LIMIT 10;
         name         |        time         | yes_rsvp_count
----------------------+---------------------+----------------
 Facebook. Twitter. V | 2014-04-24 22:30:00 |            614
 Future of 21st Centu | 2013-05-01 22:30:00 |            598
 The AppNexus Ad Plat | 2012-11-12 23:30:00 |            550
 Programmable Big Dat | 2014-05-01 22:30:00 |            496
 Open-Source Database | 2014-05-08 22:30:00 |            450
 Future of NoSQL & Ne | 2014-05-13 22:30:00 |            444
 Bridging the gap, OL | 2014-05-06 22:30:00 |            414
 Throw Some Keys on I | 2014-07-14 22:30:00 |            334
 Resolving the Cloud  | 2012-11-15 23:30:00 |            326
 Champions League FIN | 2014-05-24 18:30:00 |            325
(10 rows)

Time: 0.775 ms
</sql>

## Die Datenstruktur hinter dem Index: B-Baum

Das Anlegen eines Index mit  `CREATE INDEX` erzeugt eine zusätzliche
Datenstruktur: einen [B-Baum](https://de.wikipedia.org/wiki/B-Baum).

![B-Baum](/images/php-db-optimierung/b-baum.svg)

Der B-Baum ist sortiert, ausbalanziert, und seine Knoten haben jeweils viele
Kinder.

Mit dem Wissen über die Datenstruktur gewinnen wir ein besserer Verständnis für
die Fähigkeiten und Grenzen eines Index:

* Ein Index bedeutet immer zusätzliche Arbeit beim Einfügen, beim Löschen, ...
* das Auslesen kann in logarithmischer Zeit erfolgen
* ...

Besonders effizient ist der Index wenn alle Daten der Abfrage schon
direkt im Baum gespeichert sind, und nicht nochmal separat gelesen werden müssen:

<sql>
# SELECT name, time, yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC LIMIT 10; 
# SELECT yes_rsvp_count FROM events ORDER BY yes_rsvp_count DESC LIMIT 10; 
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

Nun legen wir einen Index an:

<sql>
CREATE INDEX trgm_idx_city_name ON city USING gin(name gin_trgm_ops);
</sql>

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

- [Latency Numbers Every Programmer Should Know ](https://gist.github.com/jboner/2841832)
- [Latency Numbers, Humanized](https://gist.github.com/hellerbarde/2843375#file-latency_humanized-markdown)
- [prezi](https://prezi.com/pdkvgys-r0y6/latency-numbers-for-programmers-web-development/)
