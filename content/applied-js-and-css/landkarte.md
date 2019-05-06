---
title: Landkarte
order: 35
---

<div class="alert"><strong>ToDo</strong> fertig stellen </div>


Zwei Varianten:

* Google Maps - kommerziell
* Open Street Map - Creative Commons Lizenz


## Statische Karte

<html>
  <div id="map" class="static"></div>
</html>

<css>
  #map.static {
    background-size: cover;
    background-image: url(map.png); 
  }
</css>

## Dynmische Karte mit leaflet

Für die Darstellung von Open Street Map

<javascript>
var map = L.map('map').setView([lat, lng], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$('map').removeClass('static');
</javascript>

## Vertiefung

* [Homepage von Leaflet](https://leafletjs.com)


