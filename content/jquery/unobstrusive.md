---
title: Unobstrusive Javascript
order: 10
---

In Zusammenhang mit jQuery werden die Fachbegriffe „graceful degradation“, „progressive enhancement“  und „unobstrusive“ verwendet. Dahinter verbergen sich zwei verwandte, aber verschiedene Konzepte.


## Unobstrusive Javascript

"obstrusive" bedeutet störend oder aufdringlich. Unobstrusive Javascript ist
also Javascript dass nicht stört.  Und zwar den HTML-Code nicht stört.

Bei der Verwendung von jQuery bleibt der HTML-Code „javascript-frei“: jQuery wird nur an einer Stelle, im Head des Dokuments eingebaut.

<htmlcode>
  <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
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

Unter `https://code.jquery.com/`  kann man jquery in verschiedenen Versionen beziehen, und den
code auch direkt einbinden. Hinter `code.jquery.com` steht nicht nur ein Server, sondern das [NetDNA](http://www.netdna.com/) CDN (Content Delivery Network). 

Der empfohlene Code zur Einbindung enthält eine Quersumme zur Sicherheit: so kann es
nicht passieren, dass eine gefälchste Version von jQuery verwendet wird, die Schadcode enthält.

Nur wenn man offline Entwickeln will, oder die Webseite offline funktioniern soll, muss man die Library wirklich herunterladen.


