---
title: Werkzeuge
order: 33
---

Wie kann man HTTP untersuchen? 


HTTP abhören
--------------
Wie können Sie HTTP beobachten?  Mit einem allgemeinen
**Netzwerk-Sniffer** wie [Wireshark](http://www.wireshark.org/) oder mit Browser-AddOns
wie [Live HTTP Headers](https://addons.mozilla.org/en-US/firefox/addon/live-http-headers/)
oder [Firebug](https://addons.mozilla.org/en-US/firefox/addon/firebug/?src=search). 

### Wireshark

Mit Wireshark können Sie den gesamten Netzverkehr abhören, der für Ihren
Computer sichtbar ist.  Das sind nicht nur Pakete die HTTP betreffen, sondern
auch noch viele andere. 

![Netzverkehr abhören mit Wireshark](/images/wireshark-fullscreen.png)

Die einzelnen Pakete kann man von Wireshark wieder
zusammesetzen lassen: mit einem "Rechtsklick" auf ein bestimmtes Paket und
der Auswahl des Menüpunktes "Follow TCP Stream".

Mit "Rechtskick" "Copy" "Bytes as printable Text" kann man nun den gesamten
Request + Response herauskopieren:


### Developer Tools im Browser

Mit Firefox Developer Tools oder Chrome Dev Tools kann nur den Verkehr zwischen Browser und Webservern abhören, 
also weniger als Wireshark.
Aber: die Tools im Browser können auch HTTPS-Verbindungen abhören, die der
Browser selbst aufgebaut hat.  Wireshark
würde hier nur die verschlüsselten Daten sehen.

Der "Network Monitor" in Firefox Developer Tools zeigt mehrere Requests auf einmal an.
In dieser Ansicht kann man gut sehen wie lange die Beantwortung jeweils dauert:

![Darstellung von HTTP-Requests im Netzwerk Monitor in Firefox](/images/firefox-network.png)

Um Details eines Requests zu sehen muss man ihn anklicken.  

![Darstellung von einem HTTP-Request im Netzwerk Monitor von Firefox](/images/firebug-headers.png)

In Chrome sieht das ähnlich aus:

![Darstellung von HTTP-Requests im Network Panel von Chrom](/images/chrome-network.png)


### mit curl HTTP Request senden

`curl` ist eine Kommandozeilen Tool zum senden von HTTP Requests.
Hier ein Beispiel:

<shell>
curl 'http://users.fh-salzburg.ac.at/~bjelline/u2/bestellung.php'
  -H 'Cookie: _ga=GA1.3.1837452953.1440699405' 
  --data 'anzahl=a&adresse=1'
</shell>

Aus dem Firefox Network Monitor kann man zu jedem Request den entsprechenden
curl Befehl heraus kopieren:

![copy as curl im Netzwerk Monitor in Firefox](/images/firefox-copy-as-curl.png)
