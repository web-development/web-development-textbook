---
title: Datenbank
order: 5
---

<script>document.location="/php-db-lesen/db/";</script>

MySQL[*](http://www.mysql.com/) ist die relationale Datenbank, die bei
gemietetem Webspace am öftesten angeboten wird. MySQL ist Open Source.

MariaDB[*](https://mariadb.org/) ist ein "Fork" von MySQL, die Entwicklung hat
sich im Jahr 2009 verzweigt. 

![MySQL und MariaDB Logos](/images/mysql-und-mariadb-logo.png)

Falls Sie noch keine relationale Datenbank auf Ihrem Entwicklungsrechner
installiert haben empfehle ich MariaDB.

Hier wird nicht die Funktionsweise einer relationalen Datenbank erklärt (siehe
Lehrveranstaltung im 1.Semester), sondern nur die Besonderheiten von
MySQL/MariaDB und die für Web-Applikationen wichtigen Aspekte.

MySQL Installation, Wiederholung, Dokumentation
------------------------------------------------
MySQL ist im Paket XAMPP enthalten. (Man könnte die Datenbank auch separat von mysql.com herunterladen und installieren.) In der Standardinstallation ist ein Administrator-Account „root“ ohne Passwort vorhanden. 

MariaDB wird auf der Homepage des Projekts [zum Download
angeboten](https://downloads.mariadb.org/).

Alle Code-Beispiel funktionieren für MySQL und MariaDB genau gleich.

### MySQL-Shell

Die MySQL-Shell[*](http://dev.mysql.com/doc/refman/5.6/en/mysql.html) wird wie folgt gestartet:

    mysql -p -u USERNAME DATENBANKNAME

Die Option `-p` sorgt dafür, dass ich nach einem Passwort gefragt werde (die
alternative wäre das Passwort als Argument anzugeben)
Mit der Option `-u` gebe ich den Usernamen mit an.
Zuletzt (und ohne Option) wird der Name der Datenbank als Argument übergeben.

Konkret sieht das dann so aus:

    > mysql -p –u root portfolio_playground
    Welcome to the MariaDB monitor.  Commands end with ; or \g.
    Your MariaDB connection id is 192
    Server version: 5.5.28-MariaDB Source distribution

    Copyright (c) 2000, 2012, Oracle, Monty Program Ab and others.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    MariaDB [portfolio_playground]>

### SQL Importieren

Auf der Kommandozeile kann man auch ganze Dateien mit SQL-Befehlen auf einen Schlag einspielen,
dabei verwenden wir die Eingabeumlenkung der Shell (siehe [Linux openbook:Eingabeumlenkung](http://openbook.galileocomputing.de/ubuntu_1104/linux_07_008.htm#mjc7a653a8681ed7268edaff751d10f51f))

    > mysql -p –u USERNAME –p DATENBANAME < DATEINAME

oder konkret:

    > mysql -p –u root –p portfolio_playground < portfolio_playground.sql

### Tabellen anzeigen

`show tables`[*](http://dev.mysql.com/doc/refman/5.6/en/show-tables.html) zeigt alle Tabellen in der aktuellen Datenbank:

    mysql> show tables;
    +------------------------------------------+
    | Tables_in_portfolio_playground           |
    +------------------------------------------+
    | agegroups                                | 
    | agegroups_studycourses_departments_users | 
    | assets                                   | 
    | departments                              | 
    | projects                                 | 
    | projects_roles_users                     | 
    | projects_tags                            | 
    | roles                                    | 
    | studycourses                             | 
    | tags                                     | 
    | urls                                     | 
    | users                                    | 
    +------------------------------------------+
    12 rows in set (0.00 sec)

### Eine Tabelle beschreiben

`explain`[*](http://dev.mysql.com/doc/refman/5.6/en/explain.html) zeigt den Aufbau einer bestimmten Tabelle:

    mysql> explain users;
    +-----------------+--------------+------+-----+---------+----------------+
    | Field           | Type         | Null | Key | Default | Extra          |
    +-----------------+--------------+------+-----+---------+----------------+
    | id              | int(11)      | NO   | PRI | NULL    | auto_increment | 
    | firstname       | varchar(255) | YES  |     | NULL    |                | 
    | surname         | varchar(255) | YES  |     | NULL    |                | 
    | title           | varchar(255) | YES  |     | NULL    |                | 
    | email           | varchar(255) | YES  | UNI | NULL    |                | 
    | isfemale        | tinyint(1)   | YES  |     | NULL    |                | 
    | profile_visible | tinyint(1)   | YES  |     | NULL    |                | 
    | type            | varchar(255) | YES  | MUL | NULL    |                | 
    | is_admin        | int(11)      | YES  |     | 0       |                | 
    | description     | text         | YES  |     | NULL    |                | 
    | slug            | varchar(255) | YES  | UNI | NULL    |                | 
    | avatar          | varchar(255) | YES  |     | NULL    |                | 
    +-----------------+--------------+------+-----+---------+----------------+
    12 rows in set (0.00 sec)

### Abfrage

`select` und `join` funktionieren wie erwartet:

    mysql> select id,firstname from users limit 1,8;
    +----+-----------+
    | id | firstname |
    +----+-----------+
    |  2 | Lea       | 
    |  3 | Stefan    | 
    |  4 | Karin     | 
    |  5 | Katharina | 
    |  6 | Julia     | 
    |  7 | Gianni    | 
    |  8 | Josef     | 
    |  9 | Michael   | 
    +----+-----------+
    8 rows in set (0.01 sec)

### Dokumentation

Die Details zu SQL in MySQL (Abweichungen vom SQL Standard, Erweiterungen) kann man der [Dokumentation](http://dev.mysql.com/doc/refman/5.6/en/index.html) entnehmen.

![Dokumentation von MySQL auf http://dev.mysql.com/](/images/mysql-doku.png)

phpMyAdmin
---------

PhpMyAdmin ist ein häufig verwendetes Tool zur Verwaltung von MySQL Datenbanken.
Es ist in PHP geschrieben, kann also im Webspace installiert und über
den Browser verwendet werden.  

![phpMyAdmin](/images/phpmyadmin.png)

### Create Table in phpMyAdmin

Über phpMyAdmin kann man viele SQL-Befehle durch Point+Klick formulieren,
hier zum Beispiel ein `create table` Statement:

![Abbildung 143: Tabelle anlegen mit phpMyAdmin - Name der Tabelle](/images/phpmyadmin-create-table.png)


### SELECT in phpMyAdmin

Bei manchen Operationen zeigt phpMyAdmin das verwendete SQL-Statement an — das kann sehr lehrreich sein.

![Abbildung 143: Suchen mit  phpMyAdmin - Eingabemaske](/images/phpmyadmin-search.png)
![Abbildung 143: Suchen mit  phpMyAdmin - SQL](/images/phpmyadmin-search-sql.png)

