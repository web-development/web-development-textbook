---
title: 3d Canvas
order: 40
---

Wenn der `canvas` Tag in der 3d Variante verwendet wird,
kommt wirklich die Grafikkarte mit ihrer ganzen Render-Pipeline zum Einsatz
um 3D Szenen zu rendern. Diese API des Browsers wird
'''WebGL''' genannt, und basiert auf OpenGL ES 2.0.

WebGL wird [von allen Browsern unterstützt](http://caniuse.com/#feat=webgl),
sogar am Smartphone.

- [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217)

## Libraries für WebGL

WebGL direkt zu programmieren ist sehr aufwändig. Die Library `three.js`
ermöglicht die direkt arbeit mit 3d-Objekten, Materialien, Szenen, Kameras.

<canvas id="my_canvas" width="500" height="500"></canvas>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r77/three.js"></script>
<script src="/images/cube.js"></script>

- [Library three.js](http://blog.teamtreehouse.com/the-beginners-guide-to-three-js)
- [Online Tutorial for three.js](https://discoverthreejs.com/book/1-first-steps/intro/) 
- [Library osgjs](https://github.com/cedricpinson/osgjs) zum Import von Open Scenegraph
- [Babylon.js](https://www.babylonjs.com/)

## Game Engines

Auf WebGL basieren viele Game Engines für das Web. z.B:

![Playcanvas](/images/grafik/playcanvas.png)

- [Playcanvas](https://playcanvas.com/)
- [Pixijs](https://www.pixijs.com/)

Einen Überblick bietet [html5gameengine.com](https://html5gameengine.com/tag/webgl)
