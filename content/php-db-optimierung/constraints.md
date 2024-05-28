---
title: Constraints
order: 30
---


"Constraints" sind absichtliche **Einschränkungn** die man den Daten
auferlegen kann.


§

Ein Constraint kennen Sie schon:


<sql>
sql> CREATE TABLE departments ( dep_name VARCHAR(20) PRIMARY KEY, … );
completed in 23ms
sql> INSERT INTO departments VALUES('Marketing')
1 row(s) affected in 16ms
sql> INSERT INTO departments VALUES('Engineering')
1 row(s) affected in 7ms
sql> INSERT INTO departments VALUES('Marketing')
[23505] ERROR:
  duplicate key value violates unique constraint "departments_pkey"
  Detail: Key (name)=(Marketing) already exists.
</sql>

Was ist hier passiert?

§

Die Spalte `dep_name` ist der Primärschlüssel der Tabelle.
Die Werte in dieser Spalte müssen also eindeutig sein.

Beim Versuch zum zweiten Mal 'Marketing' in die Spalte einzufügen erhalten
wir die Fehlermeldung:

<plain>
[23505] ERROR:
  duplicate key value violates unique constraint "departments_pkey"
  Detail: Key (name)=(Marketing) already exists.
</plain>

Der Primärschlüssel muss eindeutig sein.  Das ist ein **unique constraint**.

§

Ein  **unique constraint** kann man auf eine beliebige Spalte anwenden:

<sql>
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE,
  email VARCHAR(220) UNIQUE
);
</sql>

§

Ein  **unique constraint** kann man auf eine Kombination ovn Spalten anwenden.
Hier wollen wir, dass ein Artikel nur einmal von einer Pseon reviewed werden kann:

<sql>
sql> CREATE TABLE review (
    article_id int NOT NULL,
    user_id int NOT NULL,
    UNIQUE (article_id, user_id)
)
completed in 23ms
sql> INSERT INTO review (article_id, user_id) VALUES (1,1);
INSERT 0 1
sql> INSERT INTO review (article_id, user_id) VALUES (1,1);
ERROR:  duplicate key value violates unique constraint "review_article_id_user_id_key"
DETAIL:  Key (article_id, user_id)=(1, 1) already exists.
</sql>

## Namen für Constraints

Jedes Constraint hat einen Namen. Wenn wir beim Erzeugen keinen Namen setzen
wird ein Name automatisch erzeugt. Das war in den bisherigen Beispielen der Fall.

Mit `\d` kann man in postgres Informationen zu einer Tabelle anzeigen.
Das sieht dann so aus:

<plain>
\d review
                 Table "public.review"
   Column   |  Type   | Collation | Nullable | Default
------------+---------+-----------+----------+---------
 article_id | integer |           | not null |
 user_id    | integer |           | not null |
Indexes:
    "review_article_id_user_id_key" UNIQUE CONSTRAINT, btree (article_id, user_id)
</plain>


## References

Was bedeutet die Fehlermeldung am Ende?

<sql>
CREATE TABLE departments (
  dep_id SERIAL PRIMARY KEY,
  dep_name VARCHAR(20)
);
CREATE TABLE employees (
  name VARCHAR(20),
  dep_id integer NULL REFERENCES departments(dep_id)
);
INSERT INTO employees VALUES('Brigitte Jellinek', 99)
[23503] ERROR: insert or update on table "employees"
  violates foreign key constraint "employees_dep_id_fkey"
  Detail: Key (dep_id)=(99) is not present in table "departments".
</sql>


## Referenzielle Integrität

Mit einem **foreign key constraint** kann man die Existenz des Fremdschlüssels
in der anderen Tabelle sicher stellen.

Hier verweist die Spalte `dep_id` in der Tabelle `employees` auf
die Spalte `dep_id` in der Tabelle `departments`.

`dep_id` ist also der Primary Key von `departments` und ein Foreign Key in `employees`.

Mit dem Keyword `REFERENCES` wird diese Beziehung als Constrait festgelegt, es ist
nicht möglich in `employees` eine `dep_id` zu benutzen, die in `departments` nicht existiert.

<sql>
CREATE TABLE departments (
  dep_id SERIAL PRIMARY KEY,
  dep_name VARCHAR(20)
);
CREATE TABLE employees (
  name VARCHAR(20),
  dep_id integer NULL REFERENCES departments(dep_id)
);
</sql>

Fremdschlüssel sind auch gute Kanditeten für einen Index: Wenn man
die Abfrage machen will "Welche Leute arbeiten im Department 7" ist
es gut einen Index auf `dep_id` in `employees`  zu haben.


