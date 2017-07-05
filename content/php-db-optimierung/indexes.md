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

Warum dauert diese Abfrage so lange?  Das können wir mit dem Befehl `EXPLAIN` erforschen:

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


## Siehe auch

* [Latency Numbers Every Programmer Should Know ](https://gist.github.com/jboner/2841832)
* [Latency Numbers, Humanized](https://gist.github.com/hellerbarde/2843375#file-latency_humanized-markdown)
* [prezi](https://prezi.com/pdkvgys-r0y6/latency-numbers-for-programmers-web-development/)