---
title: CSS für Positionierung
order: 99
---


Absolute Positionierung
------------------------
Mit der Deklaration `position: absolute` wird ein Tag aus der normalen Darstellung 
herausgenommen und über dem restlichen Inhalt der Seite platziert. 
Mit `top` und `left` kann die linke obere Ecke des Elements positioniert werden. 
(oder mit `bottom` und `right` die rechte unter Ecke).
In folgendem Beispiel wird ein absolut positiniertes Menü kombiniert mit
einem Inhalt mit `margin-left` - sonst würde das Menü den Inhalt verdecken!

<css>
#navi {
  position: absolute;
  width: 80px;
  top:    0px;
  left:   0px;
}
__|__
#content {
  margin-left: 100px;
}



</css>

§
 
![Abbildung 40: Kombination von absoluter Positionierung und margin-left](/images/image142.png)

Koordinatensystem
------------

Die Koordinaten (`top` und `left`) beziehen sich normalerweise auf die linke obere Ecke des Browserfenster. 

Ein Element mit der Eigenschaft `position: absolute` oder `position: relative` bildet für seine untergeordneten Elemente ein neues Koordinationsystem. In folgendem Code definiert das main-div ein neues Koordinatensystem, das navi-div ist also in der linken oberen Ecke des main-div und nicht in der linken oberen Ecke des Browser-Fensters positioniert. 

<htmlcode>
<div id="main">
  <div id="content">
    <h1>Inhalt</h1>
    <p>Hier der Inhalt.</p>
    <p>Hier der Inhalt.</p>
    <p>Hier der Inhalt.</p>
    <p>Hier der Inhalt.</p>
  </div>
  <div id="navi">
    <p>a</p>
    <p>b</p>
    <p>c</p>
    <p>d</p>
    <p>e</p>
  </div>
</div>
__|__
#main {
  border: 1px red solid;
  position:relative;
  width: 700px;
  margin: 0px auto;
} 
#content {
  margin-left: 120px;
  background-color: yellow;
}
#navi {
  position: absolute;
  width: 80px;
  top:0px;
  left:0px;
}
</htmlcode>


[Beispiel-Seite](/images/koord.html)


