---
title: Constraints 
order: 30
---


"Constraints" sind absichtliche **Einschränkungn** die man den Daten
auferlegen kann.  


§

Ein Constraint kennen Sie schon: Wenn man einen
Primäreschlüssel definiert, dann soll dieser ja jeden Datensatz
eindeutig identifizieren. Das heisst: der Primärschlüssel muss
eindeutig sein.  Das ist ein **unique constraint**.


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


§

Ein  **unique constraint** kann man auch einer anderen Spalte,
oder einer Kombination von Spalten auferlegen.


<sql>
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE,
  email VARCHAR(220) UNIQUE
);
</sql>

## Referenzielle Integrität

Bei einer Beziehung macht es Sinn, die Existenz des Fremdschlüssels
in der anderen Tabelle mit einem **foreign key constraint** sicher zu
stellen.  

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

