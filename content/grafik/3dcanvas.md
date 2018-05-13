---
title: 3d Canvas
order: 40
---


Wenn der `canvas` Tag in der 3d Variante verwendet wird,
kommt wirklich die Grafikkarte mit ihrer ganzen Render-Pipeline zum Einsatz
um 3D Szenen zu rendern. Diese API des Browsers wird
'''WebGL''' genannt, und basiert auf  OpenGL ES 2.0.

WebGL wird [von allen Browsern unterstützt](http://caniuse.com/#feat=webgl),
sogar am Smartphone.

* [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217)

## three.js ##

WebGL direkt zu programmieren ist sehr aufwändig. Die Library `three.js`
ermöglicht die direkt arbeit mit 3d-Objekten, Materialien, Szenen, Kameras.

<canvas id="my_canvas" width="500" height="500"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.js"></script>
<script src="/images/cube.js"></script>

* [Library three.js](http://blog.teamtreehouse.com/the-beginners-guide-to-three-js)
* [Library osgjs](https://github.com/cedricpinson/osgjs) zum Import von Open Scenegraph

## Game Engines ##

Auf WebGL basieren viele Game Engines für das Web. z.B:

![Physics Turbulenz](/images/turbulenz.png)

[Turbulenz](http://biz.turbulenz.com/developers)


siehe auch [html5gameengine.com](https://html5gameengine.com/tag/webgl)



