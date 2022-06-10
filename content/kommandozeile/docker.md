---
title: Docker
order: 90
---

Das Logo von Docker ist ein Walfisch der Container trägt - aber was steckt dahinter?

![](/images/docker/docker-logo.svg)


## Container

Was ist ein Container?  Ein standardisierter Behälter, der den Transport
von Gütern vereinfacht. Wie zum Beispiel der [ISO Container](https://de.wikipedia.org/wiki/ISO-Container).

Wir arbeiten mit Betriebssystemen und Software, was bedeutet Container hier?

Die [Containervirtualisierung](https://de.wikipedia.org/wiki/Containervirtualisierung) ist eine
Methode auf einem Host-Betriebssystem mehrere Instanzen des Betriebssystem voneinander isoliert
laufen zu lassen.

Docker ist das bekannteste Beispiel für Containervirtualisierung.

## Vergleich Virtualisierung

Schon vor der Containervirtualisierung gab es die Virtualisierung mit Hypervisor -
z.B. mit VirtualBox oder VMWare.
Ein Hypervisor lässt Virtuelle Maschinen (VMs) auf derselben Hardware laufen. Jede "Gast-VM"
glaubt die Hardware alleine zu benutzen.

Bei der Containervirtualisierung werden Teile des Host-Betriebssystem in den Containern
mit verwendet, die Virtualisierung erfolgt also auf einer höheren Ebene:

![](/images/docker/vm-vs-container.svg)

## Grundbegriffe von Docker

Wichtige Begriffe sind:

* Image
* Container
* Volume
* Dockerfile

### Image

Der Begriff Image wird nicht nur für digitale Bilder verwendet, sondern
auch für das "Abbild" eines ganzen Dateisystems.

Wenn man z.B. mit CDs oder DVDs arbeitet
spricht man davon ein "Image zu brennen" wenn man Daten auf der CD oder DVD speichert.
Dieses Image enthält ein ganzes Dateisystem, das man dann später auf der DVD verwenden kann.
Aber zum Zeitpunkt des "Brennens" ist das Image eine sehr große binäre Datei, die auf einen
Schlag auf die DVD geschrieben wird.

Bei Docker ist ein Image ein vorbereitetes Dateisystem, das auf das
Host-System "drauf-gesetzt" werden kann.

Mit dem Kommandozeilen-Befehl `docker images` kann man sehen
welche images schon vorhanden sind:

<shell>
$ docker images
REPOSITORY           TAG       IMAGE ID       CREATED        SIZE
tb-web-development   latest    b0adb8f50f6c   11 days ago    1.64GB
pandoc/latex         latest    5c1d8e5aafcd   2 months ago   654MB
</shell>

### Image holen

Die Webseite Dockerhub [https://hub.docker.com/](https://hub.docker.com/) ist
ein zentraler Speicher für Images.  Hier kann Images suchen und ihre Dokumentation
zu lesen: [explore](https://hub.docker.com/search?q=).

Und man kann sich registieren um Images hochzuladen oder runterzuladen.

Auf der Kommandozeile sieht das so aus:
<shell>
docker login
docker pull pandoc/latex:latest
docker pull ubuntu:latest
</shell>

Images haben immer einen Namen und eine Versionsbezeichnung, getrennt durch einen Doppelpunkt.

## Container

Ein Container ist eine lauffähige Zusammenstellung als Image plus weiterer
Konfiguration. Der Container kann gestartet werden.

Mit dem Kommandozeilen-Befehl `docker ps` kann man sehen
welche Container gerade laufen. So sieht das z.B. aus wenn
gitlab in einem container läuft:

<shell>
 docker ps
CONTAINER ID        IMAGE                     COMMAND             CREATED             STATUS                PORTS                                        NAMES
cdf2ad32e7fc        gitlab/gitlab-ce:latest   "/assets/wrapper"   2 days ago          Up 2 days (healthy)   193.171.143.2:22->22/tcp, 193.171.143.2:80->80/tcp, 193.171.143.2:443->443/tcp, 193.171.143.2:5050->5050/tcp, 193.171.143.4:80->8079/tcp   gitlab_web_1
</shell>


Auf dem server project.multimediatechnology.at laufen sehr viele Projekte in verschiedenen
docker containern, hier ein kurzer Auszug:

<shell>
# docker ps
CONTAINER ID IMAGE                           COMMAND                  CREATED       STAT
12246a07     dokku/skinavie:latest           "/start web"             3 days ago    Up 3 days
f4b9c5ab     dokku/stempelheft:latest        "/exec rails console"    3 days ago    Up 3 days
9016e13a     svendowideit/ambassador         "/bin/run.sh"            3 weeks ago   Up 3 weeks
d16eb536     dokku/stempelheft:latest        "/start web"             3 weeks ago   Up 3 weeks
a3fd20b7     dokku/fago:latest               "/start web"             4 weeks ago   Up 4 weeks
9f5030a8     pgrouting/pgrouting:latest      "docker-entrypoint..."   6 weeks ago   Up 6 weeks
82f8e908     postgres:13.2                   "docker-entrypoint..."   2 months ago  Up 2 months
6bd4b634     dokku/beerpong_reloaded:latest  "/start web"             3 months ago  Up 3 months
1732d49a     dokku/soundlink:latest          "/start web"             3 months ago  Up 3 months
55af4cf7     dokku/aupair_app:latest         "/start web"             3 months ago  Up 3 months
b0a10815     dokku/knotenpunkt:latest        "/start web"             4 months ago  Up 4 months
</shell>


Mit dem Kommandozeilenbefehl `docker run` kann man einen Container starten:

<shell>
docker run pandoc/latex
</shell>

Dieser Container läuft kurz und stoppt von selbst wieder.  Er hinterlässt einen
abgeschaltenen Container. Besser wäre:

<shell>
docker run --rm pandoc/latex
</shell>

Tut immer noch nicht sinnvolles, aber hinterlässt auch keine zusätzlichen Daten.

### eigenes Dateisystem

Ein Docker Container hat sein eigenes Dateisystem und erst mal keine Verbindung zum Host-Dateisystem.

Wenn der Container während der Laufzeit etwas ins eigene Dateisystem schreibt ist das
im Host-Dateisystem nicht vorhanden.

<shell>
$ docker run --rm -ti ubuntu
root@87712b76b86a:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@87712b76b86a:/# touch tmp/brigitte_war_hier
root@87712b76b86a:/# ls tmp/
brigitte_war_hier
</shell>

Wird derselbe Container später nochmal gestartet ist das Dateisystem wieder im Anfangszustand.

<shell>
$ docker run -ti ubuntu
root@9f80c9069e71:/# ls tmp/brigitte_war_hier
ls: cannot access 'tmp/brigitte_war_hier': No such file or directory
</shell>

Will man etwas dauerhaft im Host Dateisystem speichern braucht man dafür ein Volume.

## Volume

Ein Volume ist ein Ornder der mit dem "echten" Dateisystem verbunden ist.

Beim Start eines Containers kann man angeben, welche Pfad im echten Dateisystem mit dem Volume im container verbunden werden soll:

<shell>
docker run --rm --volume /Users/bjelline/devel/7:/data pandoc/latex
</shell>

Hier wird der Ordner `/Users/bjelline/devel/7` im Host Dateisystem verbunden mit dem Ornder `/data` im Container.

Noch besser:

<shell>
docker run --rm --volume /Users/bjelline/devel/7:/data pandoc/latex README.md -o outfile.pdf
</shell>

Das pandoc/latex image startet automatisch den pandoc Befehl. Der String `README.md -o outfile.pdf`
wird an diesen Befehl als parameter übergeben.  pandoc versucht dann eine Datei `data/REAMDE.md` einzulesen,
die Daten zu konvertieren, und als Datei `data/outfile.pdf` wieder zu speichern.

Da das Verzeichnis `data/` im Container auf den Ordner `7` im Host-Dateisystem gemappt war
wird die neue erzeugte Datei dort hin geschrieben.

So kann man also pandoc im Container verwenden ohne es im Host-Betriebsystem zu installieren.

## Dockerfile

Wie baue ich selbst ein Image?  Mit einem `Dockerfile`.  (Ja dieser Dateiname hat keine Endung.)

Das Dockerfile legt fest wie das Image gebaut wird.  Wenn das Image fertig ist braucht man
das Dockerfile nicht mehr.


### Beispiel

Ein Beispiel:  ich will ein Image das das Kommandozeilen-Programm `wget` enthält.

<shell>
FROM ubuntu
RUN apt-get update && apt-get install -y wget
WORKDIR /data
ENTRYPOINT ["/usr/bin/wget"]
</shell>

Wenn ich nun mit dem Befehl `docker build . -t mein_wget` ein Image bauen lasse
werden folgende Schritte ausgeführt:

1. als Basis-Image wird `ubuntu` verwendet (default zu: `ubuntu:latest`)
   * ein Container mit diesem Basis-image wird gestartet,
   * in diesem Container werden die weiteren Schritte ausgeführt.
2. mit dem Ubuntu-Befehl mit `apt-get update`  werden die neuesten Daten für das Paketsystem `apt` geladen
3. mit dem Befehl `apt-get install wget`  wird ein Softwarepaket mit Namen `wget` installiert.
4. mit dem Befehl `WORKDIR /data` wird ein Ordner angelegt und in den Ordner hinein gewechselt.
6. als Entrypoint wird `/usr/bin/wget` festgelegt - das tut aber noch nichts.

Das Ergebnis ist ein neues image mit einer eindeutigen id und dem von mir vergebenen Namen:

<shell>
$ docker images
REPOSITORY     TAG       IMAGE ID       CREATED          SIZE
mein_wget      latest    4c4d9f9444d9   2 minutes ago   116MB
</shell>


### Mein selbst gebautes Images als Container starten

Mit dem Befehl `docker run --rm mein_wget http://web-development.github.io` starte ich nun
mein image als container.  Dabei passiert folgendes:

1. aus dem Image wird ein laufender Container
2. aus meiner Eingabe wird der Teil nach dem image-Namen genommen: `http://web-development.github.io`
3. der Befehl der als "Entrypoint" eingetragen war wird aufgerufen
   * der Befehl war `/usr/bin/wget`
   * als Argument erhält er `http://web-development.github.io`
   * der Befehl läuft durch und schreibt eventuell output in den aktuellen Ornder (WORKDIR) `data`
4. der Container wird gestoppt.

Der Output des Befehles verschwindet mit dem Container.
Derselbe Befehl nochmal mit einem Volume:

`docker run --rm --volume $(pwd):/data mein_wget http://web-development.github.io`

Nun wird der Output von wget im aktuellen Ordner des Host-Betriebssystems gespeichert.

Tipp: wget hat die Optionen `-r` für rekursives Abrufen aller Links in der Webseite und `--level=2` für die Angabe wie viele Schritte weit die Rekursion gehen soll.


## Siehe auch

* [FROM](https://docs.docker.com/engine/reference/builder/#from) in der docker dokumentation
* [RUN](https://docs.docker.com/engine/reference/builder/#run) in der docker dokumentation
* [WORKDIR](https://docs.docker.com/engine/reference/builder/#workdir) in der docker dokumentation
* [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) in der docker dokumentation
*