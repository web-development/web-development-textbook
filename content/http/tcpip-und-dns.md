---
title: TCP/IP und DNS
order: 20
---
Um das Protokoll des Web zu verstehen erst ein paar grundsätzliche Informationen zur Funktionsweise des Internets. Genaueres erfahren Sie in einer seperaten Lehrveranstaltung zum Thema Computer-Netwerke.

Das Internet
-----------

Das Internet ist ein weltweites Computernetzwerk, oder besser: ein Netzwerk von Netzwerken.  Es sind 
**verschiedene Computer** daran angeschlossen: PCs mit Betriebssystem Windows oder Linux, 
Macs, UNIX-Workstations, Smartphones und Tablets, Drucker und Fernseher, und noch viele mehr. 
Die einzelnen **Netze** sind sehr unterschiedlich: Kupferleitungen, Glasfaserleitungen, 
Satelliten-Verbindungen, Ethernet, Funkstrecken, verschiedene Handy-Netze. 
Die **Besitzverhältnisse** sind kompliziert: die Leitungen und Computer gehören verschiedenen 
Firmen, Universitäten, Schulen, Vereinen, Privatpersonen.  

Was hält das Internet dann zusammen? Das **Internet Protokoll**. Aufbauend auf die Grund-Netze 
(z.B. Ethernet) muss jeder Computer im Internet (genannt „Host“) diese Protokoll-Familie 
implementieren. Zwischen den Netzen vermitteln **Router** die Pakete von einem Netz zum Nächsten weiterleiten.

### IP-Adressen

Die eindeutigen Adressen für Hosts im Internet werden zentral verwaltet. 
Die Internet Assigned Numbers Authority (IANA) hat diese Aufgabe an 
Organisationen auf den verschiedenen Kontinenten verteilt, in Europa an das 
Réseaux IP Européens Network Coordination Centre (RIPE NCC). 
RIPE vergibt die Adressen an die Internet-Provider in Europa. 
In der Whois-Datenbank von RIPE kann man die „Besitzer“ von IP-Adressen herausfinden.

### IP – das Internetprotokoll

Der Host teilt die zu sendenden Daten in einzelne Pakete und versieht jedes Pakt 
mit der Absender- und Zieladresse (IP-Adressen, 4 Byte). Der Host 
selbst kennt nur sein Standard-Gateway (= der nächste Router) und das eigene Netzwerk. 
Über das eigene Netzwerk schickt er das Paket an das Standard-Gateway. 

Der Router nimmt das Paket auf dem einen Netzwerk entgegen und entscheidet 
auf Grund der Adressen auf welchem Netzwerk und an welchen Router er das 
Paket weiterleitet.  Beim Ziel-Host langen die Pakete ein – es gibt aber 
keine Garantie, dass alle ankommen oder dass sie in der richtigen Reihenfolge ankommen.

### TCP - Transmission Control Protocol

TCP bietet zusätzlich zur Datenübertragung die Sicherheit, 
dass Pakete nicht unterkannt verloren gehen und dass sie 
– falls sie ankommen – in der richtigen Reihenfolge ankommen. 

Dazu wird der Datenstrom wieder in IP-Pakete zerlegt, diese werden aber 
nummeriert bevor sie abgesendet werden. Die Adressierung erfolgt über 
IP-Adresse plus **Port-Nummer**. Der Ziel-Host prüft die Reihenfolge 
der Pakete und meldet zurück falls Pakete fehlen. 

Aus Programmier-Sicht erhält man also entweder die Daten 
in richtiger Reihenfolge oder eine Fehlermeldung.

### DNS – Domain Name System

Das Domain Name System ist eine verteilte Datenbank die „hübsche Namen“ 
für Hosts speichert. Z.B. ist dort zu `multimediatechnology.at` die IP-Adresse 
`193.170.119.79s` gespeichert. 
Viele Namen verweisen übrigens auf die gleiche IP-Adresse. 

Auf jedem Host ist die IP-Adresse des nächsten Domain Name Servers gespeichert. 
So kann der Host einen „domain name lookup“ machen: er fragt seinen DNS-Server 
„was ist die IP-Adresse von x.y.z“ und erhält als Antwort die IP-Adresse. 

Der DNS-Server übernimmt dabei die Arbeit eventuell bei mehreren anderen 
DNS-Servern nachzufragen. Auch die Top-Level-Domains (.com, .at, .de, …) 
werden von IANA verwaltet und können über Whois abgefragt werden. 
Für die Domain .at ist die Firma nic.at zuständig.

