---
title: Unobstrusive Javascript
order: 10
---

In Zusammenhang mit jQuery werden die Fachbegriffe „graceful degradation“, „progressive enhancement“  und „unobstrusive“ verwendet. Dahinter verbergen sich zwei verwandte, aber verschiedene Konzepte:

## graceful und progressive

Die Library jQuery unterstützt das Prinzip der „graceful degradation“ – auch ohne Javascript sind Webseiten mit jQuery immer noch gut verwendbar. Dieses Prinzip wird auch „progressive enhancement“ genannt, und bezieht sich nicht nur auf Javascript, sondern auch auf andere „Zusatz-Technologien“ wie z.B. Flash.

Die Idee ist dabei immer die Gleich: man baut die Webseite zuerst ohne Javascript, und fügt dann Javascript hinzu (ohne die Verwendbarkeit ohne Javascript zu zerstören). Der Inhalt (Content) der Webseite bleibt auch ohne Javascript zugänglich.


![Abbildung 60: Die Rolle von Content, Darstellung und Programmierung (Unobstrusive Javascript)](/images/image267.png)

§

Von dieser Herangehensweise profitieren nicht nur Blinde, Menschen mit veralteten Browsern oder exotischen Ausgabegeräte. Auch für Suchmaschinen wie Google oder andere Programme die die Information aus den Webseiten weiter verarbeiten ist dieses Prinzip hilfreich.

Um zu testen, ob das wirklich funktioniert kann man ganz einfach mit dem Firefox-AddOn QuickJava testen. Wie hier gezeigt kann Javascript mit einem Klick deaktiviert werden.


![Abbildung 61: Javascript deaktivieren mit QuickJava in Firefox](/images/image269.png)

## Grenzen von Graceful Degradation

Es gibt Websites, bei denen dieser Ansatz nicht funktionieren kann.
z.B. für einen Shooter als Browsergame kann man nicht eine
Javascript-Freie Alternative anbieten.

Für viele Apps funktioniert das aber.  Probieren Sie z.B. gmail ohne Javascript
aus, oder das Webmail der FH (zimbra).  Die Interaktion ist etwas
umständlicher, aber man kann alle Features der Mail benutzen.

## unobstrusive

Bei der Verwendung von jQuery bleibt der HTML-Code „javascript-frei“: jQuery wird nur an einer Stelle, im Head des Dokuments eingebaut. Das nennt man „unobstrusive Javascript“.

<htmlcode>
  <script src="//code.jquery.com/jquery-latest.min.js"></script>
  <script>
  $(document).ready(function(){ 
        // Javascript code here 
  }); 
  </script>
  </head>
  <body>
        <!--  plain html here, no onclick or onload or ... -->
  </body>
</htmlcode>

## jquery vom CDN

Die URL http://code.jquery.com/jquery-latest.js kann man für alle Webseiten die online sind verwenden: hinter code.jquery.com steht nicht nur ein Server, sondern das [NetDNA](http://www.netdna.com/) CDN (Content Delivery Network). Nur wenn man offline entwickeln will muss man die Library wirklich herunterladen.
